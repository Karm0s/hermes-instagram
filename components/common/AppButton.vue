<template>
  <button class="button" @click.prevent="emitClickEvent" :class="[this.secondary? 'button--secondary' : 'button--primary', this.$mq ==='sm'? 'button--mobile' : '']">
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class AppButton extends Vue {
  @Prop({ default: false, type: Boolean }) readonly secondary!: Boolean

  emitClickEvent() {
    this.$emit('button-click')
  }
}
</script>

<style lang="postcss" scoped>
.button {
  min-width: 120px;
  height: 45px;
  border-radius: 10px;
  transition: all 0.2s ease-in;
  @apply text-sm font-bold;
}
.button--primary {
  background: linear-gradient(96.5deg, #5142FF 0%, rgba(0, 224, 255, 0.88) 100%);
  color: #ffffff;
}
.button--secondary::before{
  content: ' ';
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: -1;
  margin: -2px; /* !importanté */
  border-radius: inherit; /* !importanté */
  background: linear-gradient(96.5deg, #5142FF 0%, rgba(0, 224, 255, 0.88) 100%);

}
.button--secondary {
  position: relative;
  background: #ffffff;
  background-clip: padding-box;
  border: solid 2px transparent; 
  color: #5142FF;
}
.button--mobile {
  /* width: 120px; */
  @apply text-xs;
}
</style>
