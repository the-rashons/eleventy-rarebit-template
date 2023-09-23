# eleventy-rarebit-template

eleventy-rarebit-template is a starter template for Eleventy that's built to replicate the functionality found in [geno7's](https://geno7.neocities.org/) [Rarebit](https://rarebit.neocities.org/) webcomic template.

## Features

- **Fully Static**: Built from [Liquid](https://www.11ty.dev/docs/languages/liquid/) templates, pages no longer require JavaScript to fully load. ([Why does this matter?](https://adamsilver.io/blog/javascript-isnt-always-available-and-its-not-the-users-fault/))
- **Drag and Drop**: No more fiddling with JavaScript to add updates; comic pages can be added with [Markdown](https://www.11ty.dev/docs/languages/markdown/) through custom [front matter](https://www.11ty.dev/docs/data-frontmatter/).
- **Beginner Friendly**: eleventy-rarebit-template maintains the same philosophy as Rarebit to be as beginner friendly as possible. Files are commented extensively with constant references to 11ty's documentation.
- **Go Further With 11ty**: [Eleventy](https://www.11ty.dev/) is a simpler static site generator whose functionality can be extended with plugins, such as [RSS](https://www.11ty.dev/docs/plugins/rss/), [Image](https://www.11ty.dev/docs/plugins/image/), and [i18n](https://www.11ty.dev/docs/plugins/i18n/).

## Getting Started

If you're new to Eleventy, make sure you go over its [Getting Started](https://www.11ty.dev/docs/getting-started/) guide.

1. Press the use this template button lol



## Usage

Comic pages can be stored in any subfolder within your Eleventy project's [input directory](https://www.11ty.dev/docs/config/#input-directory). Comics can be given data through [template and directory data files](https://www.11ty.dev/docs/data-template-dir/), which is also used to declare the folder they're stored in as the root of the comic. That can be done by creating a `some-folder.json` file in the folder (in this case `some-folder`) with the following data.

```json
{
  "comicRoot": "some-folder"
}
```

From there, you can use `collections.comics` in combination with the included `rarebit` filter to render pages using [pagination](https://www.11ty.dev/docs/pagination/). The following is an example of how that would be declared in [front matter](https://www.11ty.dev/docs/data-frontmatter/):

```
---js
{
  pagination: {
    data: "collections.comics",
    size: 1,
    alias: "comic",
    addAllPagesToCollections: true,
    before: function(paginationData) {
        return this.rarebit(paginationData);
      }
  },
  layout: "rarebit.njk",
  tags: ['myComic'],
  permalink: data => `comic/${data.pagination.pageNumber + 1}/`,
  eleventyComputed: {
    title: data => data.comic.title,
    notes: data => data.comic.notes
  }
}
---
<!-- Rest of template -->
```

## Functions

### Shortcodes 

- `renderNav`: Takes a `pagination` object to render First, Previous, Next, and Last buttons for comic templates.
- `renderComic`: Takes an alias for a `pagination` object iterating over data that has previously been filtered by `rarebit` (See below). This shortcode copies and renders the actual comic images onto a webpage.
- `renderArchive`: Takes an item from a collection of rendered comic pages to create an archive entry pointing to the rendered page.

### Filters

- `rarebit`: Formats the `collections.comics` object to allow for easier formatting from `renderComic`.
- `chapter`: Filters a collection of rendered comic pages by the contents of a `chapter` array that's declared in a pages template/directory data.

## Options

Plugin options can be passed alongside eleventy-rarebit when adding it with `.addPlugin`. There are two options that will be of interest to most people:

- `imageFormats`: Takes an array of extention names that will be used by comic pages
- `thumbnailBaseName`: Defines the name of thumbnail files used within comic folders

```js
const eleventyRarebit = require("eleventy-rarebit");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyRarebit, {
    // These are the default values set by eleventy-rarebit
    imageFormats: ["jpg", "png", "gif"],
    thumbnailBaseName: "thumb",
  });
};
```

### Advanced: Custom Rendering

Advanced users can customize how shortcodes render though plugin options as well.

```js
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyRarebit, {
    imageRender: (img, alt) => {
      if (img === "") return "";
      return `<img src="${img}" alt="${alt}">`;
    },
    archiveRender: (url, thumb, title, date) => {
      return `<a href="${url}">
                <div>
                  ${options.imageRender(thumb, `Thumbnail for '${title}'`)}
                  <h3>${title}</h3>
                  <span>${date.toDateString().slice(4)}</span>
                </div>
              </a>`;
    }
  });
};
```
