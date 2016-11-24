# React SPA Example

## Description
[React](https://facebook.github.io/react/) has become more and more popular among front end engineers. Although we have [create-react-app](https://github.com/facebookincubator/create-react-app) to help building frameworks easily, I prefer doing this all by myself, because DIY brings me better understanding about those tools & modules.

If efficiency comes first, just use [create-react-app](https://github.com/facebookincubator/create-react-app). If study comes first, do it yourself!

After refering to some awesome React projects, I created this repository from zero. If you are a newcomer, this repository can be a good starter kit for you.

## Modules & Tools Used in This Project
[webpack](https://webpack.github.io) is the bundler for modules.
[react-router](https://github.com/ReactTraining/react-router) is for URL router.
[react-css-module](https://github.com/gajus/react-css-modules) is for CSS modularization. Making CSS local-scoped is strongly recommended.

## Usage
- Download this project and run `npm install` to install all the dependencies.
- Make sure you have installed webpack and webpack-dev-server globally. If not, please run the following command to install them:
```
npm install -g webpack webpack-dev-server
```
- Start your development:
```
npm run dev
```
- Open your browser with URL `http://localhost:8080`

#### To build the app in production mode, just run `npm run build` and you will see `index.html` and `static` files in the `dist` folder.