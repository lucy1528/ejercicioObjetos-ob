let objeto={
    nombre:"Lucia",
    apellido:"Cerpa",
    edad:37,
    estatura:1.67,
    eresDesarrollardor:true
}

let { edad } = objeto

let objetoAmigos=[{
    nombre:"Martha",
    apellido:"Rodriguez",
    edad:42,
    estatura:1.65,
    eresDesarrollardor:false
},
{
    nombre:"Isa",
    apellido:"Leon",
    edad:32,
    estatura:1.53,
    eresDesarrollardor:false
}]

let listaMasAmigos=[objeto, ...objetoAmigos]

let objetosOrdenados = listaMasAmigos.sort((a,b) => b.edad - a.edad)

