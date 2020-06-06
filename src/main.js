// import './css/estilos.css'
// import './css/letra.css'
 import './css/bootstrap.min.css'
import './sass/estilos.scss'
// import 'bootstrap'
import './index'
const personas = ['jose', 'juan', 'joe', 'jerry'];
let html = '';
personas.forEach(persona=>{
    html += `
        <li>${persona}</li>
    `;
    document.getElementById('persona').innerHTML= html
})