<template>
  <div ref="drop" class="locate-cmpt">
    <div v-show="isShowMap" id="map"></div>
    <img
      v-if="!isOpen"
      @click="handlerOpenMap"
      class="locate-cmpt_icon"
      :src="require(`@/assets/icons/${icon}.svg`)"
      height="24"
      width="24"
      alt="icon"
    />
    <div
      @click="handlerOpenDrop"
      class="locate-cmpt__enter"
      :style="styleDropDown"
      :placeholder="placeholder"
    >
      {{ activElem ? activElem : placeholder }}
    </div>
    <div v-if="isOpen" class="locate-cmpt__items">
      <div class="locate-cmpt__scroll">
        <input
          class="locate-cmpt__input"
          :style="styleItem"
          v-model="searchLocate"
        />
        <div
          v-for="item in listItemSearch"
          :key="item"
          @click="handlerChooseItem(item)"
          :style="styleItem"
          class="locate-cmpt__item"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { ref, computed, onMounted } from "vue";
// import projectService from "@/services/projectService";

// const tokenMap = "ca82b9d6-11a7-4156-bb2e-179a6ab45654";
// const tokenMap = "4be55f9e-9e12-4365-8e03-f54341d1713b";
const tokenMap = "efca8882-b520-4d9f-b688-bc5b7cf00149";
const tokenData = "2434b854869e51278c13dd76c38c075ee12a49c5";

let myMap: any;

const props = defineProps<{
  modelValue: string;
  placeholder: string;
  paddingX: string;
  paddingY: string;
  icon: string;
  listItem: string[];
  selectAdress?: (value: string) => void;
}>();

// projectService.updateProject(props.idProject, {
//       address: address.value,
//     });

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const searchLocate = ref("");
const activElem = ref("");
const isOpen = ref();
const isShowMap = ref(false);
const drop: Ref<HTMLDivElement | null> = ref(null);

const styleDropDown = computed(() => {
  return {
    paddingLeft: props.paddingX,
    paddingRight: props.paddingX,
    paddingTop: props.paddingY,
    paddingBottom: props.paddingY,
  };
});
const styleItem = computed(() => {
  return { marginLeft: props.paddingX, marginRight: props.paddingX };
});

const listItemSearch = computed(() => {
  if (searchLocate.value) {
    return props.listItem.filter((item) =>
      item.toLowerCase().includes(searchLocate.value.toLowerCase())
    );
  }
  return props.listItem;
});

function handlerOpenDrop() {
  isOpen.value = true;
}

function handlerChooseItem(item: string) {
  isOpen.value = false;
  activElem.value = item;
  emit("update:modelValue", activElem.value);
}

function handlerOpenMap() {
  isShowMap.value = !isShowMap.value;
  console.log("open");
}

function postLoadFunction() {
  /* eslint-disable */
  ymaps.ready(init);
  function init(){
    /* eslint-disable */
    myMap = new ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 7,
    },
      {
        searchControlProvider: 'yandex#search'
      }
    );

    myMap.events.add('click', function (e) {
        var coords = e.get('coords');
        loadAddress(coords[0], coords[1]);
    });
  
    // var accessor = myMap.cursors.push("arrow");
  }
}

function loadAddress(lat: any, lon: any) {
  console.log(lat, lon)
  const response = geolocate(lat, lon);
  myMap.geoObjects.removeAll()
  myMap.geoObjects.add(new ymaps.Placemark([lat, lon]))
  if(response) {
    console.log(response)
    activElem.value = response
    emit("update:modelValue", response);
    // props.selectAdress(response)
  } else {
    alert('вы выбрали место без адресса на карте')
  }
}

function geolocate(lat: any, lon: any) {
  const serviceUrl = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
  const request = {
    "lat": lat,
    "lon": lon
  };
  const req = new XMLHttpRequest();
  req.open("POST", serviceUrl, false);
  req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  req.setRequestHeader("Authorization", "Token " + tokenData);
  req.send(JSON.stringify(request));

  const responseJSON = JSON.parse(req.response)

  if(responseJSON.suggestions.length > 0) {
    return responseJSON.suggestions[0].value
  } else {
    return false
  }
}

onMounted(() => {
  const script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute(
    "src",
    `https://api-maps.yandex.ru/2.1/?apikey=${tokenMap}&lang=ru_RU`
  );
  script.addEventListener("load", postLoadFunction);
  if(drop.value) {
    drop.value.appendChild(script);
  }
})
</script>

<style lang="scss" scoped>
#map {
  position: absolute;
  right: 0;
  width: 300px;
  height: 300px;
  z-index: 1;
  transform: translateX(80%);
}
.locate-cmpt {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  border-radius: 40px;
  border: 3px solid #fff;
  left: 0;
  background-color: #fff;
  color: #191919;
  font-family: JuraMedium;
  font-size: 19px;
  line-height: 125%;
  letter-spacing: -0.76px;
  cursor: pointer;
  &_icon {
    position: absolute;
    right: 32px;
    top: 50%;
    transform: translateY(-50%);
  }
  &__scroll {
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    max-height: 300px;
    margin-right: 16px;
  }
  &__items {
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    background-color: white;
    padding: 12px 0;
    border: 3px solid #191919;
    border-radius: 20px;
    z-index: 1;
    max-height: 300px;
  }
  &__input {
    border: none;
    outline: none;
    color: #191919;
    font-family: JuraMedium;
    font-size: 19px;
    line-height: 125%;
    letter-spacing: -0.76px;
  }
  &__item {
    &:hover {
      padding: 0 12px;
      border-radius: 16px;
      box-shadow: -3px -1px 8px 0px rgba(26, 26, 26, 0.25),
        4px 6px 12px 0px rgba(26, 26, 26, 0.25),
        1px 1px 2px 0px rgba(232, 232, 232, 0.5) inset;
    }
  }
}
</style>
