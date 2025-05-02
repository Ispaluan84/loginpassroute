// Snippets de código para poder componer el programa

//Usado?: YES 
  const middlewares = require('./middlewares');
//--- Explicación: 

// Para requerir el middleware------------------------------------------------

//Usado?: YES
const bodyParser = require('body-parser');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
const session = require('express-session');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
const express = require('express');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: 
const bodyParser = require('body-parser');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
const session = require('express-session');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
const dotenv = require('dotenv');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
const middlewares = require('./middlewares');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
const routes = require('./routes');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
dotenv.config();
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
const app = express();
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
const PORT = 4000;
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
const dotenv = require('dotenv');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
dotenv.config();
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
middlewares.setupApp(app);
//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?: YES
routes.setup(app);
//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?: YES
const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PALABRA_SECRETA || '';

  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect('/?error=1');
  }
};
//--- Explicación: 


// Usado en el middleware para validar la palabra secreta -------------------------------------------------------------


//Usado?: YES
const setup = (app) => {
  app.get('/', (req, res) => {
    const mensajeError = req.query.error
      ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.')
      : '';
    if (req.session.palabraSecreta) {
      return res.redirect('/profile');
    }
  //Aquí va código dentro
})}
//--- Explicación: 


// Ruta Principal-----------------------------------------------------------------


//Usado?:  YES
res.send(`
  <html>
    <body>
      <h1>Página de Inicio</h1>
      <p>${mensajeError}</p>
      <form method="post" action="/profile">
        <label for="palabra">Introduce la palabra:</label>
        <input type="text" name="palabra" required>
        <button type="submit">Enviar</button>
      </form>
    </body>
  </html>
`);
//--- Explicación: 


// Formulario para completar parte de la ruta principal-----------------------------------------------------------

//Usado: YES

const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
};

//Configuracion de la aplicacion

//Usado?: YES
app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 

// Procesar la palabra secreta--------------------------------------------------------------

//Usado?: YES
app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?: YES
app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?: YES
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
//--- Explicación: 

// Inicio del Servidor------------------------------------------------------------

//Usado?: YES
const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/?error=2');
  }
};
//--- Explicación: 

// Usado para verificar que la sesion existe--------------------------------------------------------


//Usado?: YES
app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil (Sesión activa)</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 

// Ruta para ver el perfil cuando la palabra secreta es correcta----------------------------------------------------------------


//Usado?: YES
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/');
  });
});
//--- Explicación: 

// Para cerrar la sesión -------------------------------------------------------------

//Usado?: YES
module.exports = {
  setup,
};
//--- Explicación:

// Para exportar a otro archivo-------------------------------------------------------------------

//Usado?: YES
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
};
//--- Explicación:

// Use el module para exportar las funciones del middleware a app.js-----------------------------------------------------------

