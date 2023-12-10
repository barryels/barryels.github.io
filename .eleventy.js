const { rimraf } = require("rimraf");

const config = {
  dir: {
    input: "src",
    includes: "_includes",
    output: "build",
  },
};

const dirToClean = config.dir.output;
console.warn(`🚫 Deleting files in "${dirToClean}"`);
rimraf.sync(dirToClean);

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "html",
    "njk",
    "md",
    "css",
    "jpeg",
    "jpg",
    "png",
    "svg",
    "woff",
    "woff2",
  ]);
  eleventyConfig.addPassthroughCopy({ public: "/" });

  return config;
};
