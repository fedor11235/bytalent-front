<template>
  <div v-if="projects" class="projects-container">
    <div class="projects-outline">
      <div v-for="item in projects" :key="item.date" class="projects">
        <span class="projects_text">{{ item.text }}</span>
        <span class="projects_date">{{ "на проверке" }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import projectService from "@/services/projectService";

const projects = ref();

projectService
  .getActiveProjects()
  .then((res) => (projects.value = res.projects));
</script>

<style lang="scss" scoped>
.projects-container {
  width: 100%;
  height: 100%;
  .projects-outline {
    position: relative;
    background-color: #181818;
    min-height: 40%;
    align-items: center;
  }
  .projects {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 10%;
    right: 10%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: auto;
    &_text {
      width: 75%;
      color: #fff;
      font-weight: 300;
      display: flex;
      text-align: left;
      font-family: JuraMedium, sans-serif;
    }
    &_date {
      width: 25%;
      color: #757575;
      text-align: right;
      font-family: MontserratRegular400, sans-serif;
      font-size: 1.5vh;
      line-height: 15px;
    }
  }
}
</style>
