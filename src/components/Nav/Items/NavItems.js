import React from 'react';

import classes from './ItemsContainer.module.css';

const ItemsContainer = ({items}) => {
    return <ul className={classes["NavItems"]}>
        {
            items.map((item, i) => (
                <li className={"NavItem"} key={i}>
                    {
                        item.icon &&
                        <span className={"NavItemIcon"}>
                            {item.icon}
                        </span>
                    }
                    <span>{item.name}</span>
                </li>
            ))
        }
    </ul>
}

export default ItemsContainer;