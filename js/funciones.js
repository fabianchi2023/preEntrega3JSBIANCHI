  const servicios = [
    {id:1, nombre:"Fútbol 5", tipo:"Sintético", precio: 15000, imagen:"https://muchosnegociosrentables.com/wp-content/uploads/2015/08/campo-de-f%C3%BAtbol-5-o-7.jpg"},
    {id:2, nombre:"Fútbol 5", tipo:"Cemento", precio: 10000, imagen:"https://pbs.twimg.com/media/EXdUYBHXgAIKsfu.png"},
    {id:3, nombre:"Fútbol 7", tipo:"Sintético", precio: 2000, imagen:"https://sportmaster.mx/wp-content/uploads/cancha-de-futbol-7-con-pasto-sintetico-1.jpg"},
    {id:4, nombre:"Fútbol 7", tipo:"Cemento", precio: 18000, imagen:"https://www.elheraldodejuarez.com.mx/local/w67djo-lacancha-de-futbol-rapido.jpg/ALTERNATES/LANDSCAPE_768/Lacancha%20de%20futbol%20r%C3%A1pido.jpg"},
    {id:5, nombre:"Paddle", tipo:"Cemento", precio: 10000, imagen: "https://media.eldiariosur.com/p/b1b84a58ac2a2004b5bcd39ac20122e3/adjuntos/291/imagenes/000/555/0000555210/1200x675/smart/whatsapp-image-2021-10-14-at-160743-1jpeg.jpeg"},
    {id:6, nombre:"Paddle", tipo:"Sintético", precio: 20000, imagen:"https://belgranotenis.com.ar/img/tr-008-gr.jpg"},
    {id:7, nombre: "Salón", tipo:"Privado", precio: 150000, imagen: "https://www.inolvidables15.com/assets/images/2087_18958fotoalgr.jpg"},
    {id:8, nombre: "Gimnasio", tipo:"Full", precio: 5000,imagen:"https://elbiguaneuquen.com.ar/wp-content/uploads/gim-web.jpg"},
    {id:9, nombre: "Gimnasio", tipo:"Máquinas", precio: 5000, imagen: "https://www.bodytone.eu/wp-content/uploads/2023/05/Tipos-maquinas-para-gimnasio-Bodytone.jpeg"}
  ]
  
const setServiciosLS = (servicios) => {
    localStorage.setItem("servicios", JSON.stringify(servicios));
}
  
const getServiciosLS = () => {
    return JSON.parse(localStorage.getItem("servicios"));
}
  
const setIdServicio = (id) => {
    localStorage.setItem("servicio", JSON.stringify(id))
}
  
const getIdServicioLS = () => {
    return JSON.parse(localStorage.getItem("servicio"));
}
 
const getServicioLS = () => {
    const servicios = getServiciosLS()
    const id = getIdServicioLS()
    const servicio = servicios.find(item => item.id === id)
  
    return servicio
}
  
