const puppeteer = require("puppeteer");

const crawling = async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36"
    );
    await page.goto("http://dorm.inha.ac.kr/activity/acti_030401.aspx");
    await page.evaluate(() => {
      document.querySelector("p>a").click();
    });
    await page.waitForSelector("#ctl00_ContentPlaceHolder1_TextBoxUserID");
    await page.type("#ctl00_ContentPlaceHolder1_TextBoxUserID", "12140524");
    await page.type("#ctl00_ContentPlaceHolder1_TextBoxPassword", "woqhd2516!");
    await page.click("#ctl00_ContentPlaceHolder1_ImageButtonLogin");
    await page.waitForSelector("#btn");
    await page.evaluate(() => {
      document.querySelector("#btn>a>img").click();
    });

    await page.waitForSelector("#ctl00_ContentPlaceHolder1_ImageButton1");
    const newPagePromise = new Promise(x =>
      browser.once("targetcreated", target => x(target.page()))
    );
    await page.click("#ctl00_ContentPlaceHolder1_ImageButton1");
    const newPage = await newPagePromise;
    await newPage.waitForSelector("input[type=text]");
    await newPage.type("input.ng-pristine", "asdf");
    await newPage.waitFor(200);
    await newPage.type("input.ng-pristine", "asdf");
    await newPage.waitFor(200);
    await newPage.type("input.ng-pristine", "asdf");

    await newPage.evaluate(() => {
      document.querySelector("div>a>img").click();
    });
    console.log("sucess");
    await page.close();
    await browser.close();
  } catch (e) {
    console.error(e);
  }
};

crawling();
