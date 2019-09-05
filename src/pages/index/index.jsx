import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import {AtButton, AtInput, AtForm, AtMessage} from 'taro-ui'
import {connect} from '@tarojs/redux'
import './index.scss'
import {login} from '../../services/login'
import {add, del} from '../../actions/index'
import {accountLogin} from '../../actions/user'

class Index extends Component {
  constructor(props) {
    super(...arguments)
    this.state = {
      loginName: '',
      password: '',
      newTodo: ''
    }
  }

  config = {
    navigationBarTitleText: 'Home页'
  }

  componentWillMount() {
  }

  componentDidMount() {
    /*Taro.request({
      method: 'GET',
      url: `http://192.168.55.7:4040/api/devices`,
      header: {
        'content-type': 'application/json' // 默认值
      },
    }).then(function (res) {
      console.log(res)
    })*/
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  handleChange = (value1, key) => {
    this.setState({[key]: value1})
    return value1
  }

  onSubmit = (event) => {
    const {loginName, password} = this.state
    this.props.accountLogin({username: loginName, password})
    /*login({
      url: '/api/login',
      params: {username: loginName, password},
      callback: (res) => {
        console.log(res)
        Taro.atMessage({
          'message': `登陆${res.statusCode === 200 ? '成功' : '失败'}`,
          'type': `${res.statusCode === 200 ? 'success' : 'warning'}`,
        })
        Taro.navigateTo({url: '/pages/index/todo'})
      }
    })*/
  }
  onReset = () => {
  }

  render() {
    const {loginName, password} = this.state
    return (
      <View className='at-article'>
        <AtMessage/>
        <View className='at-article__h1 center_title'>
          科研智能PACS工作站
        </View>
        <AtForm className='login_form'
                onSubmit={this.onSubmit.bind(this)}
                onReset={this.onReset.bind(this)}>
          <AtInput
            name='loginName'
            title='用户名'
            type='text'
            placeholder='请输入用户名'
            value={loginName}
            onChange={(value) => this.handleChange(value, 'loginName')}
          />
          <AtInput
            name='password'
            title='密码'
            type='password'
            placeholder='请输入密码'
            value={password}
            onChange={(value) => this.handleChange(value, 'password')}
          />
          <AtButton formType='submit' onClick={this.onSubmit.bind(this)} type='primary' circle
                    className='submitBtn'>提交</AtButton>
          <AtButton formType='reset' type='secondary' circle className='submitBtn'>重置</AtButton>
        </AtForm>
      </View>
    )
  }
}

export default connect(({todos, user}) => ({
  todos: todos.todos,
  user
}), (dispatch) => ({
  add(data) {
    dispatch(add(data))
  },
  del(id) {
    dispatch(del(id))
  },
  accountLogin(params) {
    dispatch(accountLogin(params))
  }
}))(Index)
