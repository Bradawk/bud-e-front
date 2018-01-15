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
        <li><a v-on:click='logout'><i class="material-icons">power_settings_new</i>Logout</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
import auth from '../../auth'

export default {
  name: 'Nav',
  data () {
    return {
      funcs: ''
    }
  },
  methods:{
    logout(){
      auth.logout(this, '/login')
    }
  }
}
</script>
