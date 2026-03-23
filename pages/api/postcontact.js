import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let data = await fs.promises.readdir("contactdata");
    console.log(data);
    fs.promises.writeFile(
      `contactdata/${data.length + 1}.json`,
      JSON.stringify(req.body),
    );
    res.status(200).json({ name: "Yes Post Request" });
  } else {
    res.status(200).json({ name: "John Doe" });
  }
}
