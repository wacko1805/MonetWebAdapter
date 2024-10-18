![MWALogo](https://raw.githubusercontent.com/wacko1805/MonetWebAdapter/refs/heads/main/assets/images/MWA%20logo.png)
### MWA allows the Dynamic Wallpaper Colours from android 12 and up on the web! [View Example Site](https://wacko1805.github.io/MonetWebAdapter/)

## How does it work?
- If the host app is installed on a device, the site will load the devices colours. The app starts a minimal http server that broadcasts the dynamic colours to ``` http://localhost:8192 ```
- If the app is not installed, or on a device that doesnt support dynamic colours, computers, apple devices, etc, the web adapter will load the pre-defined colours set by the developer.
- The first screenshot shows the colours loaded from the ```colours.json``` shown below. The second screenshot shows dynamic colours loaded from the Host app.
  
<img src="https://github.com/wacko1805/MonetWebAdapter/blob/main/assets/images/local.png?raw=true" width="49%" alt="local">
<img src="https://github.com/wacko1805/MonetWebAdapter/blob/main/assets/images/connected.png?raw=true" width="49%" alt="connected">

  
## How it works for you:
- You simply install the MonetWebApapter app, and all supported websites will instantly match your phones dynamic colours.
- [Download here](https://github.com/wacko1805/MonetWebHost/releases)

## Supported Sites:
- [Example Site](https://wacko1805.github.io/MonetWebAdapter/)
- [MagiskGApps.com](https://magiskgapps.com)

## How it works for web developers:
- Download the script file [here](https://github.com/wacko1805/MonetWebAdapter/DynamicWebAdapter.js) and implement it between the ``` <head> </head> ``` tags. For example,
  ```
  <head>
  <script src="assets/js/DynamicWebAdapter.js"></script>
  </head>
  ```
- If you use CSS variables on your site, than it should be easy to migrate all your exsisting colours to the ``` colours.json ``` file. If not, you may have to modify your site to use the material 3 colour way and naming.
- ### Important: The ``` colours.json ``` Must be placed in the root directory of the site!
- Layout of ``` colours.json ```:

  ```{
      "Comments": "Define your sites colours here:",
      "colors": {
        "primary": "#974811",
        "onPrimary": "#FFFFFF",
        "primaryContainer": "#FFDBCA",
        "onPrimaryContainer": "#773300",
        "secondary": "#8C4E29",
        "onSecondary": "#FFFFFF",
        "secondaryContainer": "#FFDBCA",
        "onSecondaryContainer": "#6F3714",
        "tertiary": "#6E5D0E",
        "onTertiary": "#FFFFFF",
        "error": "#B3261E",
        "onError": "#FFFFFF",
        "background": "#FFF9EE",
        "onBackground": "#1F1B0D",
        "surface": "#FFF9EE",
        "onSurface": "#1F1B0D",
        "surfaceVariant": "#EEE2BC",
        "onSurfaceVariant": "#4E472A",
        "outline": "#807757",
        "inverseOnSurface": "#EBE2CB",
        "inverseSurface": "#171306",
        "surfaceTint": "#974811"
      }
    }
  ```
- Here, you must define all your colours. Either by your exsisting colour ways, or you can build a new theme. The [Material Theme Buildier](https://material-foundation.github.io/material-theme-builder/) is a handy tool to create new themes. They allow you to download your theme in a JSON format with the correct names, but you have to choose only one varient, ie lightmode, darkmode, etc.

## Using colours in your css:
- Each JSON property is the name of the CSS variable!
  - for example, if you want to use the  ```primary``` colour in your   css, you use ```var(--primary)```.
  - example:
    ```
    div {
          background-color: var(--primaryContainer);
          color: var(--onPrimaryContainer);
    }
    ```
    Please note: you should follow the [Material 3 colour guidlines](https://m3.material.io/styles/color/system/overview) when desinging or migraiting your site.

## Implementing the popup
  If your website using the MonetWebAdapter, you can implement a popup that will prompt the user to install the MonetWebAdapter app. This popup will only show up on android devices that do not already have the app running. Once closed, a cookie will be stored to ensure the popup is never shown. You can view an example of the popup [here](https://wacko1805.github.io/MonetWebAdapter/popup-test.html). The popup uses the same CSS variable names, so your sites colours will override the default colours. 

  If you wish to implement the popup, add this inbetween your ```<head></head>``` tags:
  ```
  <script src="https://wacko1805.github.io/MonetWebAdapter/popup/popup.js" defer></script>
  ```

  


