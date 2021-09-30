import React from 'react';
import {useHistory} from "react-router-dom";

import classes from './NavItems.module.css';

const NavItems = ({items, className}) => {
    const history = useHistory();

    const navItemClickHandler = (pathname, state) => {
        history.push({
            pathname: pathname,
            state: state
        });
    };

    return <ul className={classes["NavItems"]}>
        {
            items.map((item, i) => (
                <li className={className} key={i}
                    onClick={() => item.pathname && navItemClickHandler(item.pathname, item.state)}>
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