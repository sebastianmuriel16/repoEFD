import { getEnfermedades } from "./firebase.js";

const contenedorPadre = document.querySelector('.contenedor-Padre')
async function  RenderTarjetas(){
    // esta funcion le asigna la estructura html a cada elemento traido desde firebase
    const queryEnfermedad = await getEnfermedades()
      const arr = []
      queryEnfermedad.forEach((Enfermedad) =>{ 
        const enfermedad = Enfermedad.data()
        const div = document.createElement('div')
        const divPhoto = document.createElement('div')
        const divSintomas = document.createElement('div')
        const divDefinicion = document.createElement('div')
        const divbutton = document.createElement('div')
        const h2 =document.createElement('h2')
        const img = document.createElement('img')
        const p = document.createElement('p')
        const a = document.createElement('button')

        
        divbutton.setAttribute('class', 'invisible')
        divSintomas.setAttribute('class', 'invisible')
        div.setAttribute('class', 'contenedor-Tarjeta')
        divPhoto.setAttribute('class', 'photo-Enfermedad')
        divDefinicion.setAttribute('class', 'invisible')
        a.setAttribute('class', 'button')
        img.setAttribute('src', enfermedad.img)
        const pText = document.createTextNode(enfermedad.definicion)
        const h2Text =document.createTextNode(enfermedad.nombre)
        const p2Text = document.createTextNode(enfermedad.sintomas)
        const aText = document.createTextNode('síntomas o consideraciones')

        a.appendChild(aText)
        p.appendChild(pText)
        h2.appendChild(h2Text)
        divPhoto.appendChild(img)
        divPhoto.appendChild(h2)
        divSintomas.appendChild(p2Text)
        divDefinicion.appendChild(p)
        divbutton.appendChild(a)
        div.appendChild(divPhoto)
        div.appendChild(divDefinicion)
        div.appendChild(divbutton)
        div.appendChild(divSintomas)

        a.onclick = () => mostrar(divSintomas)
        div.onclick = () => expandir(div)
        arr.push(div)
      })
      contenedorPadre.append(...arr)
  }

  function expandir(contenedor){
    //limpiar

    contenedorPadre.innerHTML =''
    contenedorPadre.setAttribute('class','contenedor-Tarjeta-Expandir')
    contenedor.setAttribute('class','tarjeta-expandir')
    contenedor.children[0].setAttribute('class', 'contedor-img-expandir')
    contenedor.children[1].setAttribute('class','definicion-expandir')
    contenedor.children[2].setAttribute('class', 'contenedor-btn')
    contenedorPadre.append(contenedor)
  }
  let flag = false

  function mostrar(contenedor){
    flag = !flag
    flag ? contenedor.style.display = 'block' : contenedor.style.display = 'none';
  }

  RenderTarjetas()