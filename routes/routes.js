// import other routes
const userRoutes = require('./users');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('Módulo 2 Ejercicio 2');
    });

    // // other routes
    userRoutes(app, fs);

};

module.exports = appRouter;