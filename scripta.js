// Definir los contenidos de los desplegables
const dropdownContents = {
    dropdown1: [
        { text: "Gmail", url: "https://mail.google.com/" },
        { text: "Outlook", url: "https://outlook.live.com/mail/0/" },
        { text: "Yahoo! Mail", url: "https://es.mail.yahoo.com" },
        { text: "App de correo predeterminada de tu sistema", url: "mailto:" }
    ],
    dropdown2: [
        { text: "Documentos de Google", url: "https://docs.google.com/document/u/0/" },
        { text: "Word", url: "https://m365.cloud.microsoft/launch/word?auth=1" }
    ],
    dropdown3: [
        { text: "Presentaciones de Google", url: "https://docs.google.com/presentation/u/0/" },
        { text: "PowerPoint", url: "https://m365.cloud.microsoft/launch/powerpoint?auth=1" },
        { text: "Canva", url: "https://www.canva.com/" },
        { text: "Adobe Express", url: "https://new.express.adobe.com/" },
        { text: "Genially", url: "https://genially.com/es/" },
        { text: "Prezi", url: "https://prezi.com/es/" }
    ],
    dropdown4: [
        { text: "Hojas de cálculo de Google", url: "https://docs.google.com/spreadsheets/u/0/" },
        { text: "Excel", url: "https://m365.cloud.microsoft/launch/excel?auth=1" }
    ],
    dropdown5: [
        { text: "Formularios de Google", url: "https://docs.google.com/forms/u/0/" },
        { text: "Forms", url: "https://forms.office.com/" }
    ],
    dropdown6: [
        { text: "Google Drive", url: "https://drive.google.com/drive/" },
        { text: "OneDrive", url: "https://onedrive.live.com/" },
        { text: "Dropbox", url: "https://www.dropbox.com/es_ES/" }
    ],
    dropdown7: [
        { text: "ChatGPT", url: "https://chatgpt.com" },
        { text: "Perplexity", url: "https://www.perplexity.ai/" },
        { text: "Claude de Anthropic", url: "https://claude.ai/" },
        { text: "Microsoft Copilot", url: "https://copilot.microsoft.com/" },
        { text: "Gemini", url: "https://gemini.google.com/" },
        { text: "Deepseek", url: "https://chat.deepseek.com/" },
        { text: "Kimi AI", url: "https://kimi.ai/" },
        { text: "Qwen ML", url: "https://chat.qwen.ai/" },
        { text: "Mistral", url: "https://chat.mistral.ai/chat" },
        { text: "Groq", url: "https://groq.com/" },
        { text: "Grok", url: "https://grok.com/" },
        { text: "Adobe Firefly", url: "https://firefly.adobe.com/" },
        { text: "Komo AI", url: "https://komo.ai/" },
        { text: "DuckDuckGo AI", url: "https://duck.ai" },
        { text: "Elicit", url: "https://elicit.com/" },
        { text: "Phind", url: "https://www.phind.com/search?home=true" },
        { text: "Microsoft Designer", url: "https://designer.microsoft.com/" },
        { text: "Hugging Face", url: "https://huggingface.co/" },
        { text: "Notebook LM", url: "https://notebooklm.google.com/" }
    ],
    dropdown8: [
        { text: "Productos de Google", url: "https://about.google/products/" },
        { text: "Productos de Microsoft", url: "https://www.microsoft.com/es-es/microsoft-products-and-apps/" },
        { text: "Aplicaciones y páginas de Adobe", url: "https://www.adobe.com/apps" }
    ],
    dropdown10: [
        { text: "Google Maps(recomendado)", url: "https://www.google.com/maps?authuser=0" },
        { text: "Bing Maps(potenciado por TomTom)", url: "https://www.bing.com/maps?" },
        { text: "Open Street Map (mapas Open Source)", url: "https://www.openstreetmap.org/#map=" }
        
    ],
dropdown11: [
    { text: "Play Store (de Google)", url: "https://play.google.com" },
    { text: "App Store (de Apple)", url: "https://www.apple.com/app-store/" },
    { text: "Chrome Web Store (para Chrome)", url: "https://chromewebstore.google.com/" },
    { text: "Edge Web Store (para Microsoft Edge)", url: "" },
    { text: "Add-Ons de Mozilla (para Firefox)", url: "https://addons.mozilla.org/es/firefox/" }
    
    
],
dropdown12: [
    { text: "Google Meet", url: "https://meet.google.com/" },
    { text: "Microsoft Teams", url: "https://teams.live.com/v2/" },
    { text: "Skype", url: " https://web.skype.com/" },
    { text: "Zoom", url: "https://zoom.us/es" },
    { text: "Brave Talk", url: "https://talk.brave.com/" }
],
dropdown13: [
    { text: "Google Calendar", url: "https://calendar.google.com/" },
    { text: "Calendario de Outlook", url: "https://outlook.live.com/calendar/" }
],
dropdown14: [
    { text: "WhatsApp Web", url: "https://web.whatsapp.com/" },
    { text: "Telegram Web", url: "https://web.telegram.org/a/" },
    { text: "Google Chat", url: "https://calendar.google.com/" },
    { text: "Start Chat", url: "chat.start.html" }
],
dropdown15: [
    { text: "YouTube", url: "https://www.youtube.com/" },
    { text: "TikTok", url: "https://www.tiktok.com/es/" },
    { text: "Vimeo", url: "https://vimeo.com/es/" }
],
dropdown16: [
    { text: "YouTube Music", url: "https://music.youtube.com/" },
    { text: "Spotify", url: "https://www.spotify.com/" },
    { text: "Deezer", url: "https://www.deezer.com/" },
    { text: "Apple Music", url: "https://music.apple.com/es/new" }
],
dropdown17: [
    { text: "Google News", url: "https://news.google.com/" },
    { text: "Microsoft Start", url: "https://www.bing.com/news/" },
    { text: "MSN", url: "https://www.msn.com/es-es" },
    { text: "El País", url: "https://elpais.com/" },
    { text: "El Mundo", url: "https://www.elmundo.es/" },
    { text: "ABC", url: "https://www.abc.es/" },
    { text: "La Razón", url: "https://www.larazon.es/" },
    { text: "Libertad Digital", url: "https://www.libertaddigital.com/" },
],
dropdown18: [
    { text: "RTVE", url: "https://www.rtve.es/play/" },
    { text: "Atresplayer", url: "https://www.atresplayer.com/" },
    { text: "Mediaset", url: "https://www.mitele.es/directo/" }
],
dropdown19: [
    { text: "RNE", url: "https://www.rtve.es/play/radio/rne/" },
    { text: "COPE", url: "https://www.cope.es/" },
    { text: "Onda Cero", url: "https://www.ondacero.es/" },
    { text: "Radio María", url: "https://radiomaria.es/" },
    { text: "esRadio", url: "https://esradio.libertaddigital.com/directo.html" },
    { text: "Cadena SER", url: "https://cadenaser.com/" },
    { text: "Europa FM", url: "https://www.europafm.com/" },
    { text: "Melodía FM", url: "https://www.melodia-fm.com/" },
    { text: "Kiss FM", url: "https://www.kissfm.es/player/" },
    { text: "Los 40", url: "https://los40.com/" },
    { text: "M80 (nueva Los 40 Classic)", url: "https://los40.com/los40_classic/" },
    { text: "Radio Clásica", url: "https://www.rtve.es/radio/radioclasica/" }
],
dropdown20: [
    { text: "LinkedIn", url: "https://www.linkedin.com/" },
    { text: "Facebook", url: "https://www.facebook.com/" },
    { text: "X", url: "https://x.com/" },
    { text: "Bluesky", url: "https://bsky.app/" },
    { text: "Instagram", url: "https://www.instagram.com/" },
    { text: "Stack Overflow", url: "https://stackoverflow.com/" },
    { text: "Forocoches", url: "https://forocoches.com/foro/" },
    { text: "Reddit", url: "https://www.reddit.com/" }
],
dropdown22: [
    { text: "Diccionario de la Real Academia Española", url: "https://dle.rae.es/" }
],
dropdown24: [
    { text: "Imágenes de Google ", url: "https://www.google.com/imghp?hl=es&tab=ri&ogbl" },
    { text: "Bing", url: "https://www.bing.com/images/feed?form=Z9LH" },
    { text: "Pinterest", url: "https://www.pinterest.es/" }
],
dropdown25: [
    { text: "SpeedTest (mide la velocidad de la WiFi)", url: "https://www.speedtest.net/es" }
],
dropdown26: [
    { text: "Analiza Webs y Ficheros con VirusTotal", url: "https://www.virustotal.com/gui/home/upload" }
],
dropdown27: [
    { text: "Traductor de Google", url: "https://translate.google.com/?sl=es&tl=en&op=translate" },
    { text: "Traductor de Microsoft", url: "https://www.bing.com/translator?ref=TThis&text=&from=en&to=es" },
    { text: "Reverso(de los mejores)", url: "https://www.reverso.net/traducci%C3%B3n-texto" },
    { text: "Deepl", url: "https://www.deepl.com/es/translator" }
],
dropdown29: [

    { text: "inled.es", url: "http://inled.es" },
    { text: "TEA Friendly", url: "https://teafriendly.inled.es" },
    { text: "DSIGN", url: "https://inled.es/dsign" },
    { text: "Launch the launcher", url: "https://inled.es/ltl" }
],
dropdown30: [
    { text: "LifeAt", url: "https://lifeat.io" },
],
dropdown31: [
    { text: "Clipchamp", url: "https://app.clipchamp.com/" },
    { text: "Capcut", url: "https://www.capcut.com/my-edit?enter_from=page_header&from_page=editor&current_page=landing_page" },
],
dropdown32: [
    { text: "Wordpress", url: "https://wordpress.com/es/" },
    { text: "Wix", url: "https://manage.wix.com/dashboard/" },
],
dropdown34: [
    { text: "IlovePDF", url: "https://www.ilovepdf.com/es" },
    { text: "WPS PDF Tools", url: "https://pdf.wps.com/" },
],

    
};
// Función para mostrar/ocultar el menú desplegable
function toggleDropdown(dropdownId) {
    // Cerrar todos los desplegables antes de abrir el nuevo
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
    // Mostrar/ocultar el nuevo desplegable
    document.getElementById(dropdownId).classList.toggle("show");
}

