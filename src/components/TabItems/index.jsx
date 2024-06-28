import './index.css'
const TabItems = props => {
    const {tabDetails, changeActiveTabId, isActive} = props
    const {tabId, displayText} = tabDetails
    const handleTabId = () => {
        changeActiveTabId(tabId)
    }
    console.log("isActive", isActive, tabId)
    const activeTabIdStyling = isActive && "active-tabId-styling" 
    return(
        <li className='list-buttons'>
            <button type='button' className={`button ${activeTabIdStyling}`} onClick={handleTabId}>{displayText}</button>
        </li>
    )
}
export default TabItems