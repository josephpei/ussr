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

## Country Emoji

Ubuntu `sudo apt install fonts-noto-color-emoji`

Add file `$HOME/.config/fontconfig/conf.d/99-emoji.conf`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <match>
    <test name="family"><string>sans-serif</string></test>
    <edit name="family" mode="append" binding="strong">
      <string>Bitstream Vera Serif</string>
      <string>Noto Color Emoji</string>
    </edit>
  </match>

  <!-- Add emoji generic family -->
  <alias binding="strong">
    <family>emoji</family>
    <default><family>Noto Color Emoji</family></default>
  </alias>

  <!-- Aliases for the other emoji fonts -->
  <alias binding="strong">
    <family>Apple Color Emoji</family>
    <prefer><family>Noto Color Emoji</family></prefer>
  </alias>
  <alias binding="strong">
    <family>Segoe UI Emoji</family>
    <prefer><family>Noto Color Emoji</family></prefer>
  </alias>
  <alias binding="strong">
    <family>Emoji One</family>
    <prefer><family>Noto Color Emoji</family></prefer>
  </alias>
</fontconfig>

