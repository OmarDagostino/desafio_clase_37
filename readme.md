# Desafío de la clase 37
# Comisión 55565  de CoderHouse

## Autor : Omar D'Agostino

## Funcionalidades agregadas 
    * Implementación del usuario Premiun . 
    - En la vista de los datos del usuario se agrego un boton para cambiar el tipo de usuario (cambia de premium a user y viseversa). La ruta creada es api/sesions/premium/:email (pues se ha optado por utilizar el email en lugar de id).Obviamente primero tiene que hacer el login.
    - Cuando el usuario es Premium aparece la opción de menu Premium, que permite visualizar, crear, modificar y borrar productos (siempre y cuando pertenezcan a dicho usuario).
    - Se modifico el proceso de agregar al carrito para que solo permita añadir productos que no pertenezcan al usuario que hizo login.

    * Implementación del proceso de recuperación de contraseña
    - En la vista de login se agrego un boton por si se olvidó la contraseña y redirige a una vista que solicita el email para enviar el JWT de recuperación a su casilla de correo (que solo tiene una hora de vigencia)
    - En la vista de recuperación existe un boton para enviar correo para confirmar el reestablecimiento de la contraseña
    - Cuando el usuario hace click en el link que le fue enviado lo redirige a la vista de recupera , que le permite ingresar una nueva contraseña (siempre y cuando el JWT se valido y vigente, caso contrario lo redirige  a solicitar una nueva recuperación, con un mensaje avisandole del problema). Si la contraseña no es igual a la ultima registrada, cuando se usa el boton de cambio de cantraseña se redirige al menu de login , indicandole que tiene que hacerlo para iniciar su sesion. 
   

## Tecnologías utilizadas : 
- Node JS : v18.16.1
- Motor de plantillas : Handlebars
- Estrategias de autenticación : Passport local y Passport con Git Hub
- Hasheo de password : Bcrypt
- Logger : Winston
- Websocket : socket.io
- Mongo DB Atlas usado con Mongoose
    -base de datos : ecommerce1
    -colecciones : products1 / carts1 / messages1 /sessions / users1 / tickets1
- Dependencias 
    "@faker-js/faker": "^8.3.1",
    "bcrypt": "^5.1.1",
    "commander": "^11.1.0",
    "connect-mongo": "^5.0.0",
    "crypto": "^1.0.1",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-handlebars": "^7.1.2",
    "express-session": "^1.17.3",
    "express-validator": "^7.0.1",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^7.5.1",
    "mongoose-paginate-v2": "^1.7.4",
    "nodemailer": "^6.9.7",
    "nodemon": "^3.0.1",
    "passport": "^0.6.0",
    "passport-github2": "^0.1.12",
    "passport-local": "^1.0.0",
    "socket.io": "^4.7.2",
    "socket.io-client": "^4.7.2",
    "winston": "^3.11.0"

