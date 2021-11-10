document.addEventListener('DOMContentLoaded', e => { fetchData() });


function saludar() { alert("holaaa"); }








const fetchData = async () => {
    const res = await fetch('data.json');
    const data = await res.json()

    pintarProductos(data);
    saludar()
}


const contenedorElementos = document.querySelector("#contenedorElementos")

const pintarProductos = (data) => {


    const template = document.querySelector('#template-producto').content;
    const fragment = document.createDocumentFragment()


    data.forEach(producto => {


        template.querySelector("img").setAttribute("src", producto.imgUrl)
        template.querySelector("#precioUnidad").textContent = "$" + producto.precioUnidad;

        if (producto.envace == "lata") {

            template.querySelector("p").textContent = "Pack: $" + producto.precioX6;
            //  template.querySelector("p").dataset.id = producto.id
        } if (producto.envace == "porron") {
            console.log(producto.precioX3);
            template.querySelector("p").textContent = "Por 3 ud: $" + producto.precioX3;


        }


        if (producto.tipo == "gaseosa") {

            template.querySelector("p").textContent = "Pack 6 ud: $" + producto.precioX6;



        }

        template.querySelector("h5").textContent = producto.title;

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });

    contenedorElementos.appendChild(fragment);

}