<template>
<v-app>
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">
    <v-app-bar
      app
      color="yellow accent-4"
      dark
    >
    <v-toolbar-title class="blacktext"><v-icon size="30" color="black" >mdi-star-circle</v-icon> HamiHam</v-toolbar-title>
    
    <v-tabs color="black">
      <v-spacer></v-spacer>
      <v-tab @click="washingmachine = false, hamiham=true">Hamilton</v-tab>
      <v-tab @click="washingmachine = true, hamiham=false">Washington</v-tab>
    </v-tabs>
    </v-app-bar>

    <v-main>
      <v-container v-if="hamiham">
      <mainpage @constClicked = "constitution = true" :saynotothis = "true"/>
      <usa  v-if="constitution" @tryno = "saidyes = true"/>
      </v-container>
      <v-container v-if="washingmachine">
        <Washington/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Mainpage from './components/Mainpage';
import Usa from './components/Usa'
import Washington from './components/Washington'

export default {
  name: 'App',

  components: {
    
    Mainpage,
    Usa,
    Washington
  },
  mounted()
  {
    this.$eventBus.$on('increaseMoney',function(amount){
      console.log(`yes ${this.$money.moneybag}`)
      this.$money.moneybag += amount
    }),
    this.$eventBus.$on('decreaseMoney',function(amount){
      console.log(`yes ${this.$money.moneybag}`)
      this.$money.moneybag -= amount
    }),
        this.$eventBus.$on('sayYes',function(){
      console.log(`did u say yes? ${this.$money.saidyes}`)
      this.$money.saidyes = true
    }),
    this.$eventBus.$on('increaseEssays',function(amount){
      console.log(`yes ${this.$money.essays} essays`)
      this.$money.essays += amount
    }),
        this.$eventBus.$on('decreaseEssays',function(amount){
      console.log(`yes should go down ${this.$money.essays} essays`)
      this.$money.essays -= amount
    }),
        this.$eventBus.$on('increaseArmy',function(amount){
      console.log(`yes ${this.$money.soldiers} soldiers w/ guns and ships`)
      this.$money.soldiers += amount
    }),
        this.$eventBus.$on('decreaseArmy',function(amount){
      console.log(`yes  ${this.$money.soldiers} soldiers yielded`)
      this.$money.soldiers -= amount
    })
  },
  beforeDestroy(){
    this.$eventBus.$off('increaseMoney'),
    this.$eventBus.$off('increaseEssays'),
    this.$eventBus.$off('decreaseMoney'),
    this.$eventBus.$off('decreaseEssays'),
    this.$eventBus.$off('sayYes')
  },
  data: () => ({
      constitution: false,
      saidyes: false,
      hamiham: true,
      washingmachine:false
  }),
};
</script>
<style>
.blacktext{
  color:black;
  font-size: 25px;
}
.bttn{
 padding-left: 35;
 padding-right: 35;
}
</style>
