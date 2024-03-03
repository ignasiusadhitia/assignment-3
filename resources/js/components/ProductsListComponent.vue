<template>
    <div class="my-3">
        <div v-for="product in products" :key="product.id" class="my-2">
            <product-card-component :product="product" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        products: {
            type: Array,
        },
    },
};
</script>
