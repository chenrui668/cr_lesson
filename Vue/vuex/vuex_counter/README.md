- vuex
    vue 开发， 两部分
    组件开发(协作)  vuex 数据管理 (应用程序的数据流 难)

    store 超市 new Vuex.Store({
        state
    })
    读 this.$store.state.count

    写 actions, mutations getters,
    vuex 不是什么时候都要， 大项目离不开，小项目没必要
    公司的概念

    state 数据状态
      /\
      || 修改数据状态
      ||
    mutations 审核，对状态的修改是否被允许
      /\
      || commit 提交要使用的方法的申请  
      ||    
    actions 动作，申请使用方法改变数据状态

- Vue 实现核心mvvm, 其他的通过Vue.use() 插入进去
    this.$store
    this.$router
    读
    写

- data() 将会被 state取代
    data 只是自身状态的数据
    methods 改变状态的方法， 会是actions