import express from 'express'; 
import router from './routes/index.js'; 

const app = express();

//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

//Definir la carpeta pública
app.use(express.static('public'));//Para tener acceso a los estilos y las imagenes

//Agregar Router
app.use('/', router);

app.listen( port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})