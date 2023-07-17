<template>
  <div class="header">
    <LogoComponent />
    <LineLeftComponent />
    <ButtonComponent :url="urlButton" :urlHover="urlButtonHover"/>
    <LineRightComponent />
    <BurgerComponent :type="type" @click="emit('switch')" />
  </div>
</template>

<script setup lang="ts">
import BurgerComponent from "@/components/BurgerComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import LineRightComponent from "@/components/LineRightComponent.vue";
import LineLeftComponent from "@/components/LineLeftComponent.vue";
import LogoComponent from "@/components/LogoComponent.vue";

const emit = defineEmits(['switch'])

defineProps<{
  urlButton: string
  urlButtonHover: string
  type: 'burger' | 'cross'
}>()

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  padding-top: 2%;
  padding-left: 2%;
  padding-right: 2%;
  align-items: center;
  justify-content: space-between;
}
</style>
