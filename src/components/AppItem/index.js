// Write your code here
import './index.css'

const AppItem = props => {
  const {list} = props
  const {appName, imageUrl} = list
  return (
    <li className="individualappcontainer">
      <img src={imageUrl} className="appimage" alt={appName} />
      <p className="imagename">{appName}</p>
    </li>
  )
}

export default AppItem
