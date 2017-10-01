<template>
    <div>
        <div v-if="load == true" class="black-screen">
          <loader></loader>
        </div>
        <div v-else class="row">
          <form class="col s12" v-on:submit.prevent="saveThing">
            <div class="row">
              <div class="input-field col s6">
                <i class="material-icons prefix">account_circle</i>
                <input id="icon_prefix" type="text" class="validate" v-model="thing.name">
              </div>
              <div class="input-field col s6">
                <i class="material-icons prefix">phone</i>
                <input id="icon_telephone" type="text" class="validate" v-model="thing.ip">
              </div>
              <div class="input-field col s6">
                <i class="material-icons prefix">phone</i>
                <input id="icon_telephone" type="text" class="validate" v-model="thing.mac">
              </div>
              <div class="input-field col s6">
                <i class="material-icons prefix">phone</i>
                <input id="icon_telephone" type="text" class="validate" v-model="thing.type">
              </div>
              <div class="input-field col s6">
                <button class="btn waves-effect waves-light"> SAVE </button>
              </div>
            </div>
          </form>
        </div>
    </div>
</template>
<script>
import Loader from '../loaders/Loader'

export default {
  name: 'ThingForm',
  components:{
    'loader': Loader
  },
  data () {
    return {
      thing: '',
      func: [],
      load: ''
    }
  },
  mounted(){
    this.$http.get(process.env.API_URL+'/things/'+this.$route.params.id)
        .then(response => {
           this.thing = response.data;
           this.func = response.data.func;
        })
        .catch(function (error) {
            console.log(error);
        });
  },
  methods: {
    saveThing(){
      this.load = true;
      this.$http.put(process.env.API_URL+'/things/'+this.$route.params.id, {
        'ip': this.thing.ip,
        'mac': this.thing.mac,
        'name': this.thing.name,
        'type': this.thing.type,
        'id': this.thing._id
      })
        .then(response => {
          this.load = false;
          this.$route.go('/thing/'+this.$route.params.id);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
}
</script>
