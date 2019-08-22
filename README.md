



# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

## Project stucture
```
.
└── JobsVisualSvelt
    ├── active.js
    ├── npm-debug.log
    ├── package.json
    ├── package-lock.json
    ├── public
    │   ├── favicon.png
    │   ├── global.css
    │   └── index.html
    ├── README.md
    ├── rollup.config.js
    └── src
        ├── App.svelte
        ├── data.js
        ├── main.js
        ├── Navigation.svelte
        ├── routes
        │   ├── NotFound.svelte
        │   ├── SingleWorkerTasks.svelte
        │   ├── TasksRendering.svelte
        │   ├── Tasks.svelte
        │   └── Workers.svelte
        └── routes.js

4 directories, 19 files
```
## Creating components
Navigate to `src/routes`

Create a file with extenion .svelte **example**: `MyComponent.svelte`

Import the component into the other component **example** 	`import MyComponent from './MyComponent.svelte';`

Nest this component in any other component **example**: `<MyComponent/>`

## Routing between components
Install the dependencies for external router **svelte-spa-router**...

```bash
npm install svelte-spa-router
```

Register your routes to the component
```
let routes
routes = new Map()
routes.set('/', MyComponent)
routes.set('/MyComponent', MyComponent)
```

For more information about the router check <https://www.npmjs.com/package/svelte-spa-router>

## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
cd public
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

