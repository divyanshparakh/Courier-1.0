import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
// Colors button -> #7367F0, secondary background-color: #10163A, main background-color: #262c47,
