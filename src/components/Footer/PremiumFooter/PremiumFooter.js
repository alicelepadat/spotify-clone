import React from 'react';

import Button from '../../UI/Button/Button';

import classes from './PremiumFooter.module.css';

export default function PremiumFooter() {
    return (
        <footer className={classes.Footer}>
            <div className={classes["FooterContent"]}>
                <h1>Preview of spotify</h1>
                <p>
                    Try Premium free fro 3 months. Listen to your music offline and ad-free. Monthly subscription fee applies after. Open only to users who haven't already tried Premium. Offer excludes Family and Duo plans. Terms and conditions apply.
                </p>
            </div>
            <div className={classes["FooterActions"]}>
                <Button className={classes["PremiumButton"]} aria-label="Try Premium">
                    <a href={'https://www.spotify.com/ro-en/premium/'} rel={'noreferrer'} target={'_blank'}>
                        Get 3 months free
                    </a>
                </Button>
            </div>
        </footer>
    )
}
