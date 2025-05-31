
// Definir los contenidos de los desplegables
const dropdownData = {
    dropdown1: [
        { text: "Gmail", url: "https://mail.google.com/" },
        { text: "Outlook", url: "https://outlook.live.com/mail/0/" },
        { text: "Yahoo! Mail", url: "https://es.mail.yahoo.com" },
        { text: "AOL Mail", url: "https://login.aol.com/?src=mail" },
        { text: "Proton Mail", url: "https://mail.proton.me/" },
        { text: "iCloud Mail", url: "https://www.icloud.com/mail/" },
        { text: "App de correo predeterminada de tu sistema", url: "mailto:" }
    ],
    dropdown2: [
        { text: "Documentos de Google", url: "https://docs.google.com/document/u/0/" },
        { text: "Word", url: "https://m365.cloud.microsoft/launch/word?auth=1" },
        { text: "WPS Docs", url: "https://docs.wps.com/launch/docs" },
        { text: "Proton Docs", url: "https://docs.proton.me/" },
        { text: "iCloud Pages", url: "https://www.icloud.com/pages/" }
    ],
    dropdown3: [
        { text: "Presentaciones de Google", url: "https://docs.google.com/presentation/u/0/" },
        { text: "PowerPoint", url: "https://m365.cloud.microsoft/launch/powerpoint?auth=1" },
        { text: "WPS Slides", url: "https://docs.wps.com/launch/slides" },
        { text: "Canva", url: "https://www.canva.com/" },
        { text: "Adobe Express", url: "https://new.express.adobe.com/" },
        { text: "Genially", url: "https://genially.com/es/" },
        { text: "Prezi", url: "https://prezi.com/es/" },
        { text: "iCloud Keynote", url: "https://www.icloud.com/keynote/" }
    ],
    dropdown4: [
        { text: "Hojas de cálculo de Google", url: "https://docs.google.com/spreadsheets/u/0/" },
        { text: "Excel", url: "https://m365.cloud.microsoft/launch/excel?auth=1" },
        { text: "WPS Sheets", url: "https://docs.wps.com/launch/sheets" },
        { text: "iCloud Numbers", url: "https://www.icloud.com/numbers/" }
    ],
    dropdown5: [
        { text: "Formularios de Google", url: "https://docs.google.com/forms/u/0/" },
        { text: "Microsoft Forms", url: "https://forms.office.com/" },
        { text: "WPS Forms", url: "https://docs.wps.com/launch/forms" }
    ],
    dropdown6: [
        { text: "Google Drive", url: "https://drive.google.com/drive/" },
        { text: "OneDrive", url: "https://onedrive.live.com/" },
        { text: "Dropbox", url: "https://www.dropbox.com/es_ES/" },
        { text: "WPS Drive", url: "https://docs.wps.com/drive?lang=es-ES" },
        { text: "Proton Drive", url: "https://drive.proton.me/" },
        { text: "iCloud Drive", url: "https://www.icloud.com/iclouddrive/" }
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
    { text: "Jitsi Meet", url: "https://meet.jit.si/" },
    { text: "Brave Talk", url: "https://talk.brave.com/" }
],
dropdown13: [
    { text: "Google Calendar", url: "https://calendar.google.com/" },
    { text: "Calendario de Outlook", url: "https://outlook.live.com/calendar/" },
    { text: "Proton Calendar", url: "https://calendar.proton.me/" },
    { text: "iCloud Calendar", url: "https://www.icloud.com/calendar/" }
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
    { text: "TDT Channels (TV Online)", url: "https://play.tdtchannels.com/television/" },
    { text: "Tivify (TV Online)", url: "https://www.tivify.tv/inicio" },
    { text: "RTVE", url: "https://www.rtve.es/play/" },
    { text: "Atresplayer", url: "https://www.atresplayer.com/" },
    { text: "Mediaset", url: "https://www.mitele.es/directo/" }
],
dropdown19: [
  { text: "RadioPlayer", url: "https://radioplayerespana.es/player.php" },
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
    { text: "Launch the launcher", url: "https://inled.es/ltl" },
    { text: "Ayuda", url: "ayuda.html" },
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

document.addEventListener('DOMContentLoaded', function () {
  // Inicializar motores de búsqueda
  initializeSearchEngineSelector();

  // Activar botón de búsqueda
  document.getElementById('search-button')?.addEventListener('click', buscar);

  // Activar modo oscuro si está en localStorage
  const dark = localStorage.getItem('darkMode') === 'true';
  if (dark) document.body.classList.add('dark-mode');

  // Activar botón cerrar iframe
  document.getElementById('close-iframe')?.addEventListener('click', window.cerrarIframe);

  // Activar menú de motores
  const toggle = document.getElementById('menu-toggle-search-engines');
  const menu = document.getElementById('search-engines-menu');
  toggle?.addEventListener('click', () => {
    toggle.classList.toggle('open');
    menu.classList.toggle('show');
  });

  // Botón de modo oscuro
  document.getElementById('toggle-dark-mode')?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  });

  // Evento global para cerrar desplegables al hacer clic fuera
  document.addEventListener('click', function (event) {
    if (!event.target.matches('.dropbtn')) {
      document.querySelectorAll('.dropdown-content').forEach(dd => dd.classList.remove('show'));
    }
  });

  // Cargar favoritos
  cargarFavoritos();

  // Rellenar los desplegables
  cargarDropdowns();
});

