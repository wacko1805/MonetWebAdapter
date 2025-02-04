const jsonUrl = 'http://localhost:8192/'; // DO NOT CHANGE THIS Defines URL from host app 
const configFile = 'DWAconfig.json'; // Define your config file here
// Get external colours.json file from config page.

const basePath = window.location.origin; 
fetch(`${basePath}/${configFile}`)  
  .then(response => response.json())
  .then(data => {
    const localFilePath = data.colours_path;
    console.log(localFilePath);
    fetchColorsAndSetVariables(jsonUrl, localFilePath);
  })
  .catch(error => {
    console.error('Error fetching the JSON:', error);
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

    const getColorsForScheme = (schemes) => {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return prefersDarkScheme ? schemes.dark : schemes.light;
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
