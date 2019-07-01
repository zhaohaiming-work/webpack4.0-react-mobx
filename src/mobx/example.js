import { observable, action, computed } from 'mobx'
import Api from 'api'
class Store {
  @observable dateList = []
  @observable todos = [{ // todos即为被观察的数据
    title: '我是大神',
    done: false
  }, {
    title: '我是菜鸟',
    done: true
  }, {
    title: '我是尼古拉斯-赵四',
    done: true
  }]
  @observable count = 0
  @computed get unfinishedTodos () { // 相当于vue中的计算属性，可以对todos进行过滤并返回，可缓存，不会产生不必要的的重渲染
    return this.todos.filter((todo) => todo.done === false)
  }
  @action changeTodoTitle ({ index, title }) { // 用来修改todos的action
    this.todos[index].title = title
  }
  @action add = () => {
    let num = this.count
    this.count = (num += 1)
    console.log(this.count)
  }
  @action getDate=() => {
    Api.getChainDate()
      .then(res => {
        const { data } = res
        this.dateList = data || []
      })
  }
}

export default new Store()