// Cerrar el desplegable si se hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

        // Generar los botones dinámicamente
        document.addEventListener("DOMContentLoaded", () => {
            console.log("dropdownContents", dropdownContents) //Verify if the variable dropdownContents is correct
            for (const [dropdownId, buttons] of Object.entries(dropdownContents)) {
                const dropdownContent = document.getElementById(dropdownId);
                console.log("dropdownId", dropdownId, "dropdownContent", dropdownContent) //Verify what is returning in each iteration
                if (dropdownContent) { // Check if dropdownContent exists
                    buttons.forEach(button => {
                        const btn = document.createElement("button");
                        btn.textContent = button.text;
                        btn.onclick = () => navigateTo(button.url);
                        dropdownContent.appendChild(btn);
                    });
                } else {
                    console.error(`Element with ID '${dropdownId}' not found.`); // Show in the console when a element is not found
                }
            }
        });

        // Función para navegar a una URL específica
        function navigateTo(url) {
            window.location.href = url;
        }
// In scripta.js
document.addEventListener("DOMContentLoaded", function() {
    const myButton = document.getElementById("myButton");
    if (myButton) {
        myButton.addEventListener("click", function() {
          // Your button click logic here
          console.log("Button clicked!");
        });
    } else {
      console.error("Error: 'myButton' element not found. Esto se debe a que se cargará en la página actualizar.html");
    }
  });


