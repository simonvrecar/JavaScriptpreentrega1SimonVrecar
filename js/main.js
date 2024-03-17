/* console.log('Hola'); */

let apellido = '' 
let nombre = '' 
let telefono = '' 

alert("Completa tus datos y participá por un descuento en la matricula");

//PEDIR EL APELLIDO:
function escribirApellido(){  
    apellido = prompt('Ingresa tu Apellido').toLowerCase()
    let mayApellido = apellido.charAt(0).toUpperCase() + apellido.slice(1)
    

    while(!mayApellido || ['',' '].includes(mayApellido)){
      switch(mayApellido){
        case false:
          alert('Debes ingresar el Apellido.')
          apellido = prompt('Ingresa tu Apellido').toLowerCase()
          mayApellido = apellido.charAt(0).toUpperCase() + apellido.slice(1)
          break
        case '':
          alert('El Apellido es un campo oblidatorio.')
          apellido = prompt('Ingresa el Apellido (por ejemplo: "Perez"').toLowerCase()
          mayApellido = apellido.charAt(0).toUpperCase() + apellido.slice(1)
          break
        case ' ':
          alert('El Apellido es un campo oblidatorio.')
          apellido = prompt('Ingresa el Apellido (por ejemplo: "Perez"').toLowerCase()
          mayApellido = apellido.charAt(0).toUpperCase() + apellido.slice(1)
          break   
      }
    }
    return mayApellido
  }

//PEDIR EL NOMBRE:
function escribirNombre(){  
  nombre = prompt('Ingresa tu Nombre').toLowerCase()
  let mayNombre = nombre.charAt(0).toUpperCase() + nombre.slice(1)
  
  while(!mayNombre || ['',' '].includes(mayNombre)){
    switch(mayNombre){
      case false:
        alert('Debes ingresar el Nombre.')
        nombre = prompt('Ingresa tu Nombre').toLowerCase()
        mayNombre = nombre.charAt(0).toUpperCase() + nombre.slice(1)
        break
      case '':
        alert('El Nombre es un campo oblidatorio.')
        nombre = prompt('Ingresa el Nombre (por ejemplo: "Simon"').toLowerCase()
        mayNombre = nombre.charAt(0).toUpperCase() + nombre.slice(1)
        break
     case ' ':
        alert('El Nombre es un campo oblidatorio.')
        nombre = prompt('Ingresa el Nombre (por ejemplo: "Simon"').toLowerCase()
        mayNombre = nombre.charAt(0).toUpperCase() + nombre.slice(1)
        break
    }
  }
  return mayNombre
}


//PEDIR EL TELEFONO:
function validarTelefono() {
  telefono = prompt("Ingrese su teléfono Por ejemplo: 11 9999 9999")
  telefono = telefono.replace(/\s/g, "")
  let regex = /^11\d{8}$/
  while(!regex.test(telefono)){
    alert('Ingrese nuevamente su teléfono. Debe comenzar con 11')
    telefono = prompt("Su número de teléfono debe comenzar con 11 y tener 10 dígitos. Por ejemplo:  11 9999 9999").replace(/\s/g, "")
  }
  return telefono
}




function promoNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 6) + 1; //El mensaje dice 10 pero lo cambie a propósito a 6 para que tenga más posibildad de ganar

    let intentosTotales = 0;
    let adivinado = false;

    while(adivinado === false) {

        let intento = parseInt(prompt("Adivina un número del 1 al 10. \nTenes 3 intentos. \nY gana descuentos: \nEn 1 intento 20% de la matricula. \nEn 2 intentos 10% de la matricula. \nEn 3 intentos 5% de la matricula."));
        intentosTotales++;

        if(intento === numeroAleatorio & intentosTotales === 1 ) {
            alert("Felicitades, el numero era " + numeroAleatorio + ". Lo adivinaste en " + intentosTotales + " intento. \nObtuviste un 20% de descuento");
            adivinado = true;
        } else if(intento === numeroAleatorio & intentosTotales === 2 ) {
                alert("Felicitades, el numero era " + numeroAleatorio + ". Lo adivinaste en " + intentosTotales + " intentos. \nObtuviste un 10% de descuento");
                adivinado = true;
        } else if(intento === numeroAleatorio & intentosTotales === 3 ) {
                alert("Felicitades, el numero era " + numeroAleatorio + ". Lo adivinaste en " + intentosTotales + " intentos. \nObtuviste un 5% de descuento");
                adivinado = true;
        } else if (intento < numeroAleatorio) {
            alert("El número que tenés que adivinar es más alto. Intentá otra vez.");
        } else {
            alert("El número que tenés que adivinar es más bajo. Intentá otra vez.");
        }

        if (intentosTotales >= 3) {
            adivinado = true;
            alert("Ya usaste tus 3 intentos. Contactate con nosotros " + nombre + " " + apellido);
        }
    }
}





console.log(`el apellido es ${escribirApellido(apellido)}`)
console.log(`el nombre es ${escribirNombre(nombre)}`)
alert("Hola " + nombre.charAt(0).toUpperCase() + nombre.slice(1) + " " + apellido.charAt(0).toUpperCase() + apellido.slice(1));
console.log(`el telefono es ${validarTelefono(telefono)}`)
alert("Tenés 3 oportunidades para pagar menos en tu matricula!!");
promoNumero()





