<template>
  <div class="header">
    <div
      class="header__logo"
      :class="[
        'header__logo',
        {
          'header__logo-light': theme === 'light',
        },
      ]"
      :style="{
        backgroundImage: `url(${require(`@/assets/header/${logo}.png`)})`,
      }"
    ></div>
    <div
      :class="[
        'header__border',
        {
          'header__border-light': theme === 'light',
        },
      ]"
    >
      <div
        :class="[
          'header__controls',
          {
            'header__controls-light': theme === 'light',
          },
        ]"
      >
        <span
          @click="router.push({ name: 'visualization-first' })"
          :class="[
            {
              header__btn: theme !== 'light',
              'header__btn-light': theme === 'light',
            },
            {
              header__btn_active:
                (route.name === 'visualization-first' ||
                  route.name === 'visualization-second') &&
                theme !== 'light',
              'header__btn-light_active':
                (route.name === 'visualization-first' ||
                  route.name === 'visualization-second') &&
                theme === 'light',
            },
          ]"
          >Визуализация</span
        >
        <span
          @click="router.push({ name: 'app' })"
          :class="[
            {
              header__btn: theme !== 'light',
              'header__btn-light': theme === 'light',
            },
            {
              header__btn_active: route.name === 'app' && theme !== 'light',
              'header__btn-light_active':
                route.name === 'app' && theme === 'light',
            },
          ]"
          >Приложение</span
        >
        <span
          @click="router.push({ name: 'streaming' })"
          :class="[
            {
              header__btn: theme !== 'light',
              'header__btn-light': theme === 'light',
            },
            {
              header__btn_active:
                route.name === 'streaming' && theme !== 'light',
              'header__btn-light_active':
                route.name === 'streaming' && theme === 'light',
            },
          ]"
          >Стриминг</span
        >
        <span
          @click="router.push({ name: 'profile' })"
          :class="[
            {
              header__btn: theme !== 'light',
              'header__btn-light': theme === 'light',
            },
            {
              header__btn_active: route.name === 'profile' && theme !== 'light',
              'header__btn-light_active':
                route.name === 'profile' && theme === 'light',
            },
          ]"
          >Профиль</span
        >
        <img
          v-if="theme === 'light'"
          @click="router.push({ name: 'search' })"
          :class="[
            'header__search-light',

            {
              'header__search-light_active': route.name === 'search',
            },
          ]"
          src="@/assets/icons/search-light.svg"
          height="18"
          width="18"
          alt="search"
        />
        <img
          v-else
          @click="router.push({ name: 'search' })"
          :class="[
            'header__search',

            {
              header__search_active: route.name === 'search',
            },
          ]"
          src="@/assets/icons/search.svg"
          height="18"
          width="18"
          alt="search"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, toRef } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const props = defineProps<{
  theme?: "light";
}>();

const theme = toRef(props, "theme");

const logo = computed(() => {
  if (theme.value === "light") return "logo-light";
  else return "logo";
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  margin-top: 2%;
  margin-left: 2%;
  margin-right: 2%;
  padding: 0 30px;
  align-items: center;
  justify-content: space-between;
  column-gap: 16px;
  height: 60px;
  &__logo {
    width: 95px;
    height: 100%;
    padding: 0 30px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 70%;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    &-light {
      border-color: rgba(0, 0, 0, 0.33);
    }
  }
  &__border {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 30px;
    &-light {
      border-color: rgba(0, 0, 0, 0.33);
    }
  }
  &__controls {
    display: flex;
    align-items: center;
    color: #fff;
    font-family: JuraMedium;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.4px;
    column-gap: 16px;
    justify-content: flex-end;
    &-light {
      color: #191919;
    }
  }
  &__btn {
    padding: 6px 12px;
    border-bottom: 1px solid transparent;
    cursor: pointer;
    &-light {
      padding: 6px 12px;
      border-bottom: 1px solid transparent;
      cursor: pointer;
      &:hover {
        border-bottom: 1px solid #191919;
      }
      &_active {
        scale: 1.2;
        border-bottom: 1px solid #191919;
      }
    }
    &:hover {
      border-bottom: 1px solid white;
    }
    &_active {
      scale: 1.2;
      border-bottom: 1px solid white;
    }
  }
  &__search {
    padding: 8px;
    border-bottom: 1px solid transparent;
    cursor: pointer;
    &-light {
      padding: 8px;
      border-bottom: 1px solid transparent;
      cursor: pointer;
      &:hover {
        border-bottom: 1px solid #191919;
      }
      &_active {
        scale: 1.2;
        border-bottom: 1px solid #191919;
      }
    }
    &:hover {
      border-bottom: 1px solid white;
    }
    &_active {
      scale: 1.2;
      border-bottom: 1px solid white;
    }
  }
}
</style>
