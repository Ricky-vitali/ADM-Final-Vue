/* ---Router---- */



Vue.component('inicio-component', {

    template: `
    <div>
    <header>

        <div id="textoHeader">

            <h2>Aprende a Cocinar !</h2>
            <p>Cualquiera puede cocinar, comprobalo con alguna receta</p>

           <router-link to="/receta">Recetas</router-link>


        </div>



    </header>

    <section>
        <div class="popular">
            <h2>Recetas Populares</h2>

            <p>Envianos un video con tu receta por Instagram y aparece entre los mas populares !</p>

                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="./imagenes/sopaDeMiso.jpg" alt="Foto de sopa de miso">
                <div class="card-body">
                    <h5 class="card-title">Sopa de Miso</h5>
                    <p class="card-text">De: Fujikawa Kao</p>
                    
                </div>
        </div>

        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="./imagenes/burgerNegra.png" alt="Foto de hamburguesa negra">
        <div class="card-body">
            <h5 class="card-title">Hamburguesa Negra</h5>
            <p class="card-text">De: Spencer Millsaps</p>
            
        </div>
        </div>

        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="./imagenes/pizza3.png" alt="Foto de pizza">
        <div class="card-body">
            <h5 class="card-title">Pizza Secreta</h5>
            <p class="card-text">De: Persona Desconocida</p>
           
        </div>
        </div>




        </div>


    </section>

</div>
    
    `,
    data() {
        return {
            imagenesArray: [
                "headerBurger1.jpg",
                "headerBurger2.jpg",
                "headerBurger3.jpg"
            ]
        }
    },

    methods: {

        mySlider() {

            const header = document.getElementsByTagName('header')[0];

            sliderIndex = 0;
            setInterval(() => {

                header.style.backgroundImage = "url(./imagenes/" + this.imagenesArray[sliderIndex] + ")";
                sliderIndex++;

                header.animate(
                    [{
                            opacity: '0'
                        },
                        {
                            opacity: '1'
                        }

                    ], {
                        duration: 2000,
                        iterations: 1
                    }).finished.then(() => {

                })


                if (sliderIndex == this.imagenesArray.length) {
                    sliderIndex = 0;
                }

                console.log(sliderIndex)
            }, 5000);



        }


    },

    mounted() {
        this.mySlider()
    }


});



