document.addEventListener('DOMContentLoaded', function() {

// Definir los contenidos de los desplegables
const dropdownData = {
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


// Cargar los botones en los dropdowns
Object.keys(dropdownData).forEach(dropdownId => {
  const dropdown = document.getElementById(dropdownId);
  if (dropdown) {
    dropdownData[dropdownId].forEach(item => {
      const button = document.createElement('button');
      button.textContent = item.name;
      button.onclick = function() {
        window.open(item.url, '_blank');
      };
      dropdown.appendChild(button);
    });
  }
});

// Función para alternar la visibilidad de los dropdowns
function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  const allDropdowns = document.querySelectorAll('.dropdown-content');
  
  // Ocultar todos los dropdowns
  allDropdowns.forEach(function(el) {
    if (el.id !== dropdownId) {
      el.classList.remove('show');
    }
  });
  
  // Mostrar/ocultar el dropdown seleccionado
  dropdown.classList.toggle('show');
}

// Cerrar los dropdowns si se hace clic fuera de ellos
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(function(dropdown) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    });
  }
};

// Inicializar configuraciones cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
// Verificar si el modo oscuro estaba activado
if (localStorage.getItem('darkMode') === 'true') {
document.body.classList.add('dark-mode');
}

// Cargar el motor de búsqueda preferido del usuario
const savedEngine = localStorage.getItem('searchEngine') || 'google';
buscadorActual = savedEngine;

// Aplicar la clase active al botón correspondiente
document.querySelectorAll('.search-engines button').forEach(function(btn) {
btn.classList.remove('active');
// Identifica qué botón corresponde al motor guardado
if (btn.id === savedEngine + '-button') {
btn.classList.add('active');
}
});

// Cargar favoritos guardados
cargarFavoritos();
});

// Alternar modo oscuro
document.getElementById('toggle-dark-mode').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Compartir la página
document.getElementById('share-button').addEventListener('click', function() {
  document.getElementById('share-options').style.display = 
    document.getElementById('share-options').style.display === 'block' ? 'none' : 'block';
});

// Opciones de compartir
document.getElementById('share-email').addEventListener('click', function(e) {
  e.preventDefault();
  window.location.href = 'mailto:?subject=Visita%20Start>&body=Échale%20un%20vistazo%20a%20esta%20página%20de%20inicio:%20' + encodeURIComponent(window.location.href);
});

document.getElementById('share-whatsapp').addEventListener('click', function(e) {
  e.preventDefault();
  window.open('https://wa.me/?text=' + encodeURIComponent('Échale un vistazo a esta página de inicio: ' + window.location.href), '_blank');
});

document.getElementById('share-telegram').addEventListener('click', function(e) {
  e.preventDefault();
  window.open('https://t.me/share/url?url=' + encodeURIComponent(window.location.href) + '&text=' + encodeURIComponent('Échale un vistazo a esta página de inicio'), '_blank');
});

// Funcionalidad de búsqueda
let buscadorActual = 'google';

// Función para realizar la búsqueda
function buscar() {
  const termino = document.getElementById('search-input').value;
  if (termino.trim() === '') return;
  
  let url;
  switch (buscadorActual) {
    case 'google':
      url = 'https://www.google.com/search?q=' + encodeURIComponent(termino);
      break;
    case 'bing':
      url = 'https://www.bing.com/search?q=' + encodeURIComponent(termino);
      break;
    case 'brave':
      url = 'https://search.brave.com/search?q=' + encodeURIComponent(termino);
      break;
    case 'duckduckgo':
      url = 'https://duckduckgo.com/?q=' + encodeURIComponent(termino);
      break;
    case 'qwant':
      url = 'https://www.qwant.com/?q=' + encodeURIComponent(termino);
      break;
    case 'ecosia':
      url = 'https://www.ecosia.org/search?q=' + encodeURIComponent(termino);
      break;
    case 'wikipedia':
      url = 'https://es.wikipedia.org/wiki/Special:Search?search=' + encodeURIComponent(termino);
      break;
    default:
      url = 'https://www.google.com/search?q=' + encodeURIComponent(termino);
  }
  
  window.open(url, '_blank');
}

// Botones de motores de búsqueda
document.getElementById('google-button').addEventListener('click', function() {
  setActiveSearchEngine('google', this);
});

document.getElementById('bing-button').addEventListener('click', function() {
  setActiveSearchEngine('bing', this);
});

