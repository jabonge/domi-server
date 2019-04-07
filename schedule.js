import schedule from "node-schedule";
import crawling from "./down";

const scheduler = () => {
  console.log("schedule exec");
  schedule.scheduleJob({ hour: 19, minute: 40, dayOfWeek: 0 }, function() {
    crawling();
  });
};

export default scheduler;
