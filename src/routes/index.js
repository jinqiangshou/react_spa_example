const routes = {
    path: '/',
    indexRoute: {
        getComponent (nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('views/home/Home').default)
            }, 'Home')
        }
    },
    getComponent (nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('App').default)
        }, 'App')
    },
    childRoutes: [
        require('routes/tab1')
    ]
}

export default routes
