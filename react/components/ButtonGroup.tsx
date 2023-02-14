import React from 'react';
import { generateBlockClass } from '@vtex/css-handles';

import styles from './styles.css';

const ButtonGroup = ({ blockClass }: { blockClass: string }) => {

    const container__buttons = generateBlockClass(styles.container__buttons, blockClass);
    const button__back = generateBlockClass(styles.button__back, blockClass);
    const button__cart = generateBlockClass(styles.button__cart, blockClass);
    
    return (
        <>
            <div className={container__buttons}>
                <a className={button__cart} href="https://alanhuismann--itgloberspartnercl.myvtex.com/cart">Ver pedido</a>
                <a className={button__back} href="/">{"< quiero seguir comprando"}</a>
            </div>
        </>
    )
}

export default ButtonGroup;