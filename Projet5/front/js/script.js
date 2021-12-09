async function displayProducts(products) {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        
    }
}



async function getProducts () {

    const response = await fetch('http://localhost:3000/api/products')
    productList = await response.json();
    await displayProducts(productList);
}