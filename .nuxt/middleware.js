const middleware = {}

middleware['auth'] = require('..\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['check_auth'] = require('..\\middleware\\check_auth.js')
middleware['check_auth'] = middleware['check_auth'].default || middleware['check_auth']

middleware['userAuth'] = require('..\\middleware\\userAuth.js')
middleware['userAuth'] = middleware['userAuth'].default || middleware['userAuth']

export default middleware
