<template>
  <div class="circle-logo">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>

<style lang="scss" scoped>
.circle-logo {
  border: 4px solid #fff;
  border-radius: 50%;
  height: 90px;
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .line {
    height: 12px;
    width: 15vw;
    border-top-left-radius: 97%;
    border-bottom-right-radius: 100%;
    background-color: #fff;
  }
}
</style>
