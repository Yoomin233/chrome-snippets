const fs = require("fs");
fs.readFile("./raw.txt", "utf8", (err, content) => {
  const parsed = JSON.parse(content);
  // JSON.parse(content);
  parsed.forEach(snippet => {
    fs.writeFileSync(`./snippets/${snippet.name}.js`, snippet.content, 'utf8')
  })
});
