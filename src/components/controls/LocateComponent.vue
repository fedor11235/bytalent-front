<template>
  <div ref="drop" class="locate-cmpt">
    <!-- <div v-show="isShowMap || isOpen" id="map"></div> -->
    <img
      class="locate-cmpt_icon"
      :src="require(`@/assets/icons/${icon}.svg`)"
      height="24"
      width="24"
      alt="icon"
    />
          <!-- id="suggest" -->
    <input
      :style="styleDropDown"
      @focus="handlerfocusSuggest"
      @blur="handlerblurSuggest"
      class="locate-cmpt__input"
      v-model="searchLocate"
    />
    <div id="suggest-test">
      {{ editLocate ? editLocate : searchLocate ? searchLocate : placeholder }}
    </div>
  </div>
</template>

<script setup lang="ts">
/* eslint-disable */
import type { Ref } from "vue";
import { ref, watch, computed, onMounted } from "vue";
// import projectService from "@/services/projectService";

const tokenGeo = "fe9870e6-e126-4b66-8ee8-78d9eff183e9";
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

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const searchLocate = ref("");
const editLocate = ref("");
const isOpen = ref(false);
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
// const styleItem = computed(() => {
//   return { marginLeft: props.paddingX, marginRight: props.paddingX };
// });
//   if (searchLocate.value) {
//     return props.listItem.filter((item) =>
//       item.toLowerCase().includes(searchLocate.value.toLowerCase())
//     );
//   }
//   return props.listItem;
// });

function handlerfocusSuggest() {
  isShowMap.value = true
}

function handlerblurSuggest() {
  isShowMap.value = false
}

// function postLoadFunction() {
//   ymaps.ready(init);

//   function init() {
//     const searchControl = new ymaps.control.SearchControl({
//       options: {
//         // Будет производиться поиск только по топонимам.
//         provider: 'yandex#map'
//       }
//     });
//     const yandexListResultList = ymaps.templateLayoutFactory.createClass([
//       "<style>#dropdawn {background-color: #fff;} .item{background-color: #fff; color: #191919; font-family: JuraMedium; font-size: 2vh; line-height: 125%; letter-spacing: -0.76px; padding: 4px 8px;}.item:hover{background-color: rgba(0, 0, 0, 0.1);}</style>",
//       "<div id='dropdawn'>",
//       "{% for item in state.items %}",
//       "<div class='item' data-value=\"{{ item.value }}\">{{ item.displayName }}</div>",
//       "{% endfor %}",
//       "</div>"
//     ].join(''), {
//       build: function () {
//         console.log('build')
//         const dropdawn = document.getElementById("dropdawn");
//         if (dropdawn) {
//           dropdawn.style.display = "block";
//         }
//         yandexListResultList.superclass.build.call(this);
//         this.itemSelectCallback = ymaps.util.bind(this.itemSelect, this);

//         const items = document.getElementsByClassName("item")
//         for (let index = 0; index < items.length; index += 1) {
//           if (index === 0) {
//             searchControl.search(items[index].innerText);
//             console.log(items[index].innerText)
//           }
//           items[index].addEventListener("click", this.itemSelectCallback)
//         }
//         if (items.length === 0) {
//           isOpen.value = false
//         } else {
//           isOpen.value = true
//         }
//       },
//       clear: function () {
//         console.log('clear')
//         const items = document.getElementsByClassName("item")
//         for (const item of items) {
//           item.removeEventListener("click", this.itemSelectCallback)
//         }
//         yandexListResultList.superclass.clear.call(this);
//       },
//       itemSelect: function (e: any) {
//         console.log('itemSelect')
//         const place = e.target.dataset.value
//         console.log("place: ", place)
//         searchControl.search(place);
//         searchLocate.value = place;
//         editLocate.value = place;
//         emit("update:modelValue", place);
//         const dropdawn = document.getElementById("dropdawn");
//         if (dropdawn) {
//           dropdawn.style.display = "none";
//         }
//         // const myGeocoder = ymaps.geocode(place);

//         // myGeocoder.then(
//         //   async function (res) {
//         //     const coordinates = res.geoObjects.get(0).geometry.getCoordinates();
//         //     const newPlacemark = new ymaps.Placemark(coordinates,
//         //       {
//         //         balloonContent: '<strong>' + place + '</strong>'
//         //       },
//         //       {
//         //         preset: 'islands#dotIcon',
//         //         iconColor: '#f1500b'
//         //       },
//         //       {});
//         //     myMap.geoObjects.removeAll()
//         //     myMap.geoObjects.add(newPlacemark);
//         //   }
//         // );
//       }
//     });


