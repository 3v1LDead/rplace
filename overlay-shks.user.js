// ==UserScript==
// @name         Schagges Community Template
// @namespace    http://tampermonkey.net/
// @version      1
// @description  try to take over the canvas! Schagges template only
// @author       Chris-GW + nama17 + Kloroller_DE + vertigo + Sockenschuh (for Bonjwa), 3v1LDead (for Schagges)
// @match        https://garlic-bread.reddit.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=oskarpannier.com
// @updateURL    https://github.com/3v1LDead/rplace/raw/main/overlay.user.js
// @downloadURL  https://github.com/3v1LDead/rplace/raw/main/overlay.user.js
// ==/UserScript==

addOverlayImage("https://raw.githubusercontent.com/3v1LDead/rplace/main/overlay.png")

function addOverlayImage(url) {
  var overlayImage = null;
  if (window.top !== window.self) {
    window.addEventListener('load', () => {
      const canvasContainer = document.querySelector("garlic-bread-embed").shadowRoot.querySelector("div.layout").querySelector("garlic-bread-canvas").shadowRoot.querySelector("div.container");
      overlayImage = document.createElement("img");
      overlayImage.src = url + "?" + Date.now()
      overlayImage.style = `position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;pointerEvents: 'none';`;
      canvasContainer.appendChild(overlayImage);
    }, false);
  }

  setInterval(function () {
    overlayImage.src = url + "?" + Date.now()
  }, 15000);
}
