![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Stencil Markdown Starter

A documentation and blog template for [StencilJS](https://stenciljs.com/). Based on [the Stencil website](https://github.com/ionic-team/stencil-site/).

## Getting Started

1. Clone the repo: `git clone [https://github.com/whoisryosuke/stencil-markdown-starter.git](https://github.com/whoisryosuke/stencil-markdown-starter.git)`
2. Install dependencies: `npm i` or `yarn`
3. Parse the Markdown and start the dev server: `npm run dev` or `yarn dev`

## Adding Markdown content

Markdown content can be created inside the `src/blog` and `src/docs` folders. Make sure to include the following frontmatter, depending on post type:

### Blog

```markdown
---
title: How Lazy-Loading Web Components Work with Stencil
date: August 15, 2019
url: /blog/how-lazy-loading-web-components-work
author: Adam Bradley
twitter: adamdbradley
description: When you’re building an app that requires a large library of components in a single file download, you’re often forced to sacrifice performance - and specifically startup time - for the sake of accessing all those components. The two are often mutually exclusive. Choose to easily have all the components available, or choose blazing fast startup, but it’s difficult to get both. At least that’s the experience for many.
img: /assets/img/blog/posts/stencil-lazy-loading.png
---
```

### Docs

```markdown
---
title: Stencil Web Component Browser Support
description: Out-of-the-box browser support provided by Stencil web components.
url: /docs/browser-support
contributors:
  - adamdbradley
  - kevinports
  - jthoms1
  - arjunyel
---
```

## "Hot reloading" Markdown Content

Run `npm run markdown.sync` in a separate Terminal next to your `npm run start` script.

Since the Markdown parsing occurs using a Node script (`npm run docs`) outside of the Stencil build process, we have to re-run the script each time we make a change to Markdown files. Thanks to nodemon, it checks for any changes that occur in Markdown files in your docs and blog folders, and restarts the Markdown parsing.

It's not exactly hot reloading, since Stencil's build process will run - but won't refresh the page with changes, but it's better than manually running the script.

The URL of the page is determined by the URL property in the Markdown frontmatter. You can organize or name the Markdown files however you'd like, since nesting them inside folders won't effect the URL.

To add links to documentation, see the section "Adding pages to docs sidebar".

## Adding static pages

Instead of creating pages with Markdown, you could also create pages using web components.

Add your route inside `src/components/app-root/app-root.tsx` inside the `<stencil-route-switch>` component. The component prop should be the same as your component name (e.g. `<resources-page>` inside `src/components/resources-page/resources-page.tsx`).

```js
<stencil-route url="/resources" component="resources-page" />
```

Make sure to add a link to the page in the main navigation or sidebar.

a. For the main navigation, you add it to `src/components/site-header/site-header.tsx`:

```js
<stencil-route-link
  url="/resources"
  exact={true}
  onClick={() => {
    this.hideNav();
  }}
>
  Resources
</stencil-route-link>
```

b. See the section "Adding pages to docs sidebar"

## Adding pages to docs sidebar

The sidebar is the navigational menu that's displayed on the left of documentation. You add your link to `src/docs/README.md` as an Markdown list item with an external link or relative markdown file (for docs):

```markdown
- [My First Component](introduction/my-first-component.md)
- [Resources](/resources)
- [Stencil on Twitter](https://twitter.com/stenciljs)
```

## How does it work?

- When you run `npm run site.structure`, a JS script crawls your `src/docs/README.md` and creates `src/assets/docs-structure.json` which is used to generate the documentation sidebar.
- When you run `npm run docs`, two scripts are run to generate JSON files from Markdown files in the docs and blog folders. The JSON files are placed in the `./src/assets/` folder, nested in a docs or blogs folder. The JSON files contain parsed Markdown and frontmatter, and are used by the `<doc-component>` and `<blog-component>` to import and display the content.
- When you run `npm run start`, the StencilJS build process is run in development mode. This boots a local server with hot reloading of the application. Note, this does not hot reload the Markdown content, because it's parsed by another script (`npm run docs`) before this.

## Related

- [Stencil Documentation](https://stenciljs.com/)
- [Stencil Worldwide Slack](https://stencil-worldwide.herokuapp.com)
- [Ionic](https://ionicframework.com/)
- [Ionic Worldwide Slack](http://ionicworldwide.herokuapp.com/)
- [Ionicons](http://ionicons.com/)
- [Capacitor](https://capacitor.ionicframework.com/)

## License

- [MIT](https://raw.githubusercontent.com/ionic-team/stencil-site/master/LICENSE)
