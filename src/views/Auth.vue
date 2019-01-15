<template>
  <div class="auth-wrapper">
    <div class="auth-top">
      <div class="system-configs">
        <div class="date">{{ currentHour }}</div>
        <div class="network-battery">
          <img
            src="../assets/1.svg"
            v-if="network === 'slow-2g'"
            alt="network"
            height="20"
            width="20"
          >
          <img src="../assets/2.svg" v-if="network === '2g'" alt="network" height="20" width="20">
          <img src="../assets/3.svg" v-if="network === '3g'" alt="network" height="20" width="20">
          


          <img
            src="../assets/5-14.svg"
            v-if="testMyCharging(convertBatteryInfo(battery.level), 5, 14)"
            alt="network"
            height="20"
            width="20"
          >
          <img
            src="../assets/15-20.svg"
            v-if="testMyCharging(convertBatteryInfo(battery.level), 15, 20)"
            alt="network"
            height="20"
            width="20"
          >
          <img
            src="../assets/21-40.svg"
            v-if="testMyCharging(convertBatteryInfo(battery.level), 21, 40)"
            alt="network"
            height="20"
            width="20"
          >
          <img
            src="../assets/41-56.svg"
            v-if="testMyCharging(convertBatteryInfo(battery.level), 41, 56)"
            alt="network"
            height="20"
            width="20"
          >
          <img
            src="../assets/57-80.svg"
            v-if="testMyCharging(convertBatteryInfo(battery.level), 57 , 80)"
            alt="network"
            height="20"
            width="20"
          >
          <img
            src="../assets/81-100.svg"
            v-if="testMyCharging(convertBatteryInfo(battery.level), 81 , 100)"
            alt="network"
            height="20"
            width="20"
          >
        </div>
      </div>
      <footer>
        <app-logo/>
        <p>{{title}}</p>
      </footer>
    </div>
    <router-view/>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/variables.scss";

.auth-wrapper {
  height: 100vh;
  width: 100vw;
  background-color: #f8f8f8;

  .auth-top {
    background: linear-gradient(
      to bottom,
      $base-orange-color,
      $alt-orange-color
    );

    .system-configs {
      color: #fff;
      box-sizing: border-box;
      padding: 0 3vw;
      display: flex;
      justify-content: space-between;
      .network-battery {
        display: flex;
      }
    }

    footer {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;

      p {
        position: absolute;
        color: #fff;
        bottom: 2vh;
        right: 10vw;
        font-size: 13pt;
      }
    }

    height: 30vh;
    width: 100%;
    border-bottom-left-radius: 37%;

    padding: 1vh 0 3vh 0;
  }
}

.circle-logo {
  width: 70px;
  height: 70px;
}
</style>
<script>
import Logo from "@/components/Logo";

export default {
  name: "Auth",
  components: {
    "app-logo": Logo
  },
  data: function() {
    return {
      currentHour: null,
      network: "",
      battery: ""
    };
  },
  watch: {
    wCurrentTime: {
      handler: "hour",
      immediate: true
    },
    wCurrentNetworkState: {
      handler: "getNetworkInformation",
      immediate: true
    },
    wCurrentBatteryStatus: {
      handler: "getBatteryStatus",
      immediate: true
    }
  },
  methods: {
    hour: function() {
      setInterval(() => {
        this.currentHour = new Date().toLocaleTimeString();
      }, 1000);
    },
    getNetworkInformation: function() {
      this.network = navigator.connection.effectiveType;
    },
    getBatteryStatus: async function() {
      let battery = await navigator.getBattery();
      this.battery = battery;
    },
    convertBatteryInfo: function(level) {
      return level / 0.01;
    },
    testMyCharging(cond, from, to) {
      if (cond >= from && cond <= to) {
        return true;
      }
      return false;
    }
  },
  computed: {
    title: function() {
      return this.$route.name;
    }
  }
};
</script>
