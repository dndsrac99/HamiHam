<template>
  <v-container>
    <v-card color="red lighten-1" elevation="3" shaped heigt="300">
      <v-app-bar color="blue darken-2" height="80">
        <v-avatar color="white" size="72" class="mr-2">
          <img
            src="data:image/png;base64,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"
          />
        </v-avatar>
        <v-toolbar-title class="hellyeah">The United States of America</v-toolbar-title>
      </v-app-bar>
      <v-card-title class="hellyeah">
        <v-icon color="white" class="whiteIcon" size="40">mdi-cash-multiple</v-icon>
        Dollars: ${{$money.moneybag}}
      </v-card-title>
      <v-row>
        <v-card-text class="moneySubText">You get ${{moneyPerSecond}} per second</v-card-text>
      </v-row>
      <v-row>
        <v-btn rounded class="moneyText" color="white" @click="getmoney(1)">Work</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          rounded
          class="cheatText"
          v-if="$money.moneybag >= adcosts.moneycost && $money.essays >= adcosts.essaycost "

          color="white"
          @click="advert"
        >Advertise the Federalist party <v-icon>mdi-feather</v-icon>{{adcosts.essaycost}} <v-icon>mdi-cash-multiple</v-icon> {{adcosts.moneycost}}</v-btn>
      </v-row>

      <v-row>
        <v-btn
          v-if="this.$money.moneybag >= 30 && this.$money.saidyes == false"
          rounded
          class="moneyText"
          color="white"
          @click="sockedaway"
        >sock away $30</v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>

<style>
.hellyeah {
  color: white;
}
.moneyText {
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
.moneySubText {
  margin-left: 30px;
  margin-bottom: 1%;
  margin-top: -20px;
  color: white;
}
.priceText {
  margin-left: -4%;
  margin-right: -4%;
  font-size: 12;
}
.whiteIcon {
  color: white;
  margin-right: 1%;
}
</style>

<script>
export default {
  name: "Usa",
  methods: {
    getmoney(amount) {
      this.$eventBus.$emit("increaseMoney", amount);
    },
    sockedaway() {
      this.$eventBus.$emit("decreaseMoney", 30);
      this.$eventBus.$emit("sayYes");
    },
    advert() {
      if (this.autoCollect != null) {
        clearInterval(this.autoCollect),
          (this.adcosts.gainspeed = this.adcosts.gainspeed * 0.6);
      }
      const vm = this;

      this.$eventBus.$emit("decreaseMoney", vm.adcosts.moneycost);
      this.$eventBus.$emit("decreaseEssays", vm.adcosts.essaycost);

      this.autoCollect = setInterval(function() {
        vm.getmoney(vm.adcosts.gainamount);
      }, this.adcosts.gainspeed);
      console.log("alexander hamilton");
      this.moneyPerSecond =
        this.adcosts.gainamount / (this.adcosts.gainspeed / 1000);
      this.round();
    },
    round() {
      this.adcosts.moneycost = Number(this.adcosts.moneycost).toFixed(0);
      this.adcosts.essaycost = Number(this.adcosts.essaycost).toFixed(0);
      this.moneyPerSecond = Number(this.moneyPerSecond).toFixed(2);
      this.adcosts.moneycost = Number(this.adcosts * 1,5);
      this.adcosts.essaycost = Number(this.adcosts.essaycost*1.3);
    }
  },
  computed: {
    moneyStatus() {
      return this.$money;
    }
  },
  data() {
    return {
      money: this.$money,
      essay: this.$money,
      autoCollect: null,
      moneyPerSecond: 0,

      adcosts: {
        moneycost: 30,
        essaycost: 64,
        gainspeed: 5000,
        gainamount: 1
      }
    };
  },
  watch: {
    $money() {
      this.money = this.$money.moneybag;
      this.essay = this.$money.essays;
    }
  },
  beforeDestroy() {
    clearInterval(this.autoCollect);
  }
};
</script>