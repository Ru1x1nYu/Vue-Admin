<template>
  <ul class="a-submenu">
    <div class="a-submenu-title" @click="handleClick">
      <slot name="title"></slot>
      <span class="shrink-icon" :style="{transform:`rotateZ(${showChild?0:180}deg)`}">^</span>
    </div>
    <div v-show="showChild" class="a-submenu-child-box">
      <slot></slot>
    </div>
  </ul>
</template>

<script>
export default {
  name: "Asubmenu",
  data() {
    return {
      showChild: false
    };
  },
  methods: {
    handleClick() {
      this.showChild = !this.showChild;
    }
  }
};
</script>

<style lang="scss" scoped>
.a-submenu {
  .a-submenu-title {
    background-color: rgb(71, 193, 250);
    position: relative;
    .shrink-icon {
      position: absolute;
      top: 4px;
      right: 10px;
    }
  }
  .a-submenu-child-box {
    overflow: hidden;
		padding-left: 10px;
		li{
			background-color: azure;
		}
  }
}
</style>