Vue.component('receta-component', {

    template: `
    <section>

    <h2>Recetas</h2>

        <div class="card defaultRecetasCard" v-for="(item, index) of recetasDefault">
        <div class="card-body">
        <h5 class="card-title">{{item.titulo}}</h5>
        <p>Ingredientes: {{item.ingredientes}}</p>
        <p class="card-text">{{item.receta}}</p>
        <div>
        <button :class="'btn ' + (item.estatus ? 'btn-success' : 'btn-warning') " @click="cambiarEstatus(index)">{{item.estatus ? 'Realizado' : 'Pendiente'}}</button>
    </div>
        </div>
    </div>




  </section>
    `,

    data() {
        return {
            recetasDefault: [
                {
                    titulo:"Sopa de Miso",
                    ingredientes:"20 g de alga kombu seca, 1 cucharada sopera de katsuobushi (copos de atún o bonito secos), 1 l de agua, 1 cucharada de miso blanco, alga wakame, salsa de soja, 1 cebolla, 50 g de tofu blando.",
                    receta:"Hidratamos una hora el alga kombu en un litro de agua. Después, ponemos ese mismo cazo con el alga y el agua a calentar y apagamos el fuego en cuanto empiece a hervir. Sacamos el alga kombu y añadimos el kasuobushi y dejamos que se infusione 10-15 minutos. Sabremos que está listo cuando los copos de bonito deshidratados se hayan ido al fondo de la cacerola. Colamos y reservamos ese caldo. Disolvemos la pasta de miso en un vaso de nuestro caldo dashi, mientras ponemos el resto del caldo a cocer. Cuando esté disuelto lo integramos con el resto del caldo al que añadiremos el alga wakame y el tofu cortado en pequeños taquitos dejando cocer durante 2 minutos. Servimos la sopa de miso acompañada de cebolla en juliana.",
                    estatus:false
                },
                {
                    titulo:"Salmón al Horno",
                    ingredientes:"1 kg de lomo de salmón fresco limpio, 2 patatas peladas, 1 pimiento verde italiano, 2 cebolletas, 2 tomates, vino blanco, aceite de oliva virgen extra, sal y pimienta negra.",
                    receta:"Cortamos las patatas en rodajas de 5 mm de grosor, el pimiento y la cebolleta en juliana y el tomate en rodajas. Distribuimos todo sobre la bandeja del horno, sazonamos y añadimos un poco de aceite, agua y vino blanco. Horneamos a 190º 20 minutos o hasta que las patatas estén tomando color. Espolvoreamos bien con pimienta y colocamos el lomo de salmón sazonado sobre la cama de hortalizas. Añadimos unos aritos del verde de la cebolleta. Dejamos que el salmón se cocine unos 10 minutos, con cuidado de no pasarnos con el tiempo. Servimos directamente en la misma fuente de horno en la que lo hemos cocinado. Quedará más vistoso si le damos un golpe de un minuto de gratinado final.",
                    estatus:false
                },
                {
                    titulo:"Sándwich Club",
                    ingredientes:"4 rebanadas de pan de molde, 3 lonchas de bacon, 3 lonchas de jamón de York, 1 loncha de queso emmental, 1 loncha de queso para fundir o queso crema, 1 filete de pollo, 1 cucharada de mayonesa, mantequilla, 1 tomate, lechuga.",
                    receta:"Ponemos las lonchas de jamón de York entre las dos variedades de queso y éstas entre dos rebanadas de pan de molde untadas ligeramente con mantequilla. Lo haremos a fuego muy lento en una sartén para que se dore y los quesos se fundan. Tostamos el bacon y cocinamos los trozos de pechuga de pollo en la plancha. Con estos dos ingredientes, elaboramos un segundo sándwich que también doramos en la plancha untando ligeramente con mantequilla las rebanadas. Untamos la parte superior de uno de ellos con mayonesa, lo cubrimos con trozos de lechuga y rebanadas de tomate y lo tapamos con el otro sándwich. Ayudados de unas brochetas para que no se nos desarme, cortamos el sándwich en 4 porciones.",
                    estatus:false
                },
                {
                    titulo:"Ratatouille",
                    ingredientes:"Berenjena 500g, Calabacín 375g, Aceite de oliva virgen extra 125ml, Cebolla 2, Pimiento rojo 1, Diente de ajo 5, Tomate 750g, Perejil fresco picado al gusto, Tomillo fresco al gusto, Albahaca al gusto, Sal, Pimienta negra molida",
                    receta:"Calentamos la nata junto al azúcar hasta que hierva. En un cuenco troceamos el chocolate y vertemos la nata caliente por encima mientras removemos con unas varillas para que el chocolate se deshaga completamente. Agregamos la mantequilla y el cava mezclamos totalmente. Vertemos la mezcla en una bandeja, echamos la frambuesa, removemos y refrigeramos hasta que la masa se haya endurecido (cuanta más delgada sea la superficie antes se enfría). Una vez tengamos la masa cuajada, hacemos bolitas de igual tamaño con una cuchara y damos forma de bolita perfecta con las manos, teniendo cuidado de no dar mucho calor a la masa. Por último rebozamos cada trufa en lo que prefiramos: cacao en polvo, virutas, bolitas de anís, etc. Refrigeramos hasta el momento de tomar en un recipiente hermético o túper para que el chocolate no se humedezca.",
                    estatus:false
                },
                {
                    titulo:"Trufas de cava y frambuesa",
                    ingredientes:"Chocolate negro 70% de cacao 100g, Nata líquida 80ml, Cava 30ml, Azúcar glasé 25g, Mantequilla 5g, Frambuesas deshidratadas 25g, Cacao puro en polvo",
                    receta:"Calentamos la nata junto al azúcar hasta que hierva. En un cuenco troceamos el chocolate y vertemos la nata caliente por encima mientras removemos con unas varillas para que el chocolate se deshaga completamente. Agregamos la mantequilla y el cava mezclamos totalmente. Vertemos la mezcla en una bandeja, echamos la frambuesa, removemos y refrigeramos hasta que la masa se haya endurecido (cuanta más delgada sea la superficie antes se enfría). Una vez tengamos la masa cuajada, hacemos bolitas de igual tamaño con una cuchara y damos forma de bolita perfecta con las manos, teniendo cuidado de no dar mucho calor a la masa. Por último rebozamos cada trufa en lo que prefiramos: cacao en polvo, virutas, bolitas de anís, etc. Refrigeramos hasta el momento de tomar en un recipiente hermético o túper para que el chocolate no se humedezca.",
                    estatus:false
                }
        ]
        }

    },

    methods:{

        cambiarEstatus(index){
            this.recetasDefault[index].estatus =  !this.recetasDefault[index].estatus;

            localStorage.setItem('recetasRealizadas-vue', JSON.stringify(this.recetasDefault))
           
            console.log(this.recetasDefault)
            

            
        },

   

        mounted: function () {
            let datos = JSON.parse(localStorage.getItem('recetasRealizadas-vue'));
            if (datos !== null) {
             this.recetasDefault = datos;
             
            } 
            console.log(datos)
        }
    }
    


});

