# Repositorio de Proyecto FBI & CRUD

Este repositorio contiene dos partes distintas: una aplicación frontend desarrollada en React que realiza consultas a la API del FBI y muestra los resultados, y una API backend creada con Spring que proporciona operaciones CRUD para una base de datos SQL.

## Frontend

La parte de frontend se encarga de interactuar con la API del FBI y visualizar los datos obtenidos en una interfaz de usuario amigable.

### Instalación

1. Asegúrese de tener Node.js instalado en su sistema.
2. Clone este repositorio: `git clone https://github.com/Chikiritaviri19/PruebaTecnicaSiteliconAnselmo.git`.
3. Navegue hasta la carpeta `prueba-front` en la terminal.
4. Ejecute `npm install` para instalar las dependencias.
5. Una vez instaladas las dependencias, ejecute `npm start` para iniciar la aplicación.
6. La aplicación estará disponible en `http://localhost:3000`.

## Backend

La parte de backend proporciona una API RESTful desarrollada en Spring Boot que realiza operaciones CRUD en una base de datos SQL. 

### Configuración de la Base de Datos

1. Importe la base de datos desde la carpeta `prueba-back/database` a su gestor de base de datos SQL.

### Ejecución del Backend

1. Asegúrese de tener Maven y Java instalados en su sistema.
2. Navegue hasta la carpeta `prueba-back` en la terminal.
3. Ejecute el siguiente comando para iniciar la aplicación backend:

```bash
mvn spring-boot:run
```

4. La API estará disponible en `http://localhost:8080`.

Falta hacer el controlador de la api para exponer los endpoints y las operaciones

## Despliegue

La aplicación está desplegada en Vercel y se puede acceder a ella en la siguiente ruta:

[Enlace a la aplicación desplegada en Vercel](https://prueba-tecnica-sitelicon-anselmo.vercel.app/)