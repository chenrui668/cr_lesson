<template>
  <div>
    <swiper :indicator-dots="false"
      :autoplay="false">
      <block v-for="(imgUrl, i) in imgUrls" :key="i">
        <swiper-item>
          <image :src="imgUrl" class="slide-image" width="355" height="150"/>
        </swiper-item>
      </block>
    </swiper>
    <p class="title">{{title}}</p>
    <input type="text" placeholder="input todo" v-model="todoContent"/>
    <button @click="addTodo">添加一条</button>
    <button @click="clearTodo">清除</button>
    <ul>
      <li v-for="(todo, i) in todos" :key="i" :class="{'done': todo.done}" @click="toggle(i)">
        {{todo.text}}
      </li>
      <li>
        {{todoCount}}
        /
        {{todos.length}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'hello mpvue',
      todos: [
        {text: '吃饭', done: false},
        {text: '睡觉', done: false},
        {text: '吃鸡', done: false}
      ],
      imgUrls: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ],
      todoContent: ''
    }
  },
  computed: {
    todoCount: function () {
      return this.todos.filter(todo => !todo.done).length
    }
  },
  methods: {
    toggle: function (i) {
      // 设计哲学 不可变数据
      const todos = this.todos.slice(0);
      todos[i].done = !todos[i].done;
      this.todos = todos;
      // this.todos[i].done = !this.todos[i].done;
    },
    addTodo: function () {
      this.todos.push({
        text: this.todoContent,
        done: false
      })
      this.todoContent = ''
    },
    clearTodo: function () {
      this.todos = this.todos.filter(todo => !todo.done);// filter 过滤 留下没有执行的
    }
  },
  watch: {
    todos: function(todos) {
      console.log('set storage')
      wx.setStorageSync('todos', todos);
    }
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
