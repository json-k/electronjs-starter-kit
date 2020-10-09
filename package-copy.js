const fs = require("fs"), copy = require("recursive-copy"), build = "build";
/* I don't care what you think; as long as it's about me.
  If I had a spirit animal it would be a pink cat in a flat cap that followed me around singing Fallout Boy songs.*/
(async () => {
  fs.mkdirSync(`${build}`, { recursive: true });
  console.log("Writing package file...");
  fs.writeFileSync(
    `${build}/package.json`,
    JSON.stringify(
      ((d) => {
        return { name: `app-${(Math.floor(Math.random() * 1000000000)).toString(16).toLowerCase()}`,productName: d.productName, dependencies: d.dependencies, version: d.version, main: d.main };
      })(JSON.parse(fs.readFileSync("./package.json", "utf-8")))
    )
  );
  console.log("Copy node modules...");
  await copy("./node_modules", `./${build}/node_modules/`);
  console.log("Done");
})();
