document.addEventListener('DOMContentLoaded', function () {

   const email = {
      email: '',
      password: ''
   }

   const inputEmail = document.getElementById('email');
   const inputPass = document.getElementById('password');
   const formulario = document.getElementById('formulario');
   const btnLogin = document.querySelector('#formulario button[type="submit"]');
   const spiner = document.querySelector('#spinner');

   inputEmail.addEventListener('blur', validarInput);
   inputPass.addEventListener('blur', validarInput);
   formulario.addEventListener('submit', enviarFormulario);


   function validarInput(e) {
      const name = e.target.id;
      const target = e.target.parentElement
      const value = e.target.value.trim();
      if (value === '') {
         alertaInput(`El campo ${name} no puede estar vacio`, target);
         email[name] = '';
         comprobarForm();
         return
      }

      if (name === 'email' && !validarEmail(value)) {
         alertaInput(`El campo ${name} no es valido`, target);
         email[name] = '';
         comprobarForm();
         return
      }

      limpiarAlerta(target)
      email[name] = value.toLowerCase;
      comprobarForm();
   }

   function alertaInput(msgError, referencia) {
      limpiarAlerta(referencia);
      const error = document.createElement('P');
      error.textContent = msgError;
      error.classList.add('alerta');
      referencia.appendChild(error);
   }

   function limpiarAlerta(referencia) {
      const alerta = referencia.querySelector('.alerta');
      if (alerta) {
         alerta.remove();
      }
   }

   function validarEmail(email) {
      const expresion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
      return expresion.test(email);
   }

   function comprobarForm() {
      const asignar = Object.values(email).includes('');
      if (asignar) {
         btnLogin.disabled = true;
         return
      }
      btnLogin.disabled = false;
   }

   function enviarFormulario(e) {
      e.preventDefault(); // Evita que se recargue la pagina
      spiner.style.display = 'flex';

      setTimeout(() => {
         spiner.style.display = 'none';
         resetFormulario();

         const mensaje = document.createElement('P');
         mensaje.textContent = 'El formulario se envio correctamente';
         mensaje.classList.add('success');
         formulario.appendChild(mensaje);

         setTimeout(() => {
            mensaje.remove();
         }, 3000)

      }, 3000);
   }

   function resetFormulario() {
      email.email = '';
      email.password = '';
      formulario.reset();
      comprobarForm();
   }

});