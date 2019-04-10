import fs from "fs";
import path from "path";
import { call, process_RS } from "./test";
import Sikdan from "./model/sikdan";

export const savedb = async () => {
  try {
    const stream = fs.createReadStream(
      path.join(__dirname, "/public/sikdan.xlsx")
    );
    await process_RS(stream, call);
    await Sikdan.create({
      Monday: monday,
      Tuesday,
      Wensday,
      Thursday,
      Friday,
      Saturday,
      Sunday: sunday
    });
    await fs.unlinkSync(path.join(__dirname, "/public/sikdan.xlsx"));
  } catch (err) {
    console.error(err);
  }
};
