const puppeteer = require("puppeteer");
const download = require("download-file");
import { savedb } from "./excel";

const crawling = async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36"
    );
    await page.goto("http://dorm.inha.ac.kr/board_menu/list.aspx");
    await page.click(
      "#ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_BoardList_GridViewList>tbody>tr>td>a"
    );
    await page.waitForSelector(".board_view");
    const href = await page.evaluate(() => {
      return document.querySelector(
        ".board_view>table>tbody>tr:nth-child(7)>td>div>a"
      ).href;
    });
    const url = href;

    const options = {
      directory: "./public",
      filename: "sikdan.xlsx"
    };

    download(url, options, async function(err) {
      if (err) {
        console.error(err);
      } else {
        await savedb();
      }
    });
    await page.close();
    await browser.close();
    console.log("crawling success");
  } catch (e) {
    console.error(e);
  }
};

export default crawling;
