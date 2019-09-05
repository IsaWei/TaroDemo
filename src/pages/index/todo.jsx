import Taro, {Component} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import {AtInput} from 'taro-ui'
import {connect} from '@tarojs/redux'
import './index.scss'
import {add, del} from '../../actions/index'

class Todo extends Component {
  constructor(props) {
    super(...arguments)
    this.state = {
      newTodo: ''
    }
  }

  config = {
    navigationBarTitleText: 'Todo页'
  }

  saveNewTodo(value) {
    console.log('==value in saveNewTodo==', value)
    let {newTodo} = this.state
    if (!value || value === newTodo) return
    this.setState({
      newTodo: value
    })
  }

  addTodo() {
    let {newTodo} = this.state
    let {add, todos} = this.props

    if (!newTodo) return

    add(newTodo)
    // this.setState({
    //   newTodo: ''
    // })
  }

  delTodo(id) {
    let {del} = this.props
    del(id)
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    // 获取未经处理的todos并展示
    const {newTodo} = this.state
    let {todos, add, del} = this.props
    const todosJsx = todos.map(todo => {
      return (
        <View className='todos_item'><Text>{todo.text}</Text>
          <View className='del'
                onClick={this.delTodo.bind(this, todo.id)}>-</View></View>
      )
    })
    return (
      <View className='at-article'>
        <View className='index todos'>
          <View className='add_wrap'>
            <AtInput placeholder="填写新的todo" onBlur={this.saveNewTodo.bind(this)} value={newTodo}/>
            <View className='add' onClick={this.addTodo.bind(this)}>+</View>
          </View>
          <View>{todosJsx}</View>
        </View>
      </View>
    )
  }
}

export default connect(({todos}) => ({
  todos: todos.todos
}), (dispatch) => ({
  add(data) {
    dispatch(add(data))
  },
  del(id) {
    dispatch(del(id))
  }
}))(Todo)
