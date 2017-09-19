<template>
  <div>
      <!-- HEADER BAR -->
      <div class="row header-resume">
        <div class="col s2">
          <small> Total of inputs </small><br>
          <span> {{count}} </span><br>
        </div>
      </div>
      <div v-if="error">
          <h1> Error </h1>
        </div>
        <div v-else>
          <div class="row main-content">
                <div class="col s12">
                      <form v-on:submit.prevent="addThing">     
                        <button class="btn left waves-effect"><i class="material-icons">add</i></button>
                      </form>
                      <div class="Nfloat"></div>
                      <div v-if="count">
                        <transition-group name="slide-fade" tag="p">
                          <div v-for="thing in things" v-bind:key="thing" class="col s3 input-div">
                            <router-link class="hvr-grow" :to="{ name: 'Thing', params: { id: thing._id }}" tag="img" src="/static/img/thing.png"></router-link>
                          </div>
                        </transition-group>
                      </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      count: '',
      things: [],
      error: ''
    }
  },
  mounted(){
    this.$http.get(process.env.API_URL+'/things')
      .then(response => {
        this.count = response.data.length;
        this.things = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
  },
  methods: {
    addThing(){
      this.$http.post(process.env.API_URL+'/things')
        .then(response => {
          this.things.push(response.data.thing);
          this.count += 1;
          Materialize.toast(response.data.message, '3000');
        })
        .catch((error) =>{
          Materialize.toast(error, '3000');
        })
    }
  }
}
</script>

<style scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  } 

  /* Grow */
  .hvr-grow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
  }
  .hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    cursor: pointer;
  }
</style>