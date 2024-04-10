function submitForm() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

  
    console.log('Nombre:', nombre);
    console.log('Correo:', correo);
    console.log('Mensaje:', mensaje);

    
}

function toggleDarkMode() {
    const body = document.body;
    const container = document.getElementById('container');
    const darkModeBtn = document.getElementById('darkModeBtn');

    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
    darkModeBtn.innerText = body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
}


