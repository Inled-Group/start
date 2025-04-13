document.getElementById("share-button").addEventListener("click", function() {
    const shareOptions = document.getElementById("share-options");
    shareOptions.style.display = shareOptions.style.display === "block" ? "none" : "block";
});

document.getElementById("share-email").addEventListener("click", function() {
    const subject = encodeURIComponent(`Esta página ${window.location.href} te permite buscar en múltiples motores de búsqueda !en sólo 3 clics!`);
    const body = encodeURIComponent(`Yo estoy en esta página ${window.location.href}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
});

document.getElementById("share-whatsapp").addEventListener("click", function() {
    const message = encodeURIComponent(`Buenas, estoy usando esta página: ${window.location.href} y funciona muy bien. te permite buscar en Google, Bing, Brave, Qwant y Wikipedia más rápido.`);
    window.location.href = `https://api.whatsapp.com/send?text=${message}`;
});

document.getElementById("share-telegram").addEventListener("click", function() {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent('Con Start> se puede buscar en múltiples buscadores en 3 clics. ¿Asombroso, no? ¡Pruébalo!')}`;
    window.open(telegramUrl, '_blank', 'width=600,height=400');
});

