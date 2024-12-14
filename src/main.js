import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from "@/components/ui/BaseButton";
import BaseContainer from "@/components/ui/BaseContainer";
import TheFooter from "@/components/layout/TheFooter";
import TheHeader from "@/components/layout/TheHeader";
import router from "@/router";
import store from './store'
import ElementPlus from 'element-plus'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from '@fortawesome/free-solid-svg-icons'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.component('base-button',BaseButton)
app.component('base-container',BaseContainer)
app.component('the-footer',TheFooter)
app.component('the-header',TheHeader)
app.use(router);
app.use(store);
app.use(ElementPlus)
app.component('font-awesome-icon',FontAwesomeIcon);
library.add(fas);
app.mount("#app")
