// Write your code here
import './index.css'

const TabItem = props => {
  const {list, active, clickable} = props
  const {displayText, tabId} = list
  const addborder = active ? 'addborder' : ''
  const addcolor = active ? 'addcolor' : ''
  const clicked = () => {
    clickable(tabId)
  }
  return (
    <li className={`individualcontainer ${addborder}`}>
      <button type="button" className={`button ${addcolor}`} onClick={clicked}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
