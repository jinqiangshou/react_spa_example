module.exports = {
    path: 'tab1',
    getComponent (nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('views/tab1').default)
        }, 'Tab1')
    }
}
