let cantidad = document.getElementById('cantidad');
    let boton = document.getElementById('generar'); 
    let contraseña = document.getElementById('contrasena');

   const CadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&()';

 function generar() { 

    let NumeroDigital = parseInt (cantidad.value);
    console.log(NumeroDigital);

    if( NumeroDigital <= 8){
        alert('La cantidad de caracteres debe ser mayor que 8');
        return;


      }

       let password = '';

      for(let i= 0; i < NumeroDigital; i++ ){

          let CaracterAleatorio = CadenaCaracteres[Math.floor(Math.random() * CadenaCaracteres.length)];
        console.log(CaracterAleatorio);

        password+=CaracterAleatorio;

      }
      alert('Contraseña generada');
      contrasena.value= password;
      Validar(password);
      password.value(8-10);
      
    }

    function limpiar() {

      contrasena.value="";
      cantidad.value="";

    }
    function Validar(password) {

      const valMay = /[A-Z]/.test(password);
      const valMin = /[a-z]/.test(password);
      const valNum = /\d/.test(password);
       const valEsp = /[/@#$%^&()*_+=]/.test(password);
      if (!valMay || !valMin || !valNum || !valEsp) { 
          alert("Contraseña demasiado Debil");
   }  else {
          alert("Contraseña Fuerte");
       }
       
  } 

    
    

 