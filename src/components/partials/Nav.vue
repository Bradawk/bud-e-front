<template>
  <div>
    <div id="menu">
      <ul id="slide-out" class="side-nav fixed show-on-large-only">
        <div class="side-container">
          <img src="/static/img/lumberjack.png" />
          <div>
                <span> Welcome, </span><br>
                <span style="font-weight: bold; font-size:1.2em"> Super User </span>
          </div>
        </div>
        <li><router-link :to="{name: 'Index'}"><i class="material-icons">home</i>Home</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Nav',
  data () {
    return {
      funcs: ''
    }
  },
}
</script>
