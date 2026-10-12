import fs from "node:fs";

const file = "index.html";
const marker = '<link rel="stylesheet" href="responsive.css?v=3">';
let html = fs.readFileSync(file, "utf8");
if (!html.includes(marker)) {
  html = html.replace(/<link rel="stylesheet" href="responsive\.css(?:\?v=\d+)?">/g, "");
  html = html.replace("</head>", `${marker}</head>`);
  fs.writeFileSync(file, html);
}
