<template>
    <input
        :type="type"
        :value="value"
        class="form-control form-control-sm"
        @input="onInputHandler(parseInt($event.target.value))"
    />
</template>

<script>
export default {
    emits: ["emit-change"],
    props: {
        type: {
            type: String,
        },
        value: {
            type: Number,
        },
    },
    methods: {
        onInputHandler(newValue) {
            this.$emit("emit-change", newValue);
        },
    },
};
</script>

<style scoped>
input {
    width: 3rem;
    text-align: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}
</style>
