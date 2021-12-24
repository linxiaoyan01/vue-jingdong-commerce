import axios from 'axios'
import store from './store'
import router from './router'

//http 全局拦截
//token要放在我们请求的header上面带回去给后端

export default function setAxios(){
    //请求拦截
    axios.interceptors.request.use(
        config=>{
            if(store.state.token){
                config.headers.token = store.state.token
            }
            return config
        }

    )
    //每次的请求有返回的，都是先经过这个拦截器
    axios.interceptors.response.use(
        response=>{
            if(response.status == 200){
                const data = response.data
                if(data.code == -1){
                    //过期需要重新登录 清空vuex和localStorage
                    store.commit('settoken','')
                    localStorage.removeItem('token')
                    //跳转到login页面，不让它插入到history
                    router.replace({path:'/login'})
                }
                return data
            }
            return response
        }
    )
}