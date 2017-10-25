<template>
  <div class="container">
    <div class="row">
      <div class="col s5">
        <h1>{{thing.name}}</h1>
        <p>
          <span>IP : </span> {{thing.ip}}</p>
        <p>
          <span>MAC : </span> {{thing.mac}}</p>
        <p>
          <span>State : </span> {{thing.state}}</p>
        <p>
          <span>Last update : </span> {{thing.updated_date}}</p>
      </div>
      <div class="col s5">
        <h2>Actions</h2>
        <div v-for="action in thing.actions" v-bind:key="action">
          <button style="margin-bottom: 5%;" v-on:click="trigger_func(action)" class="btn red lighten-2 col s12">{{action}}</button>
        </div>
        <div class="col s12 center">
          <div v-if="this.thing.state == 1">
            <img src="/static/img/light_on.png" />
          </div>
          <div v-else>
            <img src="/static/img/light_off.png" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import ThingForm from './forms/ThingForm'

export default {
  name: 'Thing',
  components: {
    'thingform': ThingForm
  },
  data() {
    return {
      thing: '',
    }
  },
  mounted() {
    this.$http.get('https://bud-e.cfapps.io' + '/' + this.$route.params.id)
      .then(response => {
        this.thing = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
  },
  methods: {
    trigger_func(action) {
      this.trigger = action;
      this.$http.post('https://bud-e.cfapps.io/speech/request', { 'action': this.trigger, 'id': this.$route.params.id })
        .then(response => {
          this.$router.go('/thing/' + this.$route.params.id);
        })
        .catch((error) => {
          Materialize.toast(error, '3000');
        })
    },
  }
}
</script>

<style scoped>
.container {
  padding-top: 10%;
}

.col.s5 {
  background: #f9f9f9;
  border-radius: 2px;
  margin: 1%;
  height: 400px;
  max-height: 400px;
  padding: 0% 2%;
}

span {
  font-weight: 800;
}

h1,
h2 {
  font-size: 1.5em;
  text-align: center;
  color: #AB5151;
  text-transform: uppercase;
  font-style: bold;
  font-weight: 800;
}

button {
  margin-top: 5%;
}
</style>
