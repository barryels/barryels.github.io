import fs from "fs";

const DIR_OUTPUT = "build/augmented-coding-patterns";

const dirToClean = DIR_OUTPUT;
console.warn(`🚫 Deleting files in "${dirToClean}"`);
fs.rmSync(dirToClean, { recursive: true, force: true });

export default async function (eleventyConfig) {
  const { HtmlBasePlugin } = await import("@11ty/eleventy");

  const config = {
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      output: DIR_OUTPUT,
    },
  };

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

  eleventyConfig.addPassthroughCopy("src/*.jsonld");
  eleventyConfig.addPassthroughCopy("src/**/*.jsonld");

  eleventyConfig.addPassthroughCopy({ public: "/" });

  eleventyConfig.addPlugin(HtmlBasePlugin, {
    baseHref: "/projects/augmented-coding-patterns/",
  });

  eleventyConfig.addPassthroughCopy({
    "src/_includes/components/": "components/",
  });

  eleventyConfig.addFilter(
    "allPostsExceptCurrent",
    function allPostsExceptCurrent(posts = []) {
      return posts.filter((post) => {
        return post.url !== this.page.url;
      });
    },
  );

  eleventyConfig.addShortcode("currentYear", () => new Date().getFullYear());

  return config;
}
