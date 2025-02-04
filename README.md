![MWALogo](https://raw.githubusercontent.com/wacko1805/MonetWebAdapter/refs/heads/main/HomePage/assets/images/MWA%20logo.png)
### MWA allows the Dynamic Wallpaper Colours from android 12 and up on the web! [View Example Site](https://wacko1805.github.io/MonetWebAdapter/)

## How does it work?
- If the host app is installed on a device, the site will load the dynamic colours from your wallpaper. The app starts a minimal http server that broadcasts the dynamic colours to ``` http://localhost:8192 ```
- If the app is not installed, or on a device that doesnt support dynamic colours, computers, apple devices, etc, the web adapter will load the pre-defined colours set by the developer.
- The first screenshot shows the colours loaded from the ```colours.json``` shown below. The second screenshot shows dynamic colours loaded from the Host app.
  
<img src="https://github.com/wacko1805/MonetWebAdapter/blob/main/HomePage/assets/images/local.png?raw=true" width="30%" alt="local"><img src="https://github.com/wacko1805/MonetWebAdapter/blob/main/HomePage/assets/images/connected.png?raw=true" width="30%" alt="connected">

  
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
  <script src="/DynamicWebAdapter.js"></script>
  </head>
  ```
  Alternatively, 
  ```
  <script src="https://jacks.am/MonetWebAdapter/DynamicWebAdapter.js"></script>
  ```
  * Please note, doing it this way means your config file MUST be in the root directory. 
- Next, create a JSON config file called ``` DWAconfig.json ``` . This file can be used to change some configs. Right now, its only set up to change the location of the ``` colours.json ``` file.
Layout of config file: 
  ``` 
  {
      "colours_path": "colours.json"
  } 
  ```
  Here, you can link your colours json file. 
  
  In the script file, if you need, you can change the directory of the config file. By default, it will search for the config file in root. You can change this location from in the script file as below: 

  ```
  const configFile = 'DWAconfig.json';  
  ```


- If you use CSS variables on your site, than it should be easy to migrate all your exsisting colours to the ``` colours.json ``` file. If not, you may have to modify your site to use the material 3 colour way and naming.


- ### How to Make a new theme using the generator:
  - Generate a new theme on the [Material Theme Buildier](https://material-foundation.github.io/material-theme-builder/).
  - Export your theme in a JSON format
  - Place the JSON file in your sites root directory, and rename it to ``` colours.json ```.
- Layout of ``` colours.json ```:

  ```
    {
    "schemes": {
        "light": {
            "primary": "#6D5E0F",
            "surfaceTint": "#6D5E0F",
            "onPrimary": "#FFFFFF",
            "primaryContainer": "#F8E287",
            "onPrimaryContainer": "#221B00",
            "secondary": "#665E40",
            "onSecondary": "#FFFFFF",
            "secondaryContainer": "#EEE2BC",
            "onSecondaryContainer": "#211B04",
            "tertiary": "#43664E",
            "onTertiary": "#FFFFFF",
            "tertiaryContainer": "#C5ECCE",
            "onTertiaryContainer": "#00210F",
            "error": "#BA1A1A",
            "onError": "#FFFFFF",
            "errorContainer": "#FFDAD6",
            "onErrorContainer": "#410002",
            "background": "#FFF9EE",
            "onBackground": "#1E1B13",
            "surface": "#FFF9EE",
            "onSurface": "#1E1B13",
            "surfaceVariant": "#EAE2D0",
            "onSurfaceVariant": "#4B4739",
            "outline": "#7C7767",
            "outlineVariant": "#CDC6B4",
            "shadow": "#000000",
            "scrim": "#000000",
            "inverseSurface": "#333027",
            "inverseOnSurface": "#F7F0E2",
            "inversePrimary": "#DBC66E",
            "primaryFixed": "#F8E287",
            "onPrimaryFixed": "#221B00",
            "primaryFixedDim": "#DBC66E",
            "onPrimaryFixedVariant": "#534600",
            "secondaryFixed": "#EEE2BC",
            "onSecondaryFixed": "#211B04",
            "secondaryFixedDim": "#D1C6A1",
            "onSecondaryFixedVariant": "#4E472A",
            "tertiaryFixed": "#C5ECCE",
            "onTertiaryFixed": "#00210F",
            "tertiaryFixedDim": "#A9D0B3",
            "onTertiaryFixedVariant": "#2C4E38",
            "surfaceDim": "#E0D9CC",
            "surfaceBright": "#FFF9EE",
            "surfaceContainerLowest": "#FFFFFF",
            "surfaceContainerLow": "#FAF3E5",
            "surfaceContainer": "#F4EDDF",
            "surfaceContainerHigh": "#EEE8DA",
            "surfaceContainerHighest": "#E8E2D4"
        },
        "dark": {
            "primary": "#DBC66E",
            "surfaceTint": "#DBC66E",
            "onPrimary": "#3A3000",
            "primaryContainer": "#534600",
            "onPrimaryContainer": "#F8E287",
            "secondary": "#D1C6A1",
            "onSecondary": "#363016",
            "secondaryContainer": "#4E472A",
            "onSecondaryContainer": "#EEE2BC",
            "tertiary": "#A9D0B3",
            "onTertiary": "#143723",
            "tertiaryContainer": "#2C4E38",
            "onTertiaryContainer": "#C5ECCE",
            "error": "#FFB4AB",
            "onError": "#690005",
            "errorContainer": "#93000A",
            "onErrorContainer": "#FFDAD6",
            "background": "#15130B",
            "onBackground": "#E8E2D4",
            "surface": "#15130B",
            "onSurface": "#E8E2D4",
            "surfaceVariant": "#4B4739",
            "onSurfaceVariant": "#CDC6B4",
            "outline": "#969080",
            "outlineVariant": "#4B4739",
            "shadow": "#000000",
            "scrim": "#000000",
            "inverseSurface": "#E8E2D4",
            "inverseOnSurface": "#333027",
            "inversePrimary": "#6D5E0F",
            "primaryFixed": "#F8E287",
            "onPrimaryFixed": "#221B00",
            "primaryFixedDim": "#DBC66E",
            "onPrimaryFixedVariant": "#534600",
            "secondaryFixed": "#EEE2BC",
            "onSecondaryFixed": "#211B04",
            "secondaryFixedDim": "#D1C6A1",
            "onSecondaryFixedVariant": "#4E472A",
            "tertiaryFixed": "#C5ECCE",
            "onTertiaryFixed": "#00210F",
            "tertiaryFixedDim": "#A9D0B3",
            "onTertiaryFixedVariant": "#2C4E38",
            "surfaceDim": "#15130B",
            "surfaceBright": "#3C3930",
            "surfaceContainerLowest": "#100E07",
            "surfaceContainerLow": "#1E1B13",
            "surfaceContainer": "#222017",
            "surfaceContainerHigh": "#2D2A21",
            "surfaceContainerHighest": "#38352B"
        }
      }
  }

  ```
- Here, you must define all your colours. Either by your exsisting colour ways, or you can build a new theme. The [Material Theme Buildier](https://material-foundation.github.io/material-theme-builder/) is a handy tool to create new themes. 

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

  ### Example of the popup can be found [here](https://wacko1805.github.io/MonetWebAdapter/popup-test.html).

  


