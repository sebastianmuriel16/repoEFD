import { getEnfermedades } from "./firebase.js";

const contenedorPadre = document.querySelector('.contenedor-Padre')


async function  RenderTarjetas(){
  contenedorPadre.innerHTML = ''
    // esta funcion le asigna la estructura html a cada elemento traido desde firebase
    const queryEnfermedad = await getEnfermedades()
      const arr = []
      queryEnfermedad.forEach((Enfermedad) =>{ 
        const enfermedad = Enfermedad.data()
        // //creando los elementos html necesarios
        // const enfermedad = Enfermedad.data()
        // const div = document.createElement('div')
        // const divPhoto = document.createElement('div')
        // const divSintomas = document.createElement('div')
        // const divDefinicion = document.createElement('div')
        // const divbutton = document.createElement('div')
        // const contenedorPhoto = document.createElement('div')
        // const h2 =document.createElement('h2')
        // const h2stms =document.createElement('h2')
        // const img = document.createElement('img')
        // const p = document.createElement('p')
        // const btn = document.createElement('button')
        // const btnclose = document.createElement('button')
        // const volverDeinicion = document.createElement('a')
        // const i = document.createElement('i')

        // //asignado las clases correspondientes
        // i.setAttribute('class', 'fa-solid fa-xmark fa-2xl')
        // contenedorPhoto.setAttribute('class', '.contenedorPhoto')
        // divbutton.setAttribute('class', 'invisible')
        // divSintomas.setAttribute('class', 'invisible')
        // div.setAttribute('class', 'contenedor-Tarjeta')
        // divPhoto.setAttribute('class', 'photo-Enfermedad')
        // divDefinicion.setAttribute('class', 'invisible')
        // btn.setAttribute('class', 'button')
        // btnclose.setAttribute('class', 'btnClose')
        // img.setAttribute('src', enfermedad.img)
        // const pText = document.createTextNode(enfermedad.definicion)
        // const h2Text =document.createTextNode(enfermedad.nombre)
        // const p2Text = document.createTextNode(enfermedad.sintomas)
        // const btnText = document.createTextNode('síntomas o consideraciones')

        // h2stms.innerText = 'síntomas o consideraciones'
        // volverDeinicion.innerText = 'Volver a definicion'


        // btn.appendChild(btnText)
        // btnclose.appendChild(i)
        // p.appendChild(pText)
        // h2.appendChild(h2Text)
        // divPhoto.appendChild(btnclose)
        // divPhoto.appendChild(img)
        // divPhoto.appendChild(h2)
        // divSintomas.appendChild(h2stms)
        // divSintomas.appendChild(p2Text)
        // divSintomas.appendChild(volverDeinicion)
        // divDefinicion.appendChild(p)
        // divbutton.appendChild(btn)
        // div.appendChild(divPhoto)
        // div.appendChild(divDefinicion)
        // div.appendChild(divbutton)
        // div.appendChild(divSintomas)

        
        // volverDeinicion.onclick = () => backDefinicion(divSintomas)
        // btnclose.onclick =() => backInicio()
        // btn.onclick = () => mostrar(divSintomas)
        // div.onclick = () => expandir(div)
        // arr.push(div)

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
        div.onclick = () =>  expandir(enfermedad)
        arr.push(div)
      })
      contenedorPadre.append(...arr)
  }

  function expandir(enfermedad){
    //limpiar
    contenedorPadre.innerHTML =''

    //elementos del detalle  de la tarjeta
    const contenedorDetalle = document.createElement('div')
    const imagenDetalle = document.createElement('div')
    const imgDetalle = document.createElement('img')
    const h2Detalle = document.createElement('h2')
    const definicionDetalle = document.createElement('div')

    //asignacion de clases
    contenedorPadre.setAttribute('class', 'contenedorTarjetaDetalle')
    contenedorDetalle.setAttribute('class' , 'tarjetaDetalle')
    imagenDetalle.setAttribute('class', 'imagenDetalle')

    //informacion de firebase
    imgDetalle.setAttribute('src', enfermedad.img)
    h2Detalle.innerText = enfermedad.nombre

    imagenDetalle.appendChild(imgDetalle)
    imagenDetalle.appendChild(h2Detalle)
    contenedorDetalle.appendChild(imagenDetalle)
    contenedorPadre.appendChild(contenedorDetalle)
    console.log('hola')
  }

  function backInicio() {
    // limpiar
      contenedorPadre.innerHTML = ''
      contenedorPadre.setAttribute('class','contenedor-Padre')
      RenderTarjetas()
    
  }



  let flag = false

  function mostrar(contenedor){
    const divDefinicion = document.querySelector('.definicion-expandir')
    const btn = document.querySelector('.button')
    divDefinicion.style.display = 'none';
    flag = !flag
    if(flag){
      contenedor.style.display = 'block'
      btn.style.display = 'none'
    }else{
      contenedor.style.display = 'none'
    }
  }

  function backDefinicion(contenedor){
    const def = document.querySelector('.definicion-expandir')
    const btn = document.querySelector('.button')
    
    contenedor.style.display = 'none'
    def.style.display = 'block'
    btn.style.display = 'block'
    flag =!flag
  }




  RenderTarjetas()