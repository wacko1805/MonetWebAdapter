const configFile = 'DWAconfig.json'; // Define your config file here
const jsonUrl = 'http://localhost:8192/'; // DO NOT CHANGE THIS Defines URL from host app 

const basePath = window.location.origin;  

let themePref;  
let localFilePath;
let rootPath;

fetch(`${rootPath}/${basePath}/${configFile}`)   // gathers data from config file
  .then(response => {
    if (!response.ok) {
      throw new Error('Config file not found');
    }
    return response.json();
  })
  .then(data => {
    localFilePath = data.colours_path;
    themePref = data.theme_pref;
    rootPath = data.root;
    fetchColorsAndSetVariables(jsonUrl, localFilePath);
  })
  .catch(error => {
    console.error('Error fetching the JSON:', error);
    localFilePath = '/colours.json';  // default value 
    themePref = 'auto'; // default value
    rootPath = "/";
    fetchColorsAndSetVariables(jsonUrl, localFilePath);
  });

async function fetchColorsAndSetVariables(url, localFile) {
    const setCSSVariables = (colors) => {
        const root = document.documentElement; 
        for (const [key, value] of Object.entries(colors)) {
            root.style.setProperty(`--${key}`, value);
        }
    };

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const json = await response.json();
            return json.colors; 
        } catch (error) {
            console.error('Failed to fetch from URL:', error);
            return null;
        }
    };

    const loadLocalFile = async (filePath) => {
        try {
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error('Failed to load local file');
            }
            const json = await response.json();
            return json.schemes; 
        } catch (error) {
            console.error('Failed to load local file:', error);
            return null;
        }
    };

    const getColorsForScheme = (schemes) => { // Sets colour scheme from colours and from defined in config file
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (themePref === "auto") {
            console.log('auto selected');
            return prefersDarkScheme ? schemes.dark : schemes.light;
        }
  
        if (themePref === "dark") {
            console.log('dark selected');
            return schemes.dark;
        }
        
        if (themePref === "light") {
            console.log('light selected');
            return schemes.light;
        }

        else {
            return prefersDarkScheme ? schemes.dark : schemes.light; // default to auto if not defined
        }
            
    };

    const updateColors = async () => {
       
        let colors = await fetchData(url);
        if (colors) {
            setCSSVariables(colors);
            console.log('Colors updated from URL:', colors);
        }
    };

    const initialLoad = async () => {
        const localSchemes = await loadLocalFile(localFile);
        if (localSchemes) {
            const colors = getColorsForScheme(localSchemes);
            setCSSVariables(colors);
            console.log('Colors loaded from local file:', colors);
        }

        await updateColors();

        setInterval(updateColors, 5000); 
    };

    initialLoad();
}

fetchColorsAndSetVariables(jsonUrl, localFilePath);
