<template>
    <div class="my-2">
        <input :type="this.type" :placeholder="this.placeholder" class="input px-2 bg-gray-200 w-full" :readonly="this.readonly"/>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

@Component
export default class TextInput extends Vue {
    @Prop({default: 'text', type: String}) placeholder!:String
    @Prop({default: false, type: Boolean}) readonly!:Boolean
    @Prop({default: 'text', type: String}) type!:String
}
</script>
<style lang="postcss" scoped>
.input{
    height: 45px;
    border-radius: 8px;
}
</style>
