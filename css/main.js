function mostrarMensaje(mensaje) {
    const mensajeElement = document.createElement("p");
    mensajeElement.textContent = mensaje;
    document.body.appendChild(mensajeElement);
  }
  function solicitarFecha(mensaje) {
    return new Promise((resolve) => {
      const inputElement = document.createElement("input");
      inputElement.type = "text";
      const botonElement = document.createElement("button");
      botonElement.textContent = "Aceptar";
  
      const formularioElement = document.createElement("form");
      formularioElement.appendChild(inputElement);
      formularioElement.appendChild(botonElement);
      document.body.appendChild(formularioElement);
  
      formularioElement.addEventListener("submit", (event) => {
        event.preventDefault();
        document.body.removeChild(formularioElement);
        const fecha = new Date(inputElement.value);
        resolve(fecha);
      });
    });
  }
  
  let nombreGlobal = "josua";
  
  async function saludar() {
    const nombreLocal = await solicitarNombre("Por favor, introduce tu nombre:");
    mostrarMensaje("Hola, " + nombreLocal + ". Mi nombre es " + nombreGlobal + ".");
  }
  
  function solicitarNombre(mensaje) {
    return new Promise((resolve) => {
      const inputElement = document.createElement("input");
      inputElement.type = "text";
      const botonElement = document.createElement("button");
      botonElement.textContent = "Aceptar";
  
      const formularioElement = document.createElement("form");
      formularioElement.appendChild(inputElement);
      formularioElement.appendChild(botonElement);
      document.body.appendChild(formularioElement);
  
      formularioElement.addEventListener("submit", (event) => {
        event.preventDefault();
        document.body.removeChild(formularioElement);
        const nombre = inputElement.value;
        resolve(nombre);
      });
    });
  }
  
  saludar();
  
  function solicitarNumero(mensaje) {
    return new Promise((resolve) => {
      const inputElement = document.createElement("input");
      inputElement.type = "number";
      const botonElement = document.createElement("button");
      botonElement.textContent = "Aceptar";
  
      const formularioElement = document.createElement("form");
      formularioElement.appendChild(inputElement);
      formularioElement.appendChild(botonElement);
      document.body.appendChild(formularioElement);
  
      formularioElement.addEventListener("submit", (event) => {
        event.preventDefault();
        document.body.removeChild(formularioElement);
        const numero = parseInt(inputElement.value);
        resolve(numero);
      });
    });
  }
  
  async function mostrarSaludos() {
    const cantidad = await solicitarNumero("Por favor, introduce un número del 1 al 10:");
  
    if (isNaN(cantidad) || cantidad < 1 || cantidad > 10) {
      mostrarMensaje("Por favor, introduce un número válido del 1 al 10.");
    } else {
      for (let i = 1; i <= cantidad; i++) {
        mostrarMensaje("Hola, gracias por estar aquí y espero no esté tan mal hecho :)");
      }
    }
  }
   
  mostrarSaludos();
  
  const numeros = [1, 2];
  