![MWALogo](https://raw.githubusercontent.com/wacko1805/MonetWebAdapter/refs/heads/main/assets/images/MWA%20logo.png)
### MWA allows the Dynamic Wallpaper Colours from android 12 and up on the web!

## How does it work?
- If the host app is installed on a device, the site will load the devices colours. The app starts a minimal http server that broadcasts the dynamic colours to ``` http://localhost:8192 ```
- If the app is not installed, or on a device that doesnt support dynamic colours, computers, apple devices, etc, the web adapter will load the pre-defined colours set by the developer.
- The first screenshot shows the colours loaded from the ```colours.json``` shown below. The second screenshot shows dynamic colours loaded from the Host app. 
![local](https://github.com/wacko1805/MonetWebAdapter/blob/main/assets/images/local.png?raw=true)
![connected](https://github.com/wacko1805/MonetWebAdapter/blob/main/assets/images/connected.png?raw=true)

  
## How it works for you:
- You simply install the MonetWebApapter app, and all supported websites will instantly match your phones dynamic colours.
- [Download here](https://github.com/wacko1805/MonetWebHost/releases)

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
- 
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
- Here, you must define all your colours. Either by your exsisting colour ways, or you can build a new theme from the [Material Theme Buildier](https://material-foundation.github.io/material-theme-builder/)
- ### Using colours in your css:
- Each property is the name of the CSS variable!
  - for example, if you want to use the  ```primary``` colour in your css, you use ```var(--primary)```.
  - Small example:
    ```
    .card {
          background-color: var(--primaryContainer);
          color: var(--onPrimaryContainer);
    }
    ```
    Please note: you should follow the [Material 3 colour guidlines](https://m3.material.io/styles/color/system/overview) when desinging or migraiting your site.
  
## How does it work?
The app broadcasts all the avalible material 3 dynamic colours from localhost on the device, in a JSON format. If the script is implemented on a site, the site will be searching for the localhost:8192 service, and if it is not avelible, will default to the pre defined colours of the site. 

## Implemention.
- All you need is two files, the script file, and a colours.json file that contains the default colours for your website.
- Refer to the material 3 design guidlines for accesability, as the colours are dynamic!

