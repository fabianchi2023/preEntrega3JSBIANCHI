const servicios = [
    {id:1, nombre:"Fútbol 5", tipo:"Sintético", precio: 15000, imagen:"https://muchosnegociosrentables.com/wp-content/uploads/2015/08/campo-de-f%C3%BAtbol-5-o-7.jpg", descripcion: "Alquiler por hora de cancha de fútbol 5 con pasto sintético, techada y con iluminación de ultima generación"},
    {id:2, nombre:"Fútbol 5", tipo:"Cemento", precio: 10000, imagen:"https://pbs.twimg.com/media/EXdUYBHXgAIKsfu.png", descripcion: "Alquiler por hora de cancha de fútbol 5 de superficie de cemento, techada y con iluminación de ultima generación"},
    {id:3, nombre:"Fútbol 7", tipo:"Sintético", precio: 2000, imagen:"https://sportmaster.mx/wp-content/uploads/cancha-de-futbol-7-con-pasto-sintetico-1.jpg", descripcion: "Alquiler por hora de cancha de fútbol 7 con pasto sintético, techada y con iluminación de ultima generación"},
    {id:4, nombre:"Fútbol 7", tipo:"Cemento", precio: 18000, imagen:"https://www.elheraldodejuarez.com.mx/local/w67djo-lacancha-de-futbol-rapido.jpg/ALTERNATES/LANDSCAPE_768/Lacancha%20de%20futbol%20r%C3%A1pido.jpg", descripcion: "Alquiler por hora de cancha de fútbol 7 de superficie de cemento, techada y con iluminación de ultima generación"},
    {id:5, nombre:"Paddle", tipo:"Cemento", precio: 10000, imagen: "https://media.eldiariosur.com/p/b1b84a58ac2a2004b5bcd39ac20122e3/adjuntos/291/imagenes/000/555/0000555210/1200x675/smart/whatsapp-image-2021-10-14-at-160743-1jpeg.jpeg", descripcion: "Alquiler por hora de cancha de paddle con superficie de cemento e iluminación"},
    {id:6, nombre:"Paddle", tipo:"Sintético", precio: 20000, imagen:"https://belgranotenis.com.ar/img/tr-008-gr.jpg", descripcion: "Alquiler por hora de cancha de paddle con superficie de cesped sintético e iluminación"},
    {id:7, nombre: "Salón", tipo:"Privado", precio: 150000, imagen: "https://www.inolvidables15.com/assets/images/2087_18958fotoalgr.jpg", descripcion: "Salón de usos multiples para cualquier tipo de evento: casamientos, 15 años, egresados y cualquier evento que quieras!. Contamos con servicio de mesas, vajillas y catering full. Consultanos por los gastos correspondientes a estos servicios extras al alquiler del salón"},
    {id:8, nombre: "Gimnasio", tipo:"Full", precio: 5000,imagen:"https://elbiguaneuquen.com.ar/wp-content/uploads/gim-web.jpg", descripcion: "Cuota mensual del gimnasio que contiene ademas clases de GAP, entrenamiento personalizado, rutinas y alimentación"},
    {id:9, nombre: "Gimnasio", tipo:"Máquinas", precio: 5000, imagen: "https://www.bodytone.eu/wp-content/uploads/2023/05/Tipos-maquinas-para-gimnasio-Bodytone.jpeg", descripcion: "Cuota mensual del gimnasio que solo permite el uso de las maquinas del mismo. No contiene todos los beneficios que el gimnasio del tipo 'full'"}
  ]
  
const setServiciosLS = (servicios) => {
    localStorage.setItem("servicios", JSON.stringify(servicios))
}
  
const getServiciosLS = () => {
    return JSON.parse(localStorage.getItem("servicios"))
}

setServiciosLS (servicios)

const setIdServicio = (id) => {
    localStorage.setItem("servicio", JSON.stringify(id))
}
  
const getIdServicioLS = () => {
    return JSON.parse(localStorage.getItem("servicio"))
}
 
const getServicioLS = () => {
    const servicios = getServiciosLS()
    const id = getIdServicioLS()
    const servicio = servicios.find(item => item.id === id)
  
    return servicio
}
  
