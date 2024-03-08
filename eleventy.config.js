/**
 * This is the 11ty config! If you ever need to get underneath the hood of 11ty
 * to add functionality or to sort your collections, this would be the place to
 * do it! In this example however, we just copy over the `img` and `css`
 * folders over to the output.
 * (https://www.11ty.dev/docs/config/)
 */

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function(eleventyConfig) {
		// Copy `img` and `css` folders and robots.txt file to output
		eleventyConfig.addPassthroughCopy("img");
		eleventyConfig.addPassthroughCopy("css");
		eleventyConfig.addPassthroughCopy("robots.txt");
}