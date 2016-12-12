module.exports = {
    path: 'tab2',
    getComponent (nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('views/tab2').default)
        }, 'Tab2')
    }
}
