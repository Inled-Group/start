document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento nav
    const stickyNav2 = document.getElementById('sticky-nav2');
    
    if (stickyNav2) {
      // Guardar la posición original (estática) del nav
      const originalStyles = {
        position: stickyNav2.style.position,
        bottom: stickyNav2.style.bottom,
        left: stickyNav2.style.left,
        width: stickyNav2.style.width,
        zIndex: stickyNav2.style.zIndex
      };
      
      // Crear un elemento para compensar el espacio
      const spacer = document.createElement('div');
      spacer.style.height = '0px';
      stickyNav2.parentNode.insertBefore(spacer, stickyNav2.nextSibling);
      
      // Función para actualizar la posición del nav
      function updateNavPosition() {
        // Fijar el nav en la parte inferior
        stickyNav2.style.position = 'fixed';
        stickyNav2.style.bottom = '0';
        stickyNav2.style.left = '0';
        stickyNav2.style.width = '100%';
        stickyNav2.style.zIndex = '1000';
        
        // Actualizar la altura del espaciador
        const navHeight = stickyNav2.offsetHeight;
        spacer.style.height = navHeight + 'px';
      }
      
      // Llamar una vez al cargar
      updateNavPosition();
      
      // Actualizar cuando se redimensione la ventana
      window.addEventListener('resize', updateNavPosition);
    }
  });