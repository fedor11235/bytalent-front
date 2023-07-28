<template>
  <InputControl icon="integration" name="website" v-model="website" />
  <InputControl icon="integration" name="telegram" v-model="telegram" />
  <InputControl icon="integration" name="instagram" v-model="instagram" />
  <InputControl icon="integration" name="twitter" v-model="twitter" />
  <InputControl icon="integration" name="behance" v-model="behance" />
  <InputControl icon="integration" name="artstation" v-model="artstation" />

  <div @click="handlerSaveLinks" class="links-save">Сохранить</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InputControl from "@/components/controls/InputControl";
import linksService from "@/services/linksService";

const website = ref(false);
const telegram = ref(false);
const instagram = ref(false);
const twitter = ref(false);
const behance = ref(false);
const artstation = ref(false);

linksService.getLinks().then((res) => {
  website.value = res.website ? res.website : false;
  telegram.value = res.telegram ? res.telegram : false;
  instagram.value = res.instagram ? res.instagram : false;
  twitter.value = res.twitter ? res.twitter : false;
  behance.value = res.behance ? res.behance : false;
  artstation.value = res.artstation ? res.artstation : false;
});

function handlerSaveLinks(val: string) {
  linksService.setLinks({
    website: website.value,
    telegram: telegram.value,
    instagram: instagram.value,
    twitter: twitter.value,
    behance: behance.value,
    artstation: artstation.value,
  });
}
</script>

<style lang="scss" scoped>
.links-save {
  padding: 8px 12px;
  font-family: JuraMedium, sans-serif;
  font-size: 1.8vh;
  color: rgba(255, 255, 255, 0.56);
  margin-right: 5%;
  margin-top: 18px;
  float: right;
  width: 30%;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.56);
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    color: white;
    border-color: white;
  }
}
</style>
