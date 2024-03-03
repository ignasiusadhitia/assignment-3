export default {
    state: {
        cart: [],
    },
    getters: {
        getCart: (state) => {
            return state.cart;
        },
        getProductCountInCart: (state) => (id) => {
            const itemInCart = state.cart.find((item) => item.id === id);
            return itemInCart ? itemInCart.count : 0;
        },
        getRemainingStock: (state) => (product) => {
            return (
                product.stock -
                (state.cart.find((item) => item.id === product.id)?.count || 0)
            );
        },
        getTotalCartCount: (state) => {
            return state.cart.reduce((total, item) => total + item.count, 0);
        },
        getTotalCartPrice: (state) => () => {
            return state.cart.reduce(
                (total, item) => total + item.price * item.count,
                0
            );
        },
    },
    actions: {
        addToCart(context, payload) {
            context.commit("ADD_TO_CART", payload);
        },
        removeFromCart(context, payload) {
            context.commit("REMOVE_FROM_CART", payload);
        },
        deleteCartItem(context, payload) {
            context.commit("DELETE_CART_ITEM", payload);
        },
        updateCartItemCount(context, payload) {
            context.commit("UPDATE_CART_ITEM_COUNT", payload);
        },
        clearCart(context) {
            context.commit("CLEAR_CART");
        },
    },
    mutations: {
        ADD_TO_CART(state, payload) {
            const { id, name, imgUrl, stock, price } = payload;
            const existingItem = state.cart.find((item) => item.id === id);
            if (existingItem) {
                if (existingItem.count < stock) {
                    existingItem.count++;
                } else {
                    alert("No more stock available for this product!");
                }
            } else {
                state.cart.push({
                    id,
                    name,
                    imgUrl,
                    price,
                    stock,
                    count: 1,
                });
            }
        },
        REMOVE_FROM_CART(state, payload) {
            const index = state.cart.findIndex((item) => item.id === payload);
            if (index !== -1) {
                state.cart[index].count--;
                if (state.cart[index].count === 0) {
                    state.cart.splice(index, 1);
                }
            }
        },
        DELETE_CART_ITEM(state, payload) {
            const index = state.cart.findIndex((item) => item.id === payload);
            state.cart.splice(index, 1);
        },
        UPDATE_CART_ITEM_COUNT(state, payload) {
            const index = state.cart.findIndex(
                (item) => item.id === payload.id
            );
            if (index !== -1) {
                let newCount = payload.count;
                if (newCount <= 0 || isNaN(newCount)) {
                    alert("You can't add less than 1 for this product.");
                    newCount = 1;
                } else if (newCount > payload.stock) {
                    alert(
                        `You can't add more than the available stock (${payload.stock}) for this product.`
                    );
                    newCount = payload.stock;
                } else {
                    state.cart[index].errorMesage = "";
                }
                state.cart[index].count = newCount;
            }
        },
        CLEAR_CART(state) {
            state.cart = [];
        },
    },
};