window.toggleDropdown = function (dropdownId) {
  document.querySelectorAll('.dropdown-content').forEach(dd => {
    if (dd.id !== dropdownId) dd.classList.remove('show');
  });
  const current = document.getElementById(dropdownId);
  if (current) current.classList.toggle('show');
};

function buscar() {
  const input = document.getElementById('search-input');
  if (!input) return;
  const termino = input.value.trim();
  if (termino === '') return;

  const buscadorActual = localStorage.getItem('searchEngine') || 'google';
  const motores = {
    google: `https://www.google.com/search?q=${encodeURIComponent(termino)}`,
    bing: `https://www.bing.com/search?q=${encodeURIComponent(termino)}`,
    startpage: `https://www.startpage.com/search?q=${encodeURIComponent(termino)}`,
    brave: `https://search.brave.com/search?q=${encodeURIComponent(termino)}`,
    duckduckgo: `https://duckduckgo.com/?q=${encodeURIComponent(termino)}`,
    qwant: `https://www.qwant.com/?q=${encodeURIComponent(termino)}`,
    ecosia: `https://www.ecosia.org/search?q=${encodeURIComponent(termino)}`,
    privacywall: `https://www.privacywall.org/search/secure?q=${encodeURIComponent(termino)}`,
    aol: `https://search.aol.com/aol/search?q=${encodeURIComponent(termino)}`,
    wikipedia: `https://es.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(termino)}`,
  };

  const url = motores[buscadorActual] || motores.google;
  window.open(url, '_blank');
}

