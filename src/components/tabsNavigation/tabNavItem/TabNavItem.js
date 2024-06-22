const TabNavItem = ({id, title, activeTab, setActiveTab, tabClass}) => {

    const switchTab = () => {
        setActiveTab(id)
    }

    return ( 
        <button 
            className={activeTab === id ? `${tabClass} active` : `${tabClass}`} 
            id="order" 
            onClick={switchTab}>

            {title}
        </button>
     );
}
 
export default TabNavItem;