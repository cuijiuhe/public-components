import FtButtons from './components/Button/index.vue'

const components: any = { FtButtons }

 const component = {
    install(vue: any) {
        for ( const key in components) {
            vue.component(key, components[key])
        }
    }
}

export default component;