# eleventy-rarebit-template

eleventy-rarebit-template is a starter template for Eleventy that's built to replicate the functionality found in [geno7's](https://geno7.neocities.org/) [Rarebit](https://rarebit.neocities.org/) webcomic template.

## Features

- **Fully Static**: Built from [Liquid](https://www.11ty.dev/docs/languages/liquid/) templates, pages no longer require JavaScript to fully load. ([Why does this matter?](https://adamsilver.io/blog/javascript-isnt-always-available-and-its-not-the-users-fault/))
- **Drag and Drop**: No more fiddling with JavaScript to add updates; comic pages can be added with [Markdown](https://www.11ty.dev/docs/languages/markdown/) through custom [front matter](https://www.11ty.dev/docs/data-frontmatter/).
- **Beginner Friendly**: eleventy-rarebit-template maintains the same philosophy as Rarebit to be as beginner friendly as possible. Files are commented extensively with constant references to the Eleventy Docs and other relevant documentation.
- **Go Further With 11ty**: [Eleventy](https://www.11ty.dev/) is a simpler static site generator whose functionality can be extended with plugins such as [RSS](https://www.11ty.dev/docs/plugins/rss/), [Image](https://www.11ty.dev/docs/plugins/image/), and [i18n](https://www.11ty.dev/docs/plugins/i18n/).

## Getting Started

> **If you're new to Eleventy, make sure you go over its [Getting Started](https://www.11ty.dev/docs/getting-started/) guide.**

This template is built assuming you'll be deploying your site to [Neocities](https://neocities.org/). If that isn't the case, feel free to delete the repository's `.github` folder and skip steps 2 & 3. Otherwise, setting up your site goes as follows...

1. [Create a new GitHub repository from this template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template)
2. From your [account settings](https://neocities.org/settings) in Neocities, generate an API key for your site by clicking **Manage Site Settings (of target site) > API > Generate API Key**
3. [Add the API key as an action secret to your repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template) with the name `NEOCITIES_API_TOKEN`
4. Download [GitHub Desktop](https://desktop.github.com/) and [clone the repository to your computer](https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop#cloning-a-repository)
5. Open the cloned repository in a [terminal window](https://www.11ty.dev/docs/terminal-window/) and, [assuming Node.JS is installed](https://nodejs.org/), type `npm install`
6. In the same terminal, start a local webserver by entering `npm start`

You now have a hot-reloading preview of your website! Go ahead and start tailoring the template for your comic. When you're ready to publish, just [commit](https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop) and [push]() your changes in GitHub Desktop; your site should update on Neocities shortly afterwards!

## Usage

Comic pages can be stored in any subfolder within your Eleventy project's [input directory](https://www.11ty.dev/docs/config/#input-directory). You can specify their custom data - whether that be titles, images, or thumbnails -  through [template and directory data files](https://www.11ty.dev/docs/data-template-dir/) or [front matter data](https://www.11ty.dev/docs/data-frontmatter/).

```json
// Directory Data
{
  "tags": ["comic"],
  "thumb": "/img/thumbs/default.png",
  "layout": "layouts/strip.liquid"
}
```

```yaml
---
# Front Matter Data
title: The First Page Title
images: ['/img/comics/pg1.jpg']
alt: Here's some alt text!
thumb: '/img/thumbs/pg1.png'
tags:
  - chapter1
---
```

[Layouts](https://www.11ty.dev/docs/layouts/) can then be applied to define how the page and its data are rendered. 

```liquid
<!-- `strip.liquid` (Snippet) -->
<div class="comic">
  <h1>{{ title }}</h1>
  {% render 'comic.liquid', collection: collections.comic, page: page, images: images, alt: alt %}
</div>
```

Still curious? [Start exploring the template](https://github.com/covalria-sow/eleventy-rarebit-template/blob/master/index.liquid) or [see it working for yourself](https://eleventy-rarebit.neocities.org/)!

