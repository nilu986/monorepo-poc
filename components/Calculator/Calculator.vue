<template>
  <div id="app">
    <navigation></navigation>
    <content></content>
  </div>
</template>

<script>
import Content from './components/Content.vue'
import Navigation from './components/Navigation.vue'

export default {
  name: 'Calculator',
  components: {
    Content,
    Navigation,
  }
}
</script>

<style>

</style>