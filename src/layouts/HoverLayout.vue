<template>
  <div
    class="hover-layout"
    :style="{
      backgroundImage: `url(${require(`@/assets/backgrounds/${bg}`)})`,
    }"
  >
    <div class="hover-layout__backdrop">
      <HeaderComponent :theme="theme" :noHover="noHover" />
      <div class="hover-layout__content">
        {{ content }}
        <div v-if="subcontent" class="hover-layout__subcontent">
          {{ subcontent }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/common/HeaderComponent.vue";

defineProps<{
  bg: string;
  content: string;
  subcontent?: string;
  theme?: "light";
  noHover?: boolean;
}>();
</script>

<style lang="scss" scoped>
.hover-layout {
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 2;
  &__backdrop {
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.58);
    backdrop-filter: blur(7px);
  }
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 35%;
    color: #fff;
    font-family: JuraSemiBold;
    font-size: 4.6vh;
    font-style: normal;
    // font-weight: 600;
    line-height: 125%;
    letter-spacing: -1.5px;
    transform: translateY(-25%);
    transform-origin: center;
  }
  &__subcontent {
    color: #fff;
    font-family: JuraRegular;
    font-size: 3.7vh;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: -1.2px;
  }
}
</style>
