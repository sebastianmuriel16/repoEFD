import { getEnfermedades } from "./firebase.js";

const contenedorPadre = document.querySelector('.contenedor-Padre')
let flag = false

async function  RenderTarjetas(){
  contenedorPadre.innerHTML = ''
    // esta funcion le asigna la estructura html a cada elemento traido desde firebase
    const queryEnfermedad = await getEnfermedades()
      const arr = []
      queryEnfermedad.forEach((Enfermedad) =>{ 
        const enfermedad = Enfermedad.data()

        //contenedores
        const div = document.createElement('div')
        const divPhoto = document.createElement('div')
        const img = document.createElement('img')
        const h2nombre =document.createElement('h2')
        
      
        //asingacion de clases
        div.setAttribute('class','contenedorTarjetaMinimal')
        divPhoto.setAttribute('class','photoEnfermedadMinimal')

        //asignado informacion correspondientes de firebase
        img.setAttribute('src', enfermedad.img)
        const nombreText = document.createTextNode(enfermedad.nombre)

        divPhoto.appendChild(img)
        h2nombre.appendChild(nombreText)
        divPhoto.appendChild(h2nombre)
        div.appendChild(divPhoto)
        div.onclick = () =>  detalle(enfermedad)
        arr.push(div)
      })
      contenedorPadre.append(...arr)
  }



  function detalle(enfermedad){
    //limpiar
    contenedorPadre.innerHTML =''

    //elementos del detalle  de la tarjeta
    const contenedorDetalle = document.createElement('div')
    const imagenDetalle = document.createElement('div')
    const imgDetalle = document.createElement('img')
    const h2Detalle = document.createElement('h2')
    const definicionDetalle = document.createElement('div')
    const pdefinicion = document.createElement('p')
    const contenedorSintomas = document.createElement('div')
    const h2sintomas = document.createElement('h2')
    const psintomas = document.createElement('p')
    const divbutton = document.createElement('div')
    const btnSintomas = document.createElement('button')
    const volverDeinicion = document.createElement('a')
    const divBtnClose = document.createElement('div')
    const btnclose = document.createElement('button')
    //const i = document.createElement('i')



    //asignacion de clases
    contenedorPadre.setAttribute('class', 'contenedorTarjetaDetalle')
    contenedorDetalle.setAttribute('class' , 'tarjetaDetalle')
    imagenDetalle.setAttribute('class', 'imagenDetalle')
    definicionDetalle.setAttribute('class', 'definicionDetalle')
    divbutton.setAttribute('class', 'contenedorBtn')
    btnSintomas.setAttribute('class', 'button')
    contenedorSintomas.setAttribute('class', 'sintomas')
    divBtnClose.setAttribute('class', 'divBtnClose')
    btnclose.setAttribute('class', 'btnClose')
   // i.setAttribute('class', 'fa-solid fa-xmark fa-2xl')

    //informacion de firebase
    imgDetalle.setAttribute('src', enfermedad.img)
    h2Detalle.innerText = enfermedad.nombre
    h2sintomas.innerText = 'síntomas o consideraciones'
    const pDtext = document.createTextNode(enfermedad.definicion)
    btnSintomas.innerText = 'síntomas o consideraciones'
    const psintomasText = document.createTextNode(enfermedad.sintomas)
    volverDeinicion.innerText = 'Volver a definicion'
    btnclose.innerText = 'Volver '

    //btnclose.appendChild(i)
    psintomas.appendChild(psintomasText)
    psintomas.appendChild(volverDeinicion)
    contenedorSintomas.appendChild(h2sintomas)
    contenedorSintomas.appendChild(psintomas)
    divbutton.appendChild(btnSintomas)
    divBtnClose.appendChild(btnclose)
    pdefinicion.appendChild(pDtext)
    definicionDetalle.appendChild(pdefinicion)
    imagenDetalle.appendChild(imgDetalle)
    imagenDetalle.appendChild(h2Detalle)
    contenedorDetalle.appendChild(imagenDetalle)
    contenedorDetalle.appendChild(definicionDetalle)
    contenedorDetalle.appendChild(divbutton)
    contenedorDetalle.appendChild(contenedorSintomas)
    contenedorPadre.appendChild(contenedorDetalle)
    contenedorPadre.appendChild(divBtnClose)


    btnSintomas.onclick = () => mostrarSintomas()
    volverDeinicion.onclick = () => backDefinicion()
    btnclose.onclick = () => backInicio()
  }

  function backInicio() {
    // limpiar
      contenedorPadre.innerHTML = ''
      contenedorPadre.setAttribute('class','contenedor-Padre')
      RenderTarjetas()
  }


  function mostrarSintomas(){
    const sintomas = document.querySelector('.sintomas')
    const btnSintomas = document.querySelector('.button')
    const definicionDetalle= document.querySelector('.definicionDetalle')
    const btn = document.querySelector('.button')
    definicionDetalle.style.display = 'none';
    btnSintomas.style.display = 'none';
    sintomas.style.display = 'block';
  }

  function backDefinicion(){
    const sintomas = document.querySelector('.sintomas')
    const definicionDetalle= document.querySelector('.definicionDetalle')
    const btnSintomas = document.querySelector('.button')

    sintomas.style.display = 'none';
    definicionDetalle.style.display = 'block';
    btnSintomas.style.display = 'block';
  }




  RenderTarjetas()