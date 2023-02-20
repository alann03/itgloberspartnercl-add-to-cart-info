# Add To Cart Info

El componente _Add To Cart Info_ brinda información acerca del producto que se acaba de añadir al carrito de compras.

![Media Placeholder](/assets/img/add-to-cart-info.png)

## Configuración

### Paso 1 - Agregar el componente a las dependencias de su aplicación

Dentro del archivo `manifest.json` de su aplicación, debe agregar la siguiente dependencia: 

```json
"dependencies": {
  ...
  "itgloberspartnercl.add-to-cart-info": "0.x",
  ...
}
```

### Paso 2 - Declarar el bloque principal en su aplicación

Agregue el bloque `add-to-cart-info` donde requiera utilizarlo dentro de su aplicación. Por ejemplo: 

```json
{
  "add-to-cart-info": {
  ...  
  }
}
```

## Customización

Para aplicar personalizaciones de CSS en este y otros bloques, siga la guía [Uso de identificadores de CSS para la personalización de la tienda](https://developers.vtex.com/docs/guides/vtex-io-documentation-using-css-handles-for-store-customization).


| CSS HANDLES |
| -- |
| `container` |
| `container__item` |
| `container__img` |
| `container__item__info` |
| `container__title` |
| `item__img` |
| `item__brand` |
| `item__name` |
| `item__code` |
| `item__price` |
| `container__buttons` |
| `button__back` |
| `button__cart` |

## Colaboradores

- **Alan Agustín Huismann**