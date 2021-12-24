<template>
    <div class="panelsbox">
        <cube-scroll class="leftpannels">
            <ul>
                <li v-for="(list,index) in tabslabel" @click='selectlist(index)' :class="list.active?'active' : ''" :key="index">
                    {{list.label}}
                </li>
            </ul>
        </cube-scroll>
        <cube-scroll class="rightpannels">
            <ul>
                <li v-for="(tag, index) in tags" :key="index">
                    <img :src="tag.image" alt="">
                    <p>{{tag.label}} <i class="cubeic-add" @click="addtocart($event, tag)"></i></p>
                </li>
            </ul>
        </cube-scroll>
        <div class="ball-wrap">
            <transition @before-enter="beforeEnter"
            @enter="enter"
            @afterEnter="afterEnter">
                <div class="ball" v-if="ball.show">
                    <div class="inner">
                        <i class="cubeic-add"></i>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            ball:{
                show:false,
                el:''
            },
            tags:[],
            tabslabel:[
                {
                    label:'热门推荐',
                    active:true
                },
                {
                    label:'手机数码',
                    active:false
                },
                {
                    label:'家用电器',
                    active:false
                },
                {
                    label:'电脑产品',
                    active:false
                },
                {
                    label:'美妆护肤',
                    active:false
                },
                {
                    label:'口红',
                    active:false
                },
                {
                    label:'手袋',
                    active:false
                },
                {
                    label:'水果',
                    active:false
                },
                {
                    label:'医用药品',
                    active:false
                },
                {
                    label:'衣服',
                    active:false
                },
                {
                    label:'运动',
                    active:false
                },
                {
                    label:'食品',
                    active:false
                },
                {
                    label:'鞋包',
                    active:false
                },
            ]
        }
    },
    methods:{
        selectlist(index){
            this.tabslabel.forEach((val,ind) => {
                if(index == ind){
                    val.active = true
                }else{
                    val.active = false
                }
            
            });
            this.getclassify(index)
        },
        //获取分类
        async getclassify(index){
            const result = await this.$http.get('/api/classify',{params:{type:index}})
            this.tags = result.data
        },
        //添加商品到购物车
        addtocart(e,tag){
            this.$store.commit('tocart',tag)
            //显示小球
            this.ball.show = true
            //获取点击元素
            this.ball.el = e.target
        },
        beforeEnter(el){
           //让小球移动到点击的位置
           //获取点击的位置
           const dom = this.ball.el
           const rect = dom.getBoundingClientRect()
           const x = rect.left - window.innerWidth*0.7
           const y = rect.top - window.innerHeight

           el.style.display = 'block'
           el.style.transform=`translate3d(0,${y}px,0)`
           const inner = el.querySelector('.inner')
           inner.style.transform=`translate3d(${x}px,0,0)`
        },
        afterEnter(el,done){
            this.ball.show=false
            el.style.display = 'none'
        },
        enter(el,done){
            //触发重绘
            document.body.offsetHeight
            //小球移动到购物车位置
            el.style.transform=`translate3d(0,0,0)`
            const inner = el.querySelector('.inner')
            inner.style.transform=`translate3d(0,0,0)`
            el.addEventListener('transitionend',done)
        },

    },
    created(){
        //获取默认分类的数据
        this.getclassify(0)
    },
    //dom加载完了可以做些操作
    mounted(){
        //设置滚动盒子的高度
        const leftpannels= document.querySelector('.leftpannels')
        const rightpannels = document.querySelector('.rightpannels')
        //不同客户端的高度都不一样
        const bodyheight = document.documentElement.clientHeight
        leftpannels.style.height = bodyheight - 57 + 'px'
        rightpannels.style.height = bodyheight - 57 + 'px'
    }
}
</script>
<style lang="stylus" scoped>
    .ball-wrap
        .ball
            position: fixed
            left: 70%
            bottom: 10px
            z-index: 1003
            color: red
            transition: all 1s cubic-bezier(0.49,-0.29,0.75,0.41)
            .inner
                width: 16px
                height: 16px
                transition: all 1s linear
            
    .panelsbox
        display: flex
        .leftpannels
            width: 30%
            li
                height: 50px
                line-height: 50px
                border-bottom: 1px solid #fff
                color: #333
                background: #f8f8f8
                font-size: 14px
            .active
                background: #fff
                color: #e93b3d
        .rightpannels
            width: 70%
            ul
                display: flex
                flex-wrap: wrap
                li
                    width: 50%
                    justify-content: center
                    align-items: center
                    font-size: 15px
                    img
                        width: 80px
                        height: 80px
                    .cubeic-add
                        font-size:18px 
</style>