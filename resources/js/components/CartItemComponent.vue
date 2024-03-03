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
                    <div class="d-flex justify-content-between">
                        <h5 class="card-title">
                            {{ product.name }}
                        </h5>
                        <span
                            class="text-danger delete-button"
                            @click="deleteCartItemHandler(product.id)"
                        >
                            Delete
                        </span>
                    </div>
                    <div>
                        <small class="text-body-secondary">Qty: </small>
                        <div class="d-flex gap-1">
                            <button
                                @click="removeFromCartHandler(product.id)"
                                class="btn btn-primary input-button"
                            >
                                -
                            </button>
                            <input-component
                                type="number"
                                :value="product.count"
                                @emit-change="updateCartItemCountHandler"
                            />
                            <button
                                @click="addToCartHandler(product)"
                                class="btn btn-primary input-button"
                            >
                                +
                            </button>
                        </div>

                        <div class="mt-2 d-flex justify-content-between">
                            <span>Price: Rp. {{ product.price }}</span>
                            <span
                                >Subtotal: Rp.
                                {{ getCartItemSubtotal(product) }}</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
        },
    },
    methods: {
        removeFromCartHandler(id) {
            this.$store.dispatch("removeFromCart", id);
        },

        addToCartHandler(product) {
            this.$store.dispatch("addToCart", product);
        },

        deleteCartItemHandler(id) {
            this.$store.dispatch("deleteCartItem", id);
        },

        updateCartItemCountHandler(newValue) {
            this.$store.dispatch("updateCartItemCount", {
                ...this.product,
                count: newValue,
            });
        },

        getCartItemSubtotal(product) {
            const { count, price } = product;

            return count * price;
        },
    },
};
</script>

<style scoped>
.delete-button {
    cursor: pointer;
}

.input-button {
    width: 3rem;
}
</style>