document.getElementById('brave-button').addEventListener('click', function() {
  setActiveSearchEngine('brave', this);
});

document.getElementById('duckduckgo-button').addEventListener('click', function() {
  setActiveSearchEngine('duckduckgo', this);
});

document.getElementById('qwant-button').addEventListener('click', function() {
  setActiveSearchEngine('qwant', this);
});

document.getElementById('ecosia-button').addEventListener('click', function() {
  setActiveSearchEngine('ecosia', this);
});

document.getElementById('wikipedia-button').addEventListener('click', function() {
  setActiveSearchEngine('wikipedia', this);
});

// Función para establecer el motor de búsqueda activo
function setActiveSearchEngine(engine, button) {
buscadorActual = engine;

// Quitar clase activa de todos los botones
document.querySelectorAll('.search-engines button').forEach(function(btn) {
btn.classList.remove('active');
});

// Añadir clase activa al botón seleccionado
button.classList.add('active');

// Guardar la preferencia del usuario
localStorage.setItem('searchEngine', engine);
}

// Gestión de favoritos
function guardarFavorito() {
  const nombre = document.getElementById('nombre-favorito').value.trim();
  const url = document.getElementById('url-favorito').value.trim();
  
  if (nombre === '' || url === '') {
    alert('Por favor, rellena tanto el nombre como la URL del favorito.');
    return;
  }
  
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    const urlCorregida = 'https://' + url;
    document.getElementById('url-favorito').value = urlCorregida;
  }
  
  // Obtener favoritos actuales
  const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
  
  // Añadir nuevo favorito
  favoritos.push({
    nombre: nombre,
    url: document.getElementById('url-favorito').value
  });
  
  // Guardar en localStorage
  localStorage.setItem('favoritos', JSON.stringify(favoritos));
  
  // Limpiar campos
  document.getElementById('nombre-favorito').value = '';
  document.getElementById('url-favorito').value = '';
  
  // Actualizar la lista de favoritos
  cargarFavoritos();
}

function cargarFavoritos() {
  const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
  const lista = document.getElementById('favoritos-lista');
  
  // Limpiar lista actual
  lista.innerHTML = '';
  
  // Mostrar cada favorito
  favoritos.forEach(function(favorito) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = favorito.url;
    a.target = '_blank';
    a.textContent = favorito.nombre;
    
    // Añadir evento para eliminación
    li.addEventListener('click', function(e) {
      if (lista.classList.contains('eliminacion-activa')) {
        e.preventDefault();
        eliminarFavorito(favorito);
      }
    });
    
    li.appendChild(a);
    lista.appendChild(li);
  });
}

function toggleEliminarFavoritos() {
  const lista = document.getElementById('favoritos-lista');
  const mensaje = document.getElementById('mensaje-eliminacion');
  
  lista.classList.toggle('eliminacion-activa');
  
  if (lista.classList.contains('eliminacion-activa')) {
    mensaje.style.display = 'block';
  } else {
    mensaje.style.display = 'none';
  }
}

function eliminarFavorito(favorito) {
  const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
  
  // Filtrar el favorito a eliminar
  const nuevosFavoritos = favoritos.filter(function(f) {
    return f.nombre !== favorito.nombre || f.url !== favorito.url;
  });
  
  // Guardar en localStorage
  localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
  
  // Actualizar la lista
  cargarFavoritos();
}

// Función para alternar la visualización de iframes de periódicos
// Función para alternar la visualización de iframes de periódicos con carga perezosa
window.toggleIframe = function(iframeId) {
  const container = document.getElementById('iframe-container');
  const iframe = document.getElementById(iframeId);
  const allIframes = document.querySelectorAll('#iframe-container iframe');

  // Ocultar todos los iframes
  allIframes.forEach(function(frame) {
    frame.style.display = 'none';
    // No limpiamos el src para preservar el contenido si ya fue cargado
  });

  // Cargar el contenido solo si no se ha cargado antes (usando data-src)
  if (iframe.getAttribute('src') === 'about:blank' || !iframe.getAttribute('src')) {
    // Obtener la URL real del atributo data-src
    const realSrc = iframe.getAttribute('data-src');
    if (realSrc) {
      iframe.setAttribute('src', realSrc);
    }
  }

  // Mostrar el contenedor y el iframe seleccionado
  container.style.display = 'block';
  iframe.style.display = 'block';

  // Hacer scroll al iframe
  container.scrollIntoView({ behavior: 'smooth' });
};
});

