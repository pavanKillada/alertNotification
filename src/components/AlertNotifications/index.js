// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'
import Notification from '../Notification'
import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="bg-container">
        <h1 className="main-head">Alert Notifications</h1>
        <ul>
          <Notification>
            <AiFillCheckCircle className="green-icon" />
            <h1 className="green-head">Success</h1>
            <p>You can access all the files in the folder</p>
            <GrFormClose className="cross" />
          </Notification>
          <Notification>
            <RiErrorWarningFill className="red-icon" />
            <h1 className="red-head">Error</h1>
            <p>
              Sorry, you are not authorized to have access to delete the file
            </p>
            <GrFormClose className="cross" />
          </Notification>
          <Notification>
            <MdWarning className="orange-icon" />
            <h1 className="orange-head">Warning</h1>
            <p>Viewers of this file can see comments and suggestions</p>
            <GrFormClose className="cross" />
          </Notification>
          <Notification>
            <MdInfo className="blue-icon" />
            <h1 className="blue-head">Info</h1>
            <p>Anyone on the internet can view these files</p>
            <GrFormClose className="cross" />
          </Notification>
        </ul>
      </div>
    )
  }
}
export default AlertNotifications
