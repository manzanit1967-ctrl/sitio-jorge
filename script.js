
function handleSubmit(e){
  e.preventDefault();
  const status = document.getElementById('form-status');
  const data = new FormData(e.target);
  const nombre = data.get('nombre');
  const mensaje = data.get('mensaje');
  status.textContent = '¡Gracias, ' + nombre + '! Tu mensaje quedó anotado localmente.';
  // Guardar en localStorage para uso sin servidor
  const prev = JSON.parse(localStorage.getItem('mensajes') || '[]');
  prev.push({ nombre, mensaje, fecha: new Date().toISOString() });
  localStorage.setItem('mensajes', JSON.stringify(prev));
  e.target.reset();
  return false;
}
