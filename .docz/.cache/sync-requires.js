

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": (preferDefault(require("/Users/shortcut/code/my-app/.docz/.cache/dev-404-page.js"))),
  "component---readme-md": (preferDefault(require("/Users/shortcut/code/my-app/README.md"))),
  "component---src-pages-404-js": (preferDefault(require("/Users/shortcut/code/my-app/.docz/src/pages/404.js")))
}

