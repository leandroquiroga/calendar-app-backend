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
