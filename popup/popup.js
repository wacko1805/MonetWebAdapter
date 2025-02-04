function isAndroid() {
    const userAgent = navigator.userAgent;
    return /Android/i.test(userAgent);
}

function setCookie(name, value) {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1); // Set expiration to one year from now
    document.cookie = name + "=" + (value || "") + "; expires=" + expires.toUTCString() + "; path=/";
}


function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function addExternalStylesheet(url) {
    const link = document.createElement('link');
    link.href = url;
    link.rel = "stylesheet";
    link.type = "text/css";
    document.head.appendChild(link);
}


function showPopup() {
    const overlay = document.createElement('div');
    overlay.className = 'overlay'; 


    const popup = document.createElement('div');
    popup.className = 'popup'; 

    popup.innerHTML = `
        <h2>This site supports your phones Dynamic Wallpaper Colours!</h2>
        <p>Download the Free and open source MonetWebAdapter app to view this website in your personalised colours! <a href="https://github.com/wacko1805/MonetWebAdapter">Learn more.</a></p>
        <a href="https://github.com/wacko1805/MonetWebHost/releases"><button>Download Now!</button></a>
        <button id="closePopup">Close</button>
    `;


    document.body.appendChild(overlay);
    document.body.appendChild(popup);

    document.getElementById('closePopup').onclick = function() {
        setCookie('popupClosed', 'true', 1); // Set cookie for 1 day
        document.body.removeChild(overlay);
        document.body.removeChild(popup);
    };
}

// Load external CSS stylesheet
        // addExternalStylesheet('https://wacko1805.github.io/MonetWebAdapter/popup/popup.css'); 
        addExternalStylesheet('http://127.0.0.1:3000/popup/popup.css'); // local for testing


// Check if the current environment is Android, the popup has not been closed, and the URL is not localhost:8192
if (isAndroid() && !getCookie('popupClosed') && !window.location.href.startsWith("http://localhost:8192")) {
    document.addEventListener('DOMContentLoaded', function() {
        showPopup();
    });
}
