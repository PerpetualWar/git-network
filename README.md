# git-network

> Git Network Project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


# Heroku Deployment

``` bash
# install dependencies
npm install

# create Heroku app
heroku create <APP_NAME>

# initialize git 
git init

# connect local git with heroku
heroku git:remote --app <APP_NAME>

# build the project
npm run build

# add and commit project
git add . && git commit -m "Adding files"

# deploy dist folder on heroku
npm run deploy
```

