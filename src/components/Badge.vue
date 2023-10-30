<template>
  <div :class="classes.badge">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<style module="classes">
.badge {
  padding: 4px 16px;
  border-radius: 100px;
  width: min-content;
  font-weight: 500;
  font-size: 14px;
  background: #1e88e5;
  color: #ffffff;
}
</style>