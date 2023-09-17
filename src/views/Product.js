import Banner from "../sections/product/Banner.js";
import Summary from "../sections/product/Summary.js";
import productsMap from "../data/products-map.js";

function Product() {
    let productID = window.location.href.split("/").pop()
    return (
        <div>
            <Banner
                title={productsMap[productID].title}
                subtitle={productsMap[productID].subtitle}
                imageSrc={productsMap[productID].imageSrc}
                productsMap={productsMap[productID].imageAlt}
            />
            <Summary
                title={productsMap[productID].title}
                summary={productsMap[productID].summary}
            />
        </div>
    );
};

export default Product;