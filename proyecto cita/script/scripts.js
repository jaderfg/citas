const citas = []
const formulario = document.getElementById('formulario');
const buscar = document.getElementById('btnBuscar');
const busqueda = document.getElementById('busqueda');
const BorrarBusqueda= document.getElementById('borrar')

const capturaDatos = () => {
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const sintomas = document.getElementById('sintomas').value;

    const registro = {
        nombre,
        fecha,
        hora,
        sintomas
    }

    citas.unshift(registro);
    localStorage.setItem('Citas', JSON.stringify(citas));
    getLocalStorage();
}

formulario.addEventListener('submit', e => {
    e.preventDefault();
    capturaDatos();
})


const getLocalStorage = () => {
    listarCita.innerHTML = " ";
    const citasLocalStorage = JSON.parse(localStorage.getItem('Citas'));
    console.log(citasLocalStorage);
    citasLocalStorage.map(cita => {
        const {
            nombre,
            fecha,
            hora,
            sintomas
        } = cita;
        listarCita.innerHTML += `
        <div class="card mt-1">
                <tablet class="table">
                    <tr>
                            <td>${nombre}</td>
                            <td>${fecha}</td>
                            <td>${hora}</td>
                            <td>${sintomas}</td>
                    </tr>
                </table>
        </div>
        `

    })

}

document.addEventListener('DOMContentLoaded', getLocalStorage)

buscar.addEventListener('click', e => {
    const input = document.getElementById('inputBuscar').value;
    const data = JSON.parse(localStorage.getItem('Citas'));
    const filtro = data.filter(cita => cita.nombre.toLowerCase() === input.toLowerCase() )
    busqueda.innerHTML= "";

    filtro.length === 0 ?
    busqueda.innerHTML +=  `<div style="color:white;">El nombre ${input} no existe</div>`
    :
    (
      filtro.map(cita => { 
          const {nombre,fecha,hora,sintomas} = cita;
          busqueda.innerHTML += `
                              <div style="color:white;">${nombre}</div>
                              <div style="color:white;">${fecha}</div>
                              <div style="color:white;">${hora}</div>
                              <div style="color:white;">${sintomas}
                              <button id="borrar">borrar</Button>
                              </div>
                              <br>             
          `   
       })
    )

    //le damos solcuion al primer punto planteado en las actividad
    document.getElementById('borrar').addEventListener('click', elem => {
        busqueda.innerHTML = " ";
    })

})

