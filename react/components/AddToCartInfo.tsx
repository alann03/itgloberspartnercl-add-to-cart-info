import React from 'react';
import { useProduct } from 'vtex.product-context';
import { generateBlockClass } from '@vtex/css-handles';
import ButtonGroup from './ButtonGroup';

import styles from './styles.css';

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
    const container = generateBlockClass(styles.container, blockClass);
    const container__item = generateBlockClass(styles.container__item, blockClass);
    const container__img = generateBlockClass(styles.container__img, blockClass);
    const container__item__info = generateBlockClass(styles.container__item_info, blockClass);
    const container__title = generateBlockClass(styles.container__title, blockClass);
    const item__img = generateBlockClass(styles.item__img, blockClass);
    const item__brand = generateBlockClass(styles.item__brand, blockClass);
    const item__name = generateBlockClass(styles.item__name, blockClass);
    const item__code = generateBlockClass(styles.item__code, blockClass);
    const item__price = generateBlockClass(styles.item__price, blockClass);

    const productInfo = useProduct();

    return (
        <div className={container}>
            <h2 className={container__title}>Agregado al carro</h2>
            <div className={container__item}>
                <div className={container__img}>
                    <img className={item__img} src={productInfo.selectedItem.images[0].imageUrl} />
                </div>
                <div className={container__item__info}>
                    <p className={item__brand}>{productInfo.product.brand}</p>
                    <p className={item__name}>{productInfo.selectedItem.name}</p>
                    <p className={item__code}>CODE{productInfo.product.brandId}</p>
                    <p className={item__price}>{productInfo.product.priceRange.sellingPrice.highPrice} $</p>
                </div>
            </div>
            <ButtonGroup blockClass={blockClass} />
        </div>
    )
}
export default AddToCartInfo;