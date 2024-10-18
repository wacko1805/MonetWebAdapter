function isAndroid() {
    const userAgent = navigator.userAgent;
    return /Android/i.test(userAgent);
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
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
        <h2>This site support your phones Dynamic Wallpaper Colours!</h2>
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
addExternalStylesheet('https://wacko1805.github.io/MonetWebAdapter/popup/popup.css'); // Replace with your actual URL

// Check URL and show the popup if conditions are met
if (isAndroid() && !getCookie('popupClosed') && !window.location.href.includes("http://localhost:8192")) {
    document.addEventListener('DOMContentLoaded', function() {
        showPopup();
    });
}
