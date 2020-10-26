const routes = require('next-routes');

module.exports  = routes()
    .add("/", "users")
    .add("/userdetail/:user", "userdetail");