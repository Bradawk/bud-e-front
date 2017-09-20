<template>
    <div>
        <div class="row">
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
<<script>
export default {
  name: 'ThingForm',
  data () {
    return {
      thing: '',
      func: []
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
      console.log('lol')
    }
  }
}
</script>
