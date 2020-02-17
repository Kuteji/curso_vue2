
// crear un componente
Vue.component('articulos',{
    template: `
       <div class="componente-pelis">
            <h1>Componente {{ titulo }} </h1>

            <h1>Listado</h1>

            <ol v-if="posts">
                <li v-for="(post, index) in posts">
                    {{ post.title }}     
                </li>
            </ol> 
            <span v-else>Cargando Listado por ajax</span>
       </div>
    `,
    mounted(){

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( (respuesta) => {
                this.posts = respuesta.data;
            });
    },
    data(){
        return {
            titulo: 'Articulos',
            posts: null,
        }
    }
});

Vue.component('frutas',{
    template: `
        <h1>Componente Frutas</h1>
    `
});

// creamos la intancia de vue
Vue.filter('mayusculas', value => value.toUpperCase());
new Vue({ // Instancia vue es el intermediario entre el dom y el JS
    el: 'main', // elenento de la instancia
    mounted(){ // es equivalent al useEffect de react hooks o al componentDidMount del react normal y o el onil de angular 2 es decir ejecutara las instrucciones al cargar el componente
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( (respuesta) => {
                this.posts = respuesta.data;
            });
    },
    data: {
        posts:null,
        texto: 'Hola Mundo desde vue 2',
        nombre: 'Eduardo',
        apellido: 'Talavera',
        nota: 5,
        peliculas: ['Batman','Superman','La verdad duele','Mercenarios','Spiderman 3'],
        frutas: [
            {nombre: 'Manzana', temporada: 'Invierno', precio: 'Bajo'},
            {nombre: 'Naranja', temporada: 'Otoño', precio: 'Medio'},
            {nombre: 'Cereza', temporada: 'Primavera', precio: 'Alto'},
            {nombre: 'Sandia', temporada: 'Verano', precio: 'Medio'},
            {nombre: 'Mango', temporada: 'Verano', precio: 'Alto'}
        ],
        productos:[
            {nombre: 'Lenovo Thinkpad', categoria: 'Electronica', precio: '20000'},
            {nombre: 'Lenovo Idepad', categoria: 'Electronica', precio: '19000'},
            {nombre: 'Xiaomi Mi Note', categoria: 'Electronica', precio: '11000'},
            {nombre: 'Rolex', categoria: 'Joyeria', precio: '200000'},
            {nombre: 'Anillo de Bodas 18k', categoria: 'Joyeria', precio: '60000'},
            {nombre: 'Tenis jordan', categoria: 'Calzado', precio: '2000'},
            {nombre: 'Parrilla Pro', categoria: 'Hogar', precio: '5000'}
        ],
        superfruta: {nombre: 'Mandarina', temporada: 'Verano', precio: 'Medio'},
        peliculaNueva: null,
        busqueda: null,
        busquedaCategoria: null,
        confirmado: null
    },
    methods: {
        crearPelicula() {
            // alert(this.peliculaNueva)
        //    this.peliculas.unShift(this.peliculaNueva);
           this.peliculas.push(this.peliculaNueva);  
           this.peliculaNueva = null;
        },
        borrarPelicula(indice) {
           this.peliculas.splice(indice,1);
        },
        marcar(index){
            this.confirmado = index;
        }
    },
    // Propiedades computadas
    computed: {
        nombreYapellidos() {
            let date = new Date();
            let year = date.getFullYear();
            return `${this.nombre}  ${this.apellido} - ${this.nota} ${year} ${date.getDate()}`;
        },
        peliculasOrdenadas(){
            return this.peliculas.sort();
        },
        buscarFruta(){
            return this.frutas.filter( fruta => fruta.nombre.includes(this.busqueda));
        }, 
        buscarCategoria(){
            return this.productos.filter( producto => producto.categoria.includes(this.busquedaCategoria));
        } 
    }
});

// Creando nueva instancia de vue
const vue2 = new Vue({
    el: '#app',
    data: {
        texto: 'Segunda instancia Vue'
    }
});

const vue3 = new Vue({
    el: '#app2',
    data: {
        texto: 'Tercera instancia de Vue'
    }
});