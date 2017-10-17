<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/partials/Nav'
export default {
  name: 'app',
  components:{
    'navigation': Nav
  }
}
</script>
