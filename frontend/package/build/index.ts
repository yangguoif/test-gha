import moment from "moment";
import * as fs from "fs";
import * as path from "path";

function test() {
  const date = moment().format('MMMM Do YYYY, h:mm:ss a');

  console.log(date);
  const filePath = path.join(__dirname, "test.json");
  const content = {
      date: date,
  };
  const json = JSON.stringify(content, null, 4);

  fs.writeFile(filePath, json, "utf8", (error) => {
      if (error) throw error;
      console.log(`updated system icons`);
  });

}

test();

