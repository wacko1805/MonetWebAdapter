function isAndroid12OrAbove() {
    const userAgent = navigator.userAgent;
    const match = userAgent.match(/Android\s+([0-9\.]+)/);
    if (match) {
        const version = parseFloat(match[1]);
        return version >= 12;
    }
    return false;
}

function showPopup() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = 999;

    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.padding = '20px';
    popup.style.backgroundColor = 'white';
    popup.style.border = '1px solid black';
    popup.style.zIndex = 1000;

    popup.innerHTML = `
        <h2>ANDROID USER TEST</h2>
        <p>This popup is for Android 12 and above.</p>
        <button id="closeButton">Close</button>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(popup);

    document.getElementById('closeButton').onclick = function() {
        document.body.removeChild(overlay);
        document.body.removeChild(popup);
    };
}

if (isAndroid12OrAbove()) {
    showPopup();
}
