## Created with Capacitor Create App

This app was created using [`@capacitor/create-app`](https://github.com/ionic-team/create-capacitor-app),
and comes with a very minimal shell for building an app.

This app can be used with Hotwire Turbo and includes two patches for @capacitor/android to ensure proper functionality.

### Running this example

Set your domain in `.env`. Then run

```bash
make setup
make sync
make open_android
# or make open_ios
```

## Using Capacitor

You can use Capacitor plugins with `window.Capacitor.Plugins`. Try running this in the JavaScript browser console of your application or directly in your JavaScript:
```js
window.Capacitor.Plugins.Toast.show({ text: "Hello" })
```
To open developer tools with console use `make debug_android` for Android or `Develop` menu in Safari for iOS.

## Workarounds

### [Android] patches
1. Edit source files and create patch with `yarn patch-package @capacitor/android`
2. Add `"scripts": { "postinstall": "patch-package" }` to `package.json`

### [iOS] Black splash screen on

https://github.com/ionic-team/capacitor/issues/3589#issuecomment-794508632

### [iOS] Push-notifications with images

https://rnfirebase.io/messaging/ios-notification-images

### [iOS] Back-forward navigation with swipe

https://github.com/ionic-team/capacitor/issues/1097#issuecomment-1077649377

### [iOS] Allow http for development

https://stackoverflow.com/a/32704702/3002534

## Changing icons

### iOS

Use single icon `png 1024x1024` without transparence and alpha-channel.

Change `AppIcon.png` and `Content.json` in `ios/App/App/Assets.xcassets/AppIcon.appiconset`.

### Android

I need the icon separately without a background, and the background (if it's complex, like a gradient), all in `svg 1024x1024`. The icon should take into account that it can be either circular or square.

Open `Android Studio` -> `file` -> `new` -> `Image Asset`.
* In `Foreground Layer`: choose the icon and adjust it to the proper size, name - `ic_launcher_foreground`.
* In `Background layer`: choose a background or set a color, name - `ic_launcher_background`.
