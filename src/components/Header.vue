<template>
  <header :class="classes.header">
    <h2 :class="classes.title">
      Мои проекты
    </h2>
  </header>
</template>

<style module="classes">
.header {
  margin: 0 0 32px 0;
}
.title {
  font-size: 48px;
  text-decoration: underline;
}
</style>