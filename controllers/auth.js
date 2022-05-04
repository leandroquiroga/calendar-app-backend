// Funciones declaradas en las rutas

const renewToken = (req, res) => {
    res.json({
        msg: 'Pagina de revalidacion del token',
    });
};

const loginUser = (req, res) => {
    res.json({
        msg: 'Pagina de logeo del usuario'
    });
};

const registerUser = (req, res) => {

    console.log(req.body);
    res.json({
        msg: 'Pagina de registro de usuario',
        info: req.body
    });
};

module.exports = {
    renewToken, 
    loginUser,
    registerUser,
}