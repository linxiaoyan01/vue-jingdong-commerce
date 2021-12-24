import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  //设置vuex的token
  state: {
    token:'',
    cartarry:JSON.parse(localStorage.getItem('cartarry')) || [],//存储购物车商品的数组
  },
  mutations: {
    settoken(state,token){
      state.token = token
    },
    //添加商品到购物车
    tocart(state,tag){
      let goods = state.cartarry.find(v=>v.title == tag.label)
      if(goods){
        goods.cartCount += 1
      }else{
        state.cartarry.push({title:tag.label,cartCount:1})
      }
    },
    cartadd(state,index){
      state.cartarry[index].cartCount++
    },
    cartremove(state, index){
      if(state.cartarry[index].cartCount>1){
        state.cartarry[index].cartCount--
      }else{
        if(window.confirm('确定从购物车移除商品吗?')){
          state.cartarry.splice(index,1)
        }
      }
    },
    clearcart(state){
      state.cartarry=[]
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    countsum:state=>{
      let num = 0
      state.cartarry.forEach(v=>{
        num += v.cartCount
      })
      return num
    }
  }

})
store.subscribe((mutations,state)=>{
  localStorage.setItem('cartarry',JSON.stringify(state.cartarry))
})
export default store
