const initialState = {
    items: {},
    totalAmount: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const product = action.payload;
            const price = product.price;
            const title = product.title;

            let productToAdd;
            if (state.items[product.id]) {
                productToAdd = {
                    'quantity': state.items[product.id]['quantity'] + 1 ,
                    'price': price,
                    'title': title,
                    'sum': state.items[product.id]['sum'] + price
                }

            } else {
                productToAdd = {
                    'quantity': 1,
                    'price': price,
                    'title': title,
                    'sum': price
                }
            }
            return {
                items: {...state.items, [product.id]: productToAdd},
                totalAmount: state.totalAmount + price
            }
    }
    return state;

}