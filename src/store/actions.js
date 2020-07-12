export default {
    addProduct(context, product) {
        let oldProduct = context.state.productList.find(
            item => item.iid === product.iid
        );
        if (oldProduct) {
            // 数量加一
            context.commit('addCounter', oldProduct);
            // console.log(oldProduct);
        } else {
            // 加入新商品
            product.counter = 1;
            context.commit('addToCart',product)
        }
    }
}
