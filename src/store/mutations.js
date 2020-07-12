export default {
    addCounter(state, oldProduct) {
        oldProduct.counter += 1
        console.log('+1');
    },
    addToCart(state, product) {
        state.productList.push(product);
        console.log('加入成功');
    },
}
