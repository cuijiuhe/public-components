import FtButtons from './components/Button/index.vue'
import PageList from './components/PageList/index.vue'
import ProForm from './components/ProForm/index.vue'
import ProTable from './components/ProTable/index.vue'

const components: any = { FtButtons, PageList, ProForm, ProTable };

console.log(components)

 const component = {
    install(vue: any) {
        for ( const key in components) {
            vue.component(key, components[key])
        }
    }
}

export default component;