

shoppingCart = [
    { name: 'pc', price: 17000 },
    { name: 'mobile', price: 13400 },
    { name: 'tablet', price: 12200 },
    { name: 'laptop', price: 11000 },
    { name: 'Dsektop', price: 6000 }
]

function lawestPrice(products) {
    let lowProduct = products[0];
    let lowProductPrice = lowProduct.price;
    let lowProductCost = lowProduct.price;

    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        if ((lowProductPrice > product.price)) {

            lowProductCost = product.price;
        }
        else if (lowProductPrice < product.price) {
            lowProductCost = lowProductPrice;
        }
        else {
            lowProductCost = lowProduct.price;
        }

    }
    console.log(lowProductCost);
}

lawestPrice(shoppingCart);