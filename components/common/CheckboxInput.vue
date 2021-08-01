<template>
    <div class="checkbox">
        <div class="checkbox__input" :class="this.checked ? 'checkbox__input--active' : ''">
            <input type="checkbox" name="checkbox" @click="this.boxClicked" />
            <fa icon="check" class="checkbox__control" :class="this.checked ? 'checkbox__control--visible' : ''" />
        </div>
        <div class="checkbox__label" :class="this.checked ? '' : 'text-gray-500'">
            <slot />
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

@Component
export default class CheckboxInput extends Vue {
    checked: boolean = true

    boxClicked() {
        this.checked = !this.checked
        this.$emit("box-checked", this.checked)
    }
}
</script>
<style lang="postcss" scoped>
.checkbox {
    @apply flex items-center;
}
.checkbox__input {
    position: relative;
    width: 25px;
    height: 25px;
    background-color: rgba(94, 94, 94, 0.1027);
    border-radius: 5px;
    transition: all 0.1s ease-in;
    @apply flex justify-center items-center;
}
.checkbox__input--active {
    @apply bg-red-200;
}
.checkbox__input input {
    position: absolute;
    opacity: 0;
    z-index: 1;
    top: 0;
    left: 0;
    width: 25px;
    height: 25px;
}
.checkbox__control {
    width: 15px;
    height: 15px;
    opacity: 0;
    z-index: 0;
    transform: scale(0);
    transition: all 0.1s ease-in;
    @apply text-xl;
}
.checkbox__control--visible {
    opacity: 1;
    transform: scale(1);
}
.checkbox__label {
    @apply ml-2;
}
</style>
