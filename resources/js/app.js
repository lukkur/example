import Vue from 'vue'
import { InertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue';
import { InertiaProgress } from '@inertiajs/progress/src'
import vuetify from "./plugins/vuetify";

InertiaProgress.init()

Vue.use(InertiaPlugin)

const el = document.getElementById('app')

const initialPage = JSON.parse(app.dataset.page);

window.eventBus = new Vue()

window.App = new Vue({
    vuetify,
    store,
    render: h => h(InertiaApp, {
        props: {
            initialPage,
			
			// generates files in multiple locations on mix 
			// UnhandledPromiseRejectionWarning: Error: ENOENT: no such file or directory, open 'C:\css\229.app-v.css' on mix --production
            //resolveComponent: (name) => import(`./Pages/${name}`).then(module => module.default),
			
			// causes "Error: Conflict: Multiple chunks emit assets to the same filename css/app-v.css" on mix or mix --production
            resolveComponent: (name) => require(`./Pages/${name}`).default,
        },
    }),
}).$mount(el)
