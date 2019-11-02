# ussr

Fork from [electron-ssr](https://github.com/erguotou520/electron-ssr)

The original electron-ssr use ssr implemented by python, I don't like it.

This project's SSR implement uses cpp version [ssr-n](https://github.com/ShadowsocksR-Live/shadowsocksr-native), you must clone and build it manually.

Select folder has file `ssr-local`, the release file `ssr-local` was built on Ubuntu 18.04.

If you use other ssr implementation, put `ssr-local` in env PATH, or select the directory which has the `ssr-local` file.

Just for study!

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
