# Music Player UI

![image](https://raw.githubusercontent.com/NativeScript/code-samples/master/screens/music-player-ui.gif)

An app design for an engaging music player app.

[<img src="https://github.com/angular/angular/blob/master/aio/src/assets/images/logos/angular/angular.png" width="31" height="31"></img>](https://play.nativescript.org/?template=play-ng&id=EaETCw&v=54) 

## :o: Create a project by using a template


Example taken from [:bookmark:`nativescript.rocks`](https://plugins.nativescript.rocks/samples) and can be used as a template since it has already been converted to [NativeScript 7](https://nativescript.org/blog/nativescript-7-announcement)

```
$ ns create nsMusicPlayerUI --template https://github.com/CraveFM/nsMusicPlayerUI
```


## :a: From Scratch

* Create a blank NativeScript/Angular/sass project

```
% ns create nsMusicPlayerUI --template @nativescript/template-blank-ng
```

## Configure

- [ ] Edit the file `webpack.config.js`, add the `images` section to the `copyTargets` variable

The `images` folder will be copied to the final tarballs

```
    { from: 'images/**', noErrorOnMissing: true, globOptions: { dot: false, ...copyIgnore } },
```

:bulb: Final Result of `copyTargets` variable

```
  const copyTargets = [
    { from: 'assets/**', noErrorOnMissing: true, globOptions: { dot: false, ...copyIgnore } },
    { from: 'fonts/**', noErrorOnMissing: true, globOptions: { dot: false, ...copyIgnore } },
    { from: 'images/**', noErrorOnMissing: true, globOptions: { dot: false, ...copyIgnore } },
    ...copyReplacements
  ];
```

# Libraries

## :one: Free ** [Progress NativeScript UI](https://github.com/ProgressNS/nativescript-ui-samples)

** Although the components are free, they are not open-source and their code is proprietary

```
$ npm install --save \
      nativescript-ui-chart \
      nativescript-ui-listview \
      nativescript-ui-sidedrawer \
      nativescript-ui-calendar \
      nativescript-ui-autocomplete \
      nativescript-ui-dataform \
      nativescript-ui-gauge
```

# Plugins

:pushpin: [@nativescript/plugins](https://github.com/NativeScript/plugins) used

```
$ ns plugin add @nativescript/background-http; \
  ns plugin add @nativescript/camera; \
  ns plugin add @nativescript/geolocation; \
  ns plugin add @nativescript/imagepicker; \
  ns plugin add @nativescript/intl; \
  ns plugin add @nativescript/iqkeyboardmanager; \
  ns plugin add @nativescript/social-share
```

:pushpin: Others not really used

```
$ ns plugin add nativescript-accelerometer; \
  ns plugin add @progress-nativechat/nativescript-nativechat; \
  ns plugin add nativescript-image;
```

