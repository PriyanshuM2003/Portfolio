import React from 'react'

export default function TabItem({ id, title, activeTab, setActiveTab }) {
    const handleClick = () => {
        setActiveTab(id);
    };
    return (
        <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
            {title}
        </li>
    )
}
