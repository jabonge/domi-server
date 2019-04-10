import fs from "fs";
import path from "path";
import { call, process_RS } from "./test";

export const savedb = async () => {
  try {
    const stream = fs.createReadStream(
      path.join(__dirname, "/public/sikdan.xlsx")
    );
    await process_RS(stream, call);
  } catch (err) {
    console.error(err);
  }
};
