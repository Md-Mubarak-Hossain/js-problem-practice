

shoppingCart = [
    { name: 'pc', price: 15500 },
    { name: 'mobile', price: 14400 },
    { name: 'tablet', price: 12200 },
    { name: 'laptop', price: 52000 },
    { name: 'Dsektop', price: 42000 }
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

    }
    console.log(lowProductCost);
}

lawestPrice(shoppingCart);