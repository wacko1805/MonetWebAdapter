const jsonUrl = 'http://localhost:8192/';
const localFilePath = 'colours.json';

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
            return json.colors; // Return the colors object directly
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
            return json.schemes; // Return the schemes object for dark/light mode
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
        // Try to fetch from URL
        let colors = await fetchData(url);
        if (colors) {
            setCSSVariables(colors);
            console.log('Colors updated from URL:', colors);
        }
    };

    const initialLoad = async () => {
        // Load the local file first
        const localSchemes = await loadLocalFile(localFile);
        if (localSchemes) {
            const colors = getColorsForScheme(localSchemes);
            setCSSVariables(colors);
            console.log('Colors loaded from local file:', colors);
        }

        // Start fetching from URL every 5 seconds
        setInterval(updateColors, 3000);
    };

    // Initial load of the local file
    initialLoad();
}

fetchColorsAndSetVariables(jsonUrl, localFilePath);
