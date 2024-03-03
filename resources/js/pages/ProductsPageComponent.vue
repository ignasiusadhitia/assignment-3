<template>
    <products-list-component :products="products" />
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data: function () {
        return {
            isModalVisible: false,
        };
    },
    computed: {
        ...mapGetters({
            products: "getProducts",
            cart: "getCart",
            totalCartCount: "getTotalCartCount",
        }),
    },
    methods: {
        addToCartHandler(product) {
            this.$store.dispatch("addToCart", product);
        },
    },
};
</script>

<style></style>
