import fs from "node:fs";

const file = "index.html";
const marker = '<link rel="stylesheet" href="responsive.css?v=6">';
const scriptMarker = '<script src="stabilize_scroll.js?v=1"></script>';
let html = fs.readFileSync(file, "utf8");
if (!html.includes(marker)) {
  html = html.replace(/<link rel="stylesheet" href="responsive\.css(?:\?v=\d+)?">/g, "");
  html = html.replace("</head>", `${marker}</head>`);
}
if (!html.includes(scriptMarker)) html = html.replace("</body>", `${scriptMarker}</body>`);
fs.writeFileSync(file, html);
