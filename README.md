# Proyecto CRUD con Node.js y Cliente Web
RAYMUNDO SALAS
## Descripción

Este proyecto consiste en el desarrollo de un sistema CRUD (Create, Read, Update, Delete) dividido en dos partes:

* Servicios (Backend): API REST desarrollada con Node.js y Express.
* Cliente (Frontend): Interfaz web que consume la API mediante fetch.

El sistema permite gestionar elementos (productos) realizando operaciones básicas de creación, consulta, actualización y eliminación.

---

## Tecnologías utilizadas

### Backend

* Node.js
* Express
* CORS
* Body-parser
* fs-extra

### Frontend

* HTML5
* CSS3
* JavaScript (Fetch API)

---

## Estructura del proyecto

### Servicios (Backend)

```
servicios/
│── node_modules/
│── package.json
│── server.js
│── routes/
│     └── items.js
│── data/
│     └── data.json
```

### Cliente (Frontend)

```
cliente/
│── index.html
│── style.css
│── app.js
```

---

## Instalación y ejecución

### 1. Clonar o descargar el proyecto

---

### 2. Ejecutar el backend

Abrir terminal en la carpeta servicios:

```bash
npm install
npm start
```

El servidor se ejecutará en:

```
http://localhost:3000
```

---

### 3. Ejecutar el frontend

Abrir el archivo:

```
cliente/index.html
```

en cualquier navegador web.

---

## Funcionalidades (CRUD)

El sistema permite:

* Crear un nuevo producto
* Obtener lista de productos
* Consultar un producto por ID
* Actualizar un producto
* Eliminar un producto

---

## Endpoints de la API

| Método | Endpoint       | Descripción                 |
| ------ | -------------- | --------------------------- |
| GET    | /api/items     | Obtener todos los elementos |
| GET    | /api/items/:id | Obtener un elemento         |
| POST   | /api/items     | Crear elemento              |
| PUT    | /api/items/:id | Actualizar elemento         |
| DELETE | /api/items/:id | Eliminar elemento           |

---

## Compresión de archivos

Para la entrega:

1. Comprimir la carpeta servicios como:

```
servicios.zip
```

2. Comprimir la carpeta cliente como:

```
cliente.zip
```

---

## Pruebas

Los servicios pueden probarse utilizando herramientas como navegador web, Postman o Thunder Client.

---

## Notas

* El almacenamiento de datos se realiza en un archivo JSON local.
* No se utiliza base de datos externa.
* El sistema está diseñado con fines educativos.

---

## Conclusiones

Durante el desarrollo de este proyecto pude comprender de manera práctica cómo funciona la comunicación entre un cliente y un servidor mediante una API REST. Implementar el CRUD me permitió reforzar mis conocimientos sobre la manipulación de datos, así como el uso de métodos HTTP como GET, POST, PUT y DELETE.

También aprendí la importancia de estructurar correctamente un proyecto, separando las responsabilidades entre backend y frontend. El uso de Node.js y Express facilitó la creación de servicios, mientras que el uso de JavaScript en el cliente permitió consumir la API de forma sencilla mediante fetch.

Considero que este proyecto es una base sólida para el desarrollo de aplicaciones web más complejas, ya que integra conceptos fundamentales como servicios web, manejo de datos y diseño de interfaces básicas.

---

## Referencias 

Fielding, R. T. (2000). *Architectural styles and the design of network-based software architectures* (Doctoral dissertation, University of California, Irvine).

Node.js Foundation. (2023). *Node.js documentation*. [https://nodejs.org/](https://nodejs.org/)

Express.js. (2023). *Express web framework documentation*. [https://expressjs.com/](https://expressjs.com/)

Mozilla Developer Network. (2023). *Fetch API*. [https://developer.mozilla.org/es/docs/Web/API/Fetch_API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

Cors. (2023). *CORS npm package documentation*. [https://www.npmjs.com/package/cors](https://www.npmjs.com/package/cors)

fs-extra. (2023). *fs-extra documentation*. [https://www.npmjs.com/package/fs-extra](https://www.npmjs.com/package/fs-extra)

