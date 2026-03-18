const API = "http://localhost:3000/api/items";

async function obtener() {
    const res = await fetch(API);
    const data = await res.json();

    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    data.forEach(item => {
        lista.innerHTML += `
        <li>
            ${item.nombre}
            <button onclick="eliminar(${item.id})">Eliminar</button>
        </li>`;
    });
}

async function agregar() {
    const nombre = document.getElementById("nombre").value;

    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre })
    });

    document.getElementById("nombre").value = "";
    obtener();
}

async function eliminar(id) {
    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    obtener();
}

obtener();
