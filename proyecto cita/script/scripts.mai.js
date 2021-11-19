import Personas from './Personas.js'
const baseDatos= [];

const enviar_datos= document.getElementById('enviarDatos1').addEventListener('click',()=>{
    console.log("listo perro")
    
    
    
    let nombre = document.querySelector("input[id='name']").value;
    let correo = document.querySelector("input[id='mail']").value;
    let contrasena = document.querySelector("input[id='contrasena']").value;
    //let fechaN = document.querySelector("input[id='fecha']").value;

    const persona = new Personas(nombre,correo,contrasena)

    baseDatos.push(persona)
    console.log(baseDatos)
    localStorage.setItem('BaseDatos', JSON.stringify(baseDatos));
})
const enviar = document.getElementById('enviar');
const registrarce = document.getElementById('Registrarse');
const contenidoTotal = document.getElementById('registroID');


const Login = () => {
  registrarce.addEventListener('click', () => {
    contenidoTotal.innerHTML = '';

    import Personas from './Personas.js'
    const baseDatos= [];
    class Personas{
        constructor(nombre,correo,contrasena){
            this.nombre = nombre;
            this.correo = correo;
            this.contrasena = contrasena;
           // this.fechaN = fechaN;
        }
    }
    
    export default Personas;