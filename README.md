# product-app
An application which returns products from an API.

# Prerequisites
- node
- npm
- sass
- vue
- vue-cli

You will need a global installion of vue-cli to run the project.
See [Vue installation](https://cli.vuejs.org/guide/installation.html).

```
npm install -g @vue/cli
```
or
```
yarn global add @vue/cli
```

Vue requires node >= 8.9, we recommend using [nvm (node version manager)](https://github.com/nvm-sh/nvm) in order to switch between instances of node.

## To install the project from the root folder run
```
npm install
```

## Once all dependencies are installed the project can be initialised executing:
```
npm run serve
```

The application should run at `http://localhost:8080/`, if the port is not available vue will look for the next available port

### To run a minified production build execute:
```
npm run build
```

### To run all tests execute:
```
npm run test
```

### To run end-to-end tests
TODO this requires platform agnostic implementation of selenium
```
npm run test:e2e
```

### To run unit tests
the package.json contains a watch parameter to check when test files are changed.
```
npm run test:unit
```

### Customize configuration
See [Configuration reference](https://cli.vuejs.org/config/).
