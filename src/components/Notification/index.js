// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <li>
      {children[0]}
      <div className="text-container">
        {children[1]}
        {children[2]}
      </div>
      <GrFormClose className="cross" />
    </li>
  )
}
export default Notification
