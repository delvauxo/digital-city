import style from './product-list.module.css';

const ProductList = ({ products }) => {

    const productsJSX = products.map(

        product => {
            return (
                <li key={product.id}>{product.name} <span className={product.promo ? style.promo : undefined}>{product.price}</span></li>
            );
        }
    );

    return (
        <ul>
            {productsJSX}
        </ul>
    );

};

export default ProductList;