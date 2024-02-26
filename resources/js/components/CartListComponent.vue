<template>
    <cart-item-component
        v-for="product in cart"
        :key="product.id"
        :product="product"
        @emit-remove-from-cart="removeFromCart"
        @emit-add-to-cart="addToCart"
        @emit-delete-cart-item="deleteCartItem"
        @emit-update-cart-item-count="updateCartItemCount"
    />
</template>

<script>
export default {
    emits: [
        "emit-remove-from-cart",
        "emit-add-to-cart",
        "emit-delete-cart-item",
        "emit-update-cart-item-count",
    ],
    props: {
        cart: {
            type: Array,
            required: true,
        },
    },
    methods: {
        removeFromCart(id) {
            this.$emit("emit-remove-from-cart", id);
        },
        addToCart(product) {
            this.$emit("emit-add-to-cart", product);
        },
        deleteCartItem(id) {
            this.$emit("emit-delete-cart-item", id);
        },
        updateCartItemCount(product) {
            this.$emit("emit-update-cart-item-count", product);
        },
    },
};
</script>

<style></style>
