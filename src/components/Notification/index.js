// Write your code here
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
      {children[3]}
    </li>
  )
}
export default Notification
