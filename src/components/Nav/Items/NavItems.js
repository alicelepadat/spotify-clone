import React from 'react';

import classes from './NavItems.module.css';

const NavItems = ({items, className}) => {
    return <ul className={classes["NavItems"]}>
        {
            items.map((item, i) => (
                <li className={className} key={i}>
                    {
                        item.icon &&
                        <span className={classes["NavItemIcon"]}>
                            {item.icon}
                        </span>
                    }
                    {
                        item.link ?
                            <a href={item.link} rel={'noreferrer'} target={'_blank'}>{item.name}</a>
                            :
                            <span className={classes["NavItemName"]}>{item.name}</span>
                    }
                </li>
            ))
        }
    </ul>
}

export default NavItems;