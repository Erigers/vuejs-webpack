# vuejs-webpack

> A Vue.js project, inspired from Layer7be repo:
[layer7be](https://github.com/layer7be/vue-starter)

Creating a more comfortable environment for developers to work on their .Vue files (intellisense still not perfect) and keeping a cleaner environment.

Develop templates and (reusable) components separately in './src/dev' , work with configurations elsewhere. Do not forget to start every template with parent div id.

## Build Setup

``` bash
# install dependencies
npm install

# Run during development
gulp watch

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test


```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


#Intentions:

- [X] Routes improved
- [X] Separate Vue file javascript from html and concatenate in build
- [X] ReActivate HotReload
- [] Services
- [] Interceptor middleware
- [] Axios
