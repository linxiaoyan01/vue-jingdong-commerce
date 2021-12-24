<template>
    <div>
        <img class="headerimg" src="https://fbgs.com/wp-content/uploads/2020/11/Shape_sensing_medical.jpg" alt="">
        <ul>
            <li v-for="item in minearry" class="mineitem" @click="itemClick(item)" :key="item.label">
                <span class="minetitle">{{item.label}}</span>
                <i class="cubeic-arrow"></i>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    data(){
        return{
            minearry:[
                {label:'商品收藏'},
                {label:'我的足迹'},
                {label:'店铺收藏'},
                {label:'我的订单'},
                {label:'退出',type:'exit'},
            ]
        }
    },
    methods:{
        itemClick(item){
            if(item.type=='exit'){
                this.$store.commit('settoken','')
                localStorage.removeItem('token')
                this.$router.push({path:'/login'})
            }
        }
    }

}
</script>
<style lang="stylus" scoped>
    .mineitem
        font-size: 14px
        text-align: left
        height: 50px
        line-height: 50px
        padding-left: 5%
        border-bottom: 1px solid #eee
        .minetitle
            display: inline-block
            width: 90%

    .headerimg
        height: 150px
        width: 100%
</style>