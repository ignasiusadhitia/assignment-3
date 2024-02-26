<template>
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <img
                    :src="product.imgUrl"
                    class="img-fluid rounded-start"
                    :alt="product.name"
                />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ product.name }}</h5>
                    <p class="card-text">
                        {{ product.desc }}
                    </p>
                    <div class="d-flex flex-row justify-content-between w-100">
                        <p class="card-text">
                            <small class="text-body-secondary"
                                >Stock: {{ getRemainingStock(product) }}</small
                            >
                        </p>
                        <div>
                            <div>
                                <sup>Rp. </sup>
                                <span class="h4">{{ product.price }}</span>
                            </div>
                            <button
                                class="btn btn-primary"
                                @click="addToCart(product)"
                                :disabled="
                                    product.stock === 0 ||
                                    product.stock <=
                                        getProductCountInCart(product.id)
                                "
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ["emit-add-to-cart"],
    props: {
        product: {
            type: Object,
            required: true,
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
