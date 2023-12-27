<template>
  <div :class="classes.project">
    <h4 :class="classes.name">
      {{ project.name }}
    </h4>
    <p :class="classes.description">
      {{ project.description }}
    </p>
    <div :class="classes.stack">
      <Badge
          v-for="stack in project.stack"
          :key="stack"
          :text="stack"
      />
    </div>
    <p :class="classes.publishedAt">
      Опубликовано: {{ publishedAt }}
    </p>
    <div :class="classes.links">
      <a :href="project.github" target="_blank" :class="classes.link">
        GitHub
      </a>
      <a v-if="project.site" :href="project.site" target="_blank" :class="classes.link">
        Site
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import Badge from './Badge.vue'
import type { Project } from '../types/project.ts'
import { computed } from 'vue'
import { createFormattedDate } from '../utils/formattedDate.ts'

const props = defineProps<{
  project: Project
}>()

const publishedAt = computed(() => createFormattedDate(props.project.publishedAt))
</script>

<style module="classes">
.project {
  max-width: 720px;
}
.project:not(:last-child) {
  margin: 0 0 16px 0;
}
.name {
  font-size: 24px;
  margin: 0 0 4px 0;
}
.description {
  font-size: 18px;
  margin: 0 0 8px 0;
}
.stack {
  display: flex;
  flex-flow: row wrap;
  gap: 8px;
  margin: 0 0 8px 0;
}
.publishedAt {
  margin: 0 0 8px 0;
}
.links {
  display: flex;
  column-gap: 16px;
}
.link {
  padding: 8px 32px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  background: #fff;
  color: #000;
  text-decoration: none;
}
.link:hover {
  background: #eee;
}
</style>