const { rimraf } = require("rimraf");

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

  eleventyConfig.addFilter(
    "allPostsExceptCurrent",
    function allPostsExceptCurrent(posts = []) {
      return posts.filter((post) => {
        return post.url !== this.page.url;
      });
    }
  );

  return config;
};
