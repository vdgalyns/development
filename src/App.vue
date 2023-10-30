<template>
  <div :class="classes.container">
    <Header />

    <div :class="classes.projects">
      <Project
          v-for="project in projects"
          :key="project.id"
          :project="project"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Project from './components/Project.vue'
import { onMounted, ref } from 'vue'
import type { Project as ProjectType } from './types/project.ts'
import api from './api'

const projects = ref<ProjectType[]>([])
const fetchProjects = () => {
  return api.fetchProjects()
      .then((data) => {
        projects.value = data.projects
      }).catch((e) => {
        console.log(e)
      })
}
onMounted(() => {
  fetchProjects()
})
</script>

<style module="classes">
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px;
}
.projects {}
</style>
