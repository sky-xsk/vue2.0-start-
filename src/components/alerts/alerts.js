const alertsComponent = require('./alerts.vue'); //引入
const alerts = {
    install: function(Vue) {
        Vue.component('alerts', alertsComponent)
    }
};
module.exports = alerts;
