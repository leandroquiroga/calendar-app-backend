# Calendar-app Backend
Este es el backend de la aplicacion calendar-app que se encarga de procesar toda la logica de la aplicacion, desde la conexion de la base de datos hasta los mensajes de errores que se le mostrara al usuario. 

# Construido con 🛠️
* Node.js
* Express.js
* Express-validator
* Mongoose
* Mongo DB
* JSON Web Token
* Bcrypt.js

# Funcionalidades ⚙️

## Controladores 

### Event
Son los encargados de manejar toda la logica del CRUD de la aplicacion aqui. La logica de Create, Read, Update, Delete.

### Auth 
Es este controlador se encuentra la logica de la autenticacion del usuario, ya sea que el usuario se pueda logearse, registrarse y hasta renovar el token. Todas las funciones retornan una respuesta JSON dependiendo su status
<hr>

## Configuracion de la bases de datos
Aqui se puede observar la configuracion de la concexion de a la bases de datos de Mongo DB mediante mongoose usando las variables de entorno. 
<hr>

## Helpers 
Son dos funciones en la que isDate retorna true si la fecha que se escoje es valida y luego jwt que nos permite registrar la firma del token de cada usuario. 
<hr>

## Middlewares
Son dos middleware que nos permiten validar el token de JSON Web Token que son recibidos a traves del header, esta intentara extraer la informacion del usario, modificar la informacion que viaja a traves de la peticion y asi la pasamos como un parametro de referencia. En caso de fallar en la extracion de la informacion esta retorna una respuesta JSON indicando que el token no es valido. 

En el otro de middleware se encarga de validar los datos que recibe el backend ya sea el mail, nombre, contreseña, etc. En caso de no de que los datos no sean validos retornar una respueta JSON un arreglo con el error, el mensaje y el campo el que esta fallando en la validacion. 
<hr>

## Models 
Se tiene dos tipos de modelos de bases de datos en la que se encuentra la estructura logica de la base de datos y la manera de que se van almacenar los datos. 
<hr>


## Rutas
Se dividen en dos rutas, una para Auth en la que se encuentran la pagaina de reguistro, login y para renovar el token en la que deben pasar por una validacion para ejecutar sus respectivos middleware. Por otro lado se encuentra la ruta de eventos, en donde se encuentra todas las ruta para ejecutar la logica del CRUD. 

## Scripts💻
```
git clone https://github.com/leandroquiroga/calendar-app-backend.git

cd calendar-app-backend

npm start

Happy Coding 🎉🎉
```
## Documentacion 📋
En este enlace dejo adjuntada la documentacion de completa de API 

- [Documentacion](https://documenter.getpostman.com/view/18336036/UzQuPREL)

- Paso 1: Ir a la opcion de LANGUAGE

![Documentacion API - Paso 1](https://user-images.githubusercontent.com/80013958/179017973-0a01cd9a-73bc-48c2-9ae8-8158a2b4a38e.png)

- Paso 2: Seleccionar JavaScrpt - Fetch

![Documentacion API - Paso 2](https://user-images.githubusercontent.com/80013958/179017997-1e1824f7-4336-4471-9dcb-538dd14a8125.png)

- Paso 3: Seleccionar un opcion

![Documentacion API - Paso 3](https://user-images.githubusercontent.com/80013958/179018010-8e8da1f9-eec3-4fd2-ae47-7bafb3cac485.png)

- Paso 4: Probarla en Postman

![Documentacion API - Paso 4](https://user-images.githubusercontent.com/80013958/179018031-e9a7a39b-5075-4b4e-b978-1319bdda08a1.png)

Aclaracion: Para correrala en Postman el servidor debe estar corriendo en [Localhost](http://localhost:4000)

# ACLARACION IMPORTANTE ⛔️
Esta API puede ser usada para cualquier Fronted, con cualquier framework, fue creada con fines educativos. Para probar esta API 
se puede utilizar Postman, Soap-ui, etc.

# Deploy 👨‍💻
Proximamente ⏳
# Contacto 📫
- [Linkedin](https://www.linkedin.com/in/leanquiroga95/)
- [Email](mailto:leandroquiroga9514@gmail.com)

# Autor 👤
Realizado con ❤️ por [Leandro Quiroga](https://github.com/leandroquiroga);
