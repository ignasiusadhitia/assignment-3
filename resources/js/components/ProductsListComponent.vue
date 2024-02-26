<template>
    <div class="my-3">
        <div v-for="product in products" :key="product.id" class="my-2">
            <product-card-component
                :product="product"
                :get-remaining-stock="getRemainingStock"
                :get-product-count-in-cart="getProductCountInCart"
                @emit-add-to-cart="addToCart"
            />
        </div>
    </div>
</template>

<script>
export default {
    emits: ["emit-add-to-cart"],
    props: {
        products: {
            type: Array,
        },
        getRemainingStock: {
            type: Function,
        },
        getProductCountInCart: {
            type: Function,
        },
    },

    methods: {
        addToCart(product) {
            this.$emit("emit-add-to-cart", product);
        },
    },
};
</script>

<style></style>
