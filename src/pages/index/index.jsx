import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import {AtButton, AtInput, AtForm, AtMessage} from 'taro-ui'
import {connect} from '@tarojs/redux'
import './index.scss'
import {login, saveCurrentUser} from '../../actions/user'

class Index extends Component {
  constructor(props) {
    super(...arguments)
    this.state = {
      loginName: 'admin',
      password: 'test',
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
    const {login, saveCurrentUser} = this.props
    login({username: loginName, password}, (response) => {
      Taro.navigateTo({url: '/pages/study/list'})
      saveCurrentUser(response)
    })
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

export default connect(({user}) => ({
  user
}), (dispatch) => ({
  login(params, callback) {
    dispatch(login(params, callback))
  },
  saveCurrentUser(params) {
    dispatch(saveCurrentUser(params))
  },
}))(Index)
