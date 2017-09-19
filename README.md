# git-network

> Git Network Project

## Local Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```


## Heroku Deployment

``` bash
# install dependencies
npm install

# create Heroku app
heroku create <APP_NAME>

# connect local git with heroku
heroku git:remote --app <APP_NAME>

# build the project
npm run build

# add and commit project
git add . && git commit -m "Adding files"

# deploy dist folder on heroku
npm run deploy
```

