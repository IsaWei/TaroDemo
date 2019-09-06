import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import {AtButton, AtInput, AtForm, AtMessage} from 'taro-ui'
import {connect} from '@tarojs/redux'
import {getStudyByStatus} from "../../services/study";

class List extends Component {
  constructor(props) {
    super(...arguments)
    this.state = {
      studyList: []
    }
  }

  config = {
    navigationBarTitleText: 'StudyList 页'
  }

  getStudyByStatus = () => {
    debugger
    const {currentUser} = this.props
    getStudyByStatus({status: 'PENDING', userName: currentUser.name, role: currentUser.role})
  }

  componentDidMount() {
    this.getStudyByStatus();
  }

  render() {
    const {studyList} = this.state
    return (
      <View className='at-article'>
        <AtMessage/>
        <View className='at-article__h1 center_title'>
          病例列表
        </View>

      </View>
    )
  }
}

export default connect(({user}) => ({
  currentUser: user.currentUser
}), (dispatch) => ({}))(List)
