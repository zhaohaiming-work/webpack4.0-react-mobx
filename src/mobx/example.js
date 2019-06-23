import { observable, action } from 'mobx'
// console.log(observable)
class Store {
    @observable todos = [{ // todos即为被观察的数据
      title: 'todo标题',
      done: false
    }, {
      title: '标题2',
      done: true
    }, {
      title: '标题3',
      done: true
    }]
    @observable count=0
    @action changeTodoTitle ({ index, title }) { // 用来修改todos的action
      this.todos[index].title = title
    }
    @action add =() => {
      let num = this.count
      this.count = (num += 1)
      console.log(this.count)
    }
}

export default new Store()