// Cerrar el desplegable si se hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchEngineButtons = document.querySelectorAll('.search-engines button');


    searchEngineButtons.forEach(button => {
      button.addEventListener('click', () => {
        searchEngineButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });
    window.addEventListener('scroll', function() {
  var stickyNav = document.getElementById('sticky-nav');
  var scrollPosition = window.pageYOffset;

  if (scrollPosition >= 0) {
    stickyNav.style.position = 'fixed';
    stickyNav.style.top = '0';
    stickyNav.style.width = '100%';
  } else {
    stickyNav.style.position = 'static';
  }
});

window.addEventListener('scroll', function() {
    var stickyNav = document.getElementById('sticky-nav2');
    var scrollPosition = window.pageYOffset;
  
    if (scrollPosition >= 0) {
      stickyNav.style.position = 'fixed';
      stickyNav.style.top = '600px';
      stickyNav.style.width = '100%';
    } else {
      stickyNav.style.position = 'static';
    }
  });

    searchButton.addEventListener('click', () => {
      const searchTerm = searchInput.value.trim();
      const activeSearchEngine = document.querySelector('.search-engines button.active').id.replace('-button', '');

      switch (activeSearchEngine) {
        case 'google':
          window.open(`https://www.google.com/search?q=${searchTerm}`, '_blank');
          break;
        case 'bing':
          window.open(`https://www.bing.com/search?q=${searchTerm}`, '_blank');
          break;
        case 'brave':
          window.open(`https://search.brave.com/search?q=${searchTerm}`, '_blank');
          break;
        case 'duckduckgo':
          window.open(`https://duckduckgo.com/?q=${searchTerm}`, '_blank');
          break;
        case 'qwant':
          window.open(`https://www.qwant.com/?q=${searchTerm}&client=opensearch`, '_blank');
          break;
        case 'wikipedia':
          window.open(`https://es.wikipedia.org/wiki/${searchTerm}`, '_blank');
          break;
      }
    });

    document.getElementById('clear-button').addEventListener('click', function() {
        document.getElementById('search-input').value = '';
    });
    




