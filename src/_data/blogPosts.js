const fetch = (url, init) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url, init));
const { XMLParser } = require("fast-xml-parser");

async function getSubstackPosts(url) {
  const response = await fetch(`${url}/feed`);

  return response.text().then((data) => {
    const parser = new XMLParser({
      ignoreAttributes: false,
    });
    const parsedData = parser.parse(data);

    return parsedData.rss.channel.item.filter((blogPost) => {
      return blogPost.title !== "Coming soon";
    });
  });
}

async function transformSubstackPostsToViewPosts(substackPosts) {
  return substackPosts.map((substackPost) => {
    console.log(substackPost);
    return {
      title: substackPost.title,
      description: substackPost.description,
      url: substackPost.link,
    };
  });
}

module.exports = async function () {
  const substackPosts = await getSubstackPosts("https://barryels.substack.com");
  return await transformSubstackPostsToViewPosts(substackPosts);
};
