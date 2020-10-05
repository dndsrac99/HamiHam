<template>
  <v-container>
    <v-card elevation="3" shaped color="yellow lighten-2" >
      <v-app-bar color="yellow darken-2" elevation="2" height="80">
        <v-avatar color="purple" size="78" class="mr-2">
          <img
            src="https://i.guim.co.uk/img/media/7c2c6e14d177effd8e7f6a1bd7e22af1e3ba0788/0_87_3500_2101/master/3500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=932e1874fb286c7ed97db62f2898db3a"
          />
        </v-avatar>
        <v-toolbar-title class="hellyeah">Hamilton</v-toolbar-title>

      </v-app-bar>
      <v-row>
        <v-card-title>
          <v-icon size="40">mdi-feather</v-icon>
          Essays written: {{$money.essays}}
        </v-card-title>
        <v-spacer></v-spacer>
        <v-card-title class="cheatText">
          <v-icon size="40">mdi-human-female</v-icon>
          cheated: {{cheated}}
        </v-card-title>
      </v-row>
              <v-row>
        <v-card-text class="essaysubText">Essays written per second: {{essaypersecond}}</v-card-text>
        </v-row>
      <v-row> 
        <v-btn
          class="essayText"
          rounded
          elevation="2"
          color="yellow darken-2"
          @click="clickonessay()"
        >write essay</v-btn>
        <v-spacer></v-spacer>
        <v-btn v-if="this.$money.saidyes" class="cheatText" rounded elevation="2" color="yellow darken-2" @click="clickoncheat">cheat w/ Maria</v-btn>
        
      </v-row>

      <v-row>
        <v-btn v-if="this.$money.essays >= 51 && constwritten == false" class="essayText" rounded elevation="2" color="yellow darken-2" @click="writingConstitution">write the us constitution <v-label class="pricetext"> 51</v-label><v-icon>mdi-feather</v-icon> </v-btn>
          <v-spacer></v-spacer>
        <v-btn v-if="cheated >= pamphletPrice" class="cheatText" rounded elevation="2" color="yellow darken-2" @click="reynoldspamphlet">the reynolds pamphlet <v-label class="priceText">{{pamphletPrice}}</v-label><v-icon>mdi-human-female</v-icon></v-btn>

      </v-row>
    </v-card>
  </v-container>
</template>
<style>
.hellyeah {
  color: white;
}
.essayText {
  margin-left: 30px;
  margin-top: 1%;
  margin-bottom: 1%;
}
.cheatText {
  margin-right: 30px;
  margin-top: 1%;
  margin-bottom: 1%;
}
.iconStyle {
  margin-bottom: 2%;
  margin-top: 10px;
}
.essaysubText {
  margin-left: 30px;
  margin-bottom: 1%;
  margin-top: -40px;
}
.priceText{
  margin-left: -4%;
  margin-right: -4%;
  font-size: 12;
}
</style>
<script>

export default {
  name: "ham",
  props:{

  },
  model: {

    
  },

   watch: {
      '$money'(){
        this.essaynum = this.$money.essays,
          this.saidyes=this.$money.saidyes
      }
    },

  methods: {

    clickonessay(){
        this.$eventBus.$emit("increaseEssays",1);
    },
    
     clickoncheat() {
      console.log("works");
      return this.cheated++;
    },
      reynoldspamphlet(){
        if(this.autowriting != null){
          clearInterval(this.autowriting),
           this.pamphletSpeed = this.pamphletSpeed * 0.75
         }
        this.pamphletPrice = this.pamphletPrice.toFixed(0)
         this.cheated = this.cheated - this.pamphletPrice,
         this.cheated = this.cheated.toFixed(0),
          this.pamphletPrice= this.pamphletPrice * 1.5,

       this.autowriting =  setInterval(this.clickonessay,this.pamphletSpeed),
       this.essaypersecond =  1/(this.pamphletSpeed/1000);
       this.essaypersecond = this.essaypersecond.toFixed(2);

            
        
        return 
    },
    writingConstitution(){
      this.constwritten = true;
      this.$emit('constClicked');
      this.$money.essays -= 51; 
      
    }

  },
  data() {
    return{
      essaynum:this.$money,
      cheated:  0,
      rpactive: false,
      autowriting: null,
      constwritten: false,
      pamphletPrice: 10,
      pamphletSpeed: 5500,
      essaypersecond: 0,
      saidyes: false,
      
    }

    
  },
  beforeDestroy(){
    clearInterval(this.autowriting)
    
  }
};

//var ;
</script>