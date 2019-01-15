<template>
  <div class="splash">
    <app-logo />
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from "@/components/Logo";
export default {
  name: "splash",
  components: {
    "app-logo": Logo
  },
  created: function() {
    setTimeout(() => {
      this.$router.push({ name: "Login" });
    }, 10000);
  }
};
</script>

<style lang="scss">
@import "../assets/variables.scss";

.splash {
  background: linear-gradient(to bottom, $base-orange-color, $alt-orange-color);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
