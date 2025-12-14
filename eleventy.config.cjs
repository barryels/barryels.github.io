const fs = require("fs");

const config = {
  dataTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  markdownTemplateEngine: "njk",
  dir: {
    input: "src",
    includes: "_includes",
    output: "build",
  },
};

const dirToClean = config.dir.output;
console.warn(`🚫 Deleting files in "${dirToClean}"`);
fs.rmSync(dirToClean, { recursive: true, force: true });

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

  eleventyConfig.addPassthroughCopy({
    "src/_includes/components/": "components/",
  });

  eleventyConfig.addFilter(
    "allPostsExceptCurrent",
    function allPostsExceptCurrent(posts = []) {
      return posts.filter((post) => {
        return post.url !== this.page.url;
      });
    }
  );

  eleventyConfig.addShortcode("currentYear", () => new Date().getFullYear());

  return config;
};
