const routes = [{
  path: '/',
  indexRoute: {
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('views/home').default)
      }, 'Home')
    }
  },
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('App').default)
    }, 'App')
  },
  childRoutes: [
    require('routes/tab1'),
    require('routes/tab2'),
    {
      path: '*',
      getComponent (nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('views/notfound').default)
        }, 'NotFound')
      }
    }
  ]
}]

export default routes
