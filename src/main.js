import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faHome, faMotorcycle, faSearch } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faHome, faMotorcycle, faSearch)


createApp(App).mount('#app')
.component('font-awesome-icon', FontAwesomeIcon)