//     myMap = new ymaps.Map("map", {
//       center: [55.76, 37.64],
//       zoom: 7,
//     });

//     // Добавляем элемент управления на карту.
//     myMap.controls.add(searchControl);

//     myMap.events.add('click', function (e) {
//       var coords = e.get('coords');
//       loadAddress(coords[0], coords[1]);
//     });


//     new ymaps.SuggestView('suggest', {
//       offset: [0, 10],
//       layout: yandexListResultList
//     });
//   }
// }

// function loadAddress(lat: any, lon: any) {
//   console.log(lat, lon)
//   const response = geolocate(lat, lon);
//   myMap.geoObjects.removeAll()
//   myMap.geoObjects.add(new ymaps.Placemark([lat, lon], {
//     balloonContent: '<strong>' + response + '</strong>'
//   },
//     {
//       preset: 'islands#dotIcon',
//       iconColor: '#f1500b'
//     },))
//   if (response) {
//     editLocate.value = response
//     emit("update:modelValue", response);
//   } else {
//     alert('вы выбрали место без адресса на карте')
//   }
// }

// function geolocate(lat: any, lon: any) {
//   const serviceUrl = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
//   const request = {
//     "lat": lat,
//     "lon": lon
//   };
//   const req = new XMLHttpRequest();
//   req.open("POST", serviceUrl, false);
//   req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//   req.setRequestHeader("Authorization", "Token " + tokenData);
//   req.send(JSON.stringify(request));

//   const responseJSON = JSON.parse(req.response)

//   if (responseJSON.suggestions.length > 0) {
//     return responseJSON.suggestions[0].value
//   } else {
//     return false
//   }
// }

onMounted(() => {
  // const script = document.createElement("script");
  // script.setAttribute("type", "text/javascript");
  // script.setAttribute(
  //   "src",
  //   `https://api-maps.yandex.ru/2.1/?apikey=${tokenMap}&suggest_apikey=${tokenGeo}&lang=ru_RU`
  // );
  // script.addEventListener("load", postLoadFunction);
  // if (drop.value) {
  //   drop.value.appendChild(script);
  // }
})

watch(
  () => searchLocate.value,
  (newVal) => {
    editLocate.value = newVal;
  },
);
</script>

<style lang="scss" scoped>
#map {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 42vh;
  z-index: -1;
  pointer-events: all;
}

#suggest-test {
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  transform: translateY(-100%);
  pointer-events: none;
  border: 3px solid transparent;
  outline: none;
  color: #191919;
  font-family: JuraMedium;
  font-size: 19px;
  line-height: 125%;
  letter-spacing: -0.76px;
  width: 100%;
  padding: 1.48vh 1.6vw;
  padding-right: 5.6vw;
  text-wrap: nowrap;
  cursor: pointer;
}

.locate-cmpt {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  // border-radius: 40px;
  // border: 3px solid #fff;
  left: 0;
  background-color: #fff;
  color: #191919;
  font-family: JuraMedium;
  font-size: 2.59vh;
  line-height: 125%;
  letter-spacing: -0.76px;
  // overflow-x: hidden;
  // overflow-y: none;
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

  &__input {
    border: 3px solid #fff;
    outline: none;
    color: #fff;
    font-family: JuraMedium;
    font-size: 19px;
    line-height: 125%;
    letter-spacing: -0.76px;
    width: 100%;
    padding: 1.48vh 1.6vw;
    cursor: pointer;
    caret-color: #191919;
    padding-right: 5.6vw;

    // &::placeholder {
    //   color: #191919;
    //   font-family: JuraMedium;
    //   font-size: 19px;
    //   line-height: 125%;
    //   letter-spacing: -0.76px;
    // }

    &:focus-visible {
      border: 3px solid #191919;
      outline: 0;
    }
  }

  // &__item {
  //   &:hover {
  //     padding: 0 12px;
  //     // border-radius: 16px;
  //     box-shadow: -3px -1px 8px 0px rgba(26, 26, 26, 0.25),
  //       4px 6px 12px 0px rgba(26, 26, 26, 0.25),
  //       1px 1px 2px 0px rgba(232, 232, 232, 0.5) inset;
  //   }
  // }
}
</style>