Vue.component('consejo-component', {

    template: `
    <section>
   

        <h2>Consejos</h2>
   
        <div class="card cardConsejo">
            <div class="card-header">
            #1 Consejo
            </div>
            <div class="card-body">
                <h5 class="card-title">Higiene</h5>
                <p class="card-text">No te olvides de higienizar tus manos. Todo lo que hayas tocado despues terminara en tu boca o en la de cualquiera que coma tu comida.</p>
              
            </div>
        </div>
        <div class="card cardConsejo">
            <div class="card-header">
            #2 Consejo
            </div>
            <div class="card-body">
                <h5 class="card-title">Aprende con nuestras recetas</h5>
                <p class="card-text">Intenta hacer nuestras recetas, esto te ayudará a mejorar tus habilidades. Recuerda que puedes ir marcando cuales platos ya has realizado para ir haciendo siempre algo nuevo.</p>
             
            </div>
        </div>
        <div class="card cardConsejo">
            <div class="card-header">
            #3 Consejo
            </div>
            <div class="card-body">
                <h5 class="card-title">Crea tus recetas</h5>
                <p class="card-text">¿Hay algún plato que sabes hacer y no está en la lista o simplemente quieres anotarlo ? Puedes crear tus propias recetas y verlas cuando quieras. Para hacerlo ve a la sección "Mis Recetas"</p>
              
            </div>
        </div>
  



    </section>


    
    `


});

Vue.component('resenas-component', {


    template: `
    <section>
        <h2>Mis Recetas</h2>
        
        <div class="formContainer">


            <form v-if="editing" action="" @submit.prevent="editarreceta">
            <p>Editar Receta</p>
                <label for="name">Nombre </label>
                <input type="text" v-model="tituloEditado" v-on:keyup.enter="editarreceta">

                <label for="name">Descripcion </label>
                <input type="text" v-model="recetaEditado" v-on:keyup.enter="editarreceta">

                <div>
                    <button @click="editarreceta" class="editButton">Editar</button>
                    <button @click="editing = false; this.recetaEditado = ''; this.pIndexToEdit = null" class="deleteButton">Cancelar</button>
                </div>

            </form>

            <form v-else action="" @submit.prevent="agregarreceta">
            <p>Crear Receta</p>
                <label for="name">Titulo </label><input type="text" name="name" id="name" v-model="nuevoTitulo">
                <label for="recipe">Receta </label><textarea type="text" name="name" id="name" v-model="nuevoreceta"></textarea>
                <input type="submit" value="Crear">
                
            </form>
        </div>

        <h3 class="recetasTitulo">Recetas Creadas</h3>

        <div v-for="(item, index) of recetas">

            <div class="recetaCard">
                
                    <ul>
                        <li>{{item.titulo}}</li>
                        <li>{{item.receta}}</li>
                    </ul>
            


                <div class="recetaButtons">
                    <button @click="prepararEditar(index,item)" class="editButton">Editar</button>
                    <button @click="eliminarreceta(index)" class="deleteButton">Borrar</button>
                </div>
            </div>
        </div>
    </section>
    `,

    data() {
        return {
            recetas: [],
            nuevoTitulo: "",
            nuevoreceta: "",

            tituloEditado: "",
            recetaEditado: "",
            pIndexToEdit: null,
            editing: false
        }
    },

    methods: {
        agregarreceta() {

            console.log(this.nuevoTitulo)
            this.recetas.push({
                titulo: this.nuevoTitulo,
                receta: this.nuevoreceta

            })
            this.nuevoTitulo = "";
            this.nuevoreceta = "";
            localStorage.setItem('recetas-vue', JSON.stringify(this.recetas))

            console.log("Creado")
        },


        editarreceta() {

            this.recetas.splice(this.pIndexToEdit, 1, {
                titulo: this.tituloEditado,
                receta: this.recetaEditado
            })
            localStorage.setItem('recetas-vue', JSON.stringify(this.recetas));
            this.editing = false;

        },

        prepararEditar: function (index, item) {
            this.editing = true;
            this.tituloEditado = item.titulo;
            this.recetaEditado = item.receta;
            this.pIndexToEdit = index;

        },




        eliminarreceta: function (index) {
            this.recetas.splice(index, 1);

            localStorage.setItem('recetas-vue', JSON.stringify(this.recetas))


            console.log("Eliminado", index)
        },






    },

    created: function () {
        let datos = JSON.parse(localStorage.getItem('recetas-vue'));
        if (datos === null) {
            this.recetas = [];
        } else {
            this.recetas = datos;
        }
    }


})






const inicio = {
    template: `<inicio-component/>`,
    name: 'Inicio'
}
const receta = {
    template: `<receta-component/>`,
    name: 'receta'
}
const consejo = {
    template: `<consejo-component/>`,
    name: 'consejo'
}
const resenas = {
    template: `<resenas-component/>`,
    name: 'Resena'
}

const routes = [{
        path: '/',
        component: inicio
    },
    {
        path: '/receta',
        component: receta
    },
    {
        path: '/consejo',
        component: consejo
    },
    {
        path: '/resenas',
        component: resenas
    },
    {
        path: '*',
        component: inicio
    },
]

const router = new VueRouter({
    routes
})

const app = new Vue({

    router,


}).$mount('#app')