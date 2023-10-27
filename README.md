# NodeJS + Typescript + SASS setup project

This is a initial setup project that combining with NodeJS + Typescript + SASS.

- Backend-side uses NodeJS + Typescript with Express to serve HTTP Requests
- Client-side uses HTML & script (Typescript) & SCSS files


It also has :fire:**hot-reload**:fire: on both client-side & backend-side

## Directory layout

    ./
    ├── dist                           // Output files
    |   ├── client
    |   |   ├── app.js
    |   |   └── app.js.map
    |   └── styles
    |       ├── index.css
    |       └── index.css.map
    ├── ...
    ├── src                            // Compiled files (alternatively `dist`)
    │   ├── client                     // Client-side scripts source (typescript)
    |   |   └── script.ts
    │   ├── server                     // Backend-side source (will be excluded for compiling into `dist` directory)
    |   |   └── main.ts
    │   └── styles                     // Client-side styles source (scss)
    |       └── index.scss
    |
    ├── .env
    ├── ...
    ├── index.html
    ├── nodemon.json
    ├── package.json
    ├── README.md
    ├── tsconfig.client.json
    ├── tsconfig.server.json
    ├── webpack.config.client.js
    └── yarn.lock

## How to run

### Run install packages `yarn install`

### Run app `yarn serve`

If it meets your demands. Please leave a :star:GitHub Star:star: on this repo. Thank you :pray:

## Demo

### Debugger on Dev-Tool browser with Typescript code
![image](https://github.com/nguyenhmtriet/nodejs-typescript-sass/assets/24971905/82a4cf44-a587-4c25-b713-c2fc5394dbe6)

### :fire:Hot Reload:fire: on every change in nested `./src`
![image](https://github.com/nguyenhmtriet/nodejs-typescript-sass/assets/24971905/301482d1-0511-4cfc-b0df-007bd5261d98)

![image](https://github.com/nguyenhmtriet/nodejs-typescript-sass/assets/24971905/018794e0-6493-4fda-9eab-d6599d0ec195)


### Debugger on Server-side as well with launch.json in Visual Studio Code
![image](https://github.com/nguyenhmtriet/nodejs-typescript-sass/assets/24971905/a06a2459-47b5-4aaf-a99f-e90508d97e80)


