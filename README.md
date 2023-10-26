# NodeJS + Typescript + SASS setup project

This is a initial setup project that combining with NodeJS + Typescript + SASS.

- Backend-side uses NodeJS + Typescript with Express to serve HTTP Requests
- Client-side uses HTML & script (Typescript) & SCSS files


It also has :fire:**hot-reload**:fire: on both client-side & backend-side

## Directory layout

    ./
    ├── dist                           // Output files
    │   ├── src
    |   |   └── client
    |   |       ├── script.js
    |   |       └── script.js.map
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
    ├── tsconfig.json
    └── yarn.lock

## How to run

### Run install packages `yarn install`

### Run app `yarn serve`

If it meets your demands. Please leave a :star:GitHub Star:star: on this repo. Thank you :pray:

## Demo

![image](https://github.com/nguyenhmtriet/nodejs-typescript-sass/assets/24971905/018794e0-6493-4fda-9eab-d6599d0ec195)

![image](https://github.com/nguyenhmtriet/nodejs-typescript-sass/assets/24971905/5969283f-1709-4375-8f66-c2fdd3167bd2)
