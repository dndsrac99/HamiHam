<template>
<v-card shaped height="300">
    <v-app-bar color="red leighten-1" height="80" >
        <v-avatar size="72" class="mr-2">
            <img src="https://i.pinimg.com/originals/c4/79/fc/c479fc768b081b6e50ae4773667e47f2.jpg" alt="">
        </v-avatar>
        <v-card-title class="whiteText">Washingmachine</v-card-title>

    </v-app-bar>
    <v-card-title><v-icon>mdi-human-male-male</v-icon> Army:{{$money.soldiers}} </v-card-title>
            <v-row>
            <v-btn @click="hire()" class="leftText white--text" rounded color="blue darken-2"> Hire</v-btn>
        </v-row>
</v-card>
</template>
<script>
export default {
    name: 'Army',
    data(){
        
        return{
                soldiers: this.$money.soldiers
            }
        
    },
    watch:{
        $money(){
            this.soldiers = this.$money;
        }
    },
    methods:{
        hire(){
            this.$eventBus.$emit("increaseArmy",1)
        }
    },
}
</script>
<style>
.whiteText{
    color: white;
}
.leftText {
  margin-left: 30px;
  margin-top: 1%;
  margin-bottom: 1%;
  color: white;
}
.rightText {
  margin-right: 30px;
  margin-top: 1%;
  margin-bottom: 1%;
}
</style>