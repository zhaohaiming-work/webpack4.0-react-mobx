import { observable, action, computed } from 'mobx'

class Store {
  @observable todos = [{ // todos即为被观察的数据
    title: 'todo标题',
    done: false
  }, {
    title: '标题2',
    done: true
  }]

  @action changeTodoTitle ({ index, title }) { // 用来修改todos的action
    setTimeout(() => {
      this.todos[index].title = title
    })
  }

  @computed get unfinishedTodos () { // 相当于vue中的计算属性，可以对todos进行过滤并返回，可缓存，不会产生不必要的的重渲染
    return this.todos.filter((todo) => todo.done === false)
  }

  @computed get finishedTodos () {
    return this.todos.filter((item) => item.done)
  }
}
export default new Store()
