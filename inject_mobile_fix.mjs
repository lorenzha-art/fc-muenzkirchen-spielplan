import fs from "node:fs";

const file = "index.html";
const marker = '<link rel="stylesheet" href="responsive.css">';
let html = fs.readFileSync(file, "utf8");
if (!html.includes(marker)) {
  html = html.replace("</head>", `${marker}</head>`);
  fs.writeFileSync(file, html);
}
