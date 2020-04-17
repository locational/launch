module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  // For old index.html
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("js");
};