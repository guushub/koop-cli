const config = require('config')
const Koop = require('koop')
const routes = require('./routes')
const plugins = require('./plugins')

// initiate a koop app
const koop = new Koop()

// register koop plugins
plugins.forEach((plugin) => koop.register(plugin))

// add additional routes
routes.forEach((route) => koop.server[route.method.toLowerCase()](route.path, route.controller))

// start the server
const port = config.get('port')
koop.server.listen(port, () => koop.log.info(`Koop server listening at ${port}`))
