<template>
    <div class="d-flex justify-content-end my-2">
        <button
            v-if="cart.length"
            @click="clearCartHandler"
            class="btn btn-outline-danger"
        >
            Clear Cart
        </button>
    </div>
    <div>
        <cart-list-component :cart="cart" />
    </div>
    <div v-if="cart.length" class="mt-3 d-flex justify-content-end">
        <div>
            <div>
                Total item:
                <span class="fw-bold">{{ totalCartCount }}</span>
            </div>
            <div>
                Total price:
                <span class="fw-bold">Rp. {{ totalCartPrice() }}</span>
            </div>
        </div>
    </div>
    <div
        v-else
        class="d-flex flex-column justify-content-center text-container text-center"
    >
        <h2>Empty cart.</h2>
        <p>Please add item.</p>
    </div>
    <div class="d-flex m-2 gap-2 justify-content-end">
        <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="backHandler"
        >
            Back
        </button>
        <button
            v-if="cart.length > 0 && !paymentMessageVisible"
            type="button"
            class="btn btn-primary"
            @click="checkoutHandler"
        >
            Checkout
        </button>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            cart: "getCart",
            totalCartCount: "getTotalCartCount",
            totalCartPrice: "getTotalCartPrice",
        }),
    },
    methods: {
        clearCartHandler() {
            this.$store.dispatch("clearCart");
        },
        backHandler() {
            this.$router.push({ name: "products" });
        },
        checkoutHandler() {
            this.$router.push({ name: "checkout" });
            this.clearCartHandler();
        },
    },
};
</script>

<style scoped>
.text-container {
    height: 234px;
}
</style>