function initializeSearchEngineSelector() {
  const dropdown = document.getElementById('search-engine-dropdown');
  const currentEngineButton = document.getElementById('current-engine-button');
  const iconSpan = document.getElementById('current-engine-icon');
  const searchEngines = [
    { id: 'google', name: 'Google', icon: 'fa-google' },
    { id: 'bing', name: 'Bing', icon: 'fa-bing' },
    { id: 'startpage', name: 'Startpage', icon: 'fa-search' },
    { id: 'brave', name: 'Brave', icon: 'fa-fire' },
    { id: 'duckduckgo', name: 'DuckDuckGo', icon: 'fa-duck' },
    { id: 'qwant', name: 'Qwant', icon: 'fa-search' },
    { id: 'ecosia', name: 'Ecosia', icon: 'fa-leaf' },
    { id: 'privacywall', name: 'PrivacyWall', icon: 'fa-shield-halved' },
    { id: 'aol', name: 'AOL', icon: 'fa-a' },
    { id: 'wikipedia', name: 'Wikipedia', icon: 'fa-wikipedia-w' },
  ];

  if (!dropdown || !currentEngineButton) return;
  dropdown.innerHTML = '';

  const saved = localStorage.getItem('searchEngine') || 'google';
  searchEngines.forEach(engine => {
    const button = document.createElement('button');
    button.innerHTML = `<i class="fa ${engine.icon}"></i> <span>${engine.name}</span>`;
    if (engine.id === saved) button.classList.add('active');
    button.addEventListener('click', () => {
      localStorage.setItem('searchEngine', engine.id);
      if (iconSpan) iconSpan.className = 'fa ' + engine.icon;
      dropdown.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      dropdown.classList.remove('show');
    });
    dropdown.appendChild(button);
  });

  const found = searchEngines.find(e => e.id === saved);
  if (found && iconSpan) iconSpan.className = 'fa ' + found.icon;

  currentEngineButton.addEventListener('click', e => {
    e.stopPropagation();
    dropdown.classList.toggle('show');
  });

  window.addEventListener('click', e => {
    if (!e.target.closest('.search-engine-selector')) {
      dropdown.classList.remove('show');
    }
  });
}

function cargarDropdowns() {
  if (typeof dropdownData === 'undefined') return;
  Object.keys(dropdownData).forEach(dropdownId => {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) {
      dropdownData[dropdownId].forEach(item => {
        const button = document.createElement('button');
        button.textContent = item.text;
        button.onclick = function () {
          window.open(item.url, '_blank');
        };
        dropdown.appendChild(button);
      });
    }
  });
}

function cargarFavoritos() {
  const lista = document.getElementById('favoritos-lista');
  if (!lista) return;
  const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
  lista.innerHTML = '';
  favoritos.forEach(f => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = f.url;
    a.textContent = f.nombre;
    a.target = '_blank';
    li.appendChild(a);
    li.addEventListener('click', function (e) {
      if (lista.classList.contains('eliminacion-activa')) {
        e.preventDefault();
        eliminarFavorito(f);
      }
    });
    lista.appendChild(li);
  });
}

function eliminarFavorito(fav) {
  const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
  const nuevos = favoritos.filter(f => f.url !== fav.url || f.nombre !== fav.nombre);
  localStorage.setItem('favoritos', JSON.stringify(nuevos));
  cargarFavoritos();
}

window.guardarFavorito = function () {
  const nombre = document.getElementById('nombre-favorito').value.trim();
  let url = document.getElementById('url-favorito').value.trim();
  if (!nombre || !url) return alert('Rellena ambos campos');
  if (!/^https?:\/\//i.test(url)) url = 'https://' + url;

  const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
  favoritos.push({ nombre, url });
  localStorage.setItem('favoritos', JSON.stringify(favoritos));
  document.getElementById('nombre-favorito').value = '';
  document.getElementById('url-favorito').value = '';
  cargarFavoritos();
};

window.toggleEliminarFavoritos = function () {
  const lista = document.getElementById('favoritos-lista');
  const mensaje = document.getElementById('mensaje-eliminacion');
  lista.classList.toggle('eliminacion-activa');
  mensaje.style.display = lista.classList.contains('eliminacion-activa') ? 'block' : 'none';
};

window.toggleIframe = function (iframeId) {
  const cont = document.getElementById('iframe-container');
  const iframes = cont.querySelectorAll('iframe');
  iframes.forEach(f => f.style.display = 'none');
  const iframe = document.getElementById(iframeId);
  if (!iframe) return;
  if (!iframe.src || iframe.src === 'about:blank') iframe.src = iframe.dataset.src;
  iframe.style.display = 'block';
  cont.style.display = 'block';
  cont.scrollIntoView({ behavior: 'smooth' });
};

window.cerrarIframe = function () {
  const cont = document.getElementById('iframe-container');
  cont.style.display = 'none';
  cont.querySelectorAll('iframe').forEach(f => f.style.display = 'none');
};
