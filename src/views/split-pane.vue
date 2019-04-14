<template>
  <div class="split-pane-con">
    <h1>split-pane</h1>
    <split-pane :value.sync="offset">
      <div slot="left">Left</div>
      <div slot="right">Right</div>
    </split-pane>
  </div>
</template>

<script>
import SplitPane from "_C/split-pane";

export default {
  name: "split_pane",
  components: {
    SplitPane
  },
  data() {
    return {
      offset: 0.8
    };
  },
  methods: {
    // handleInput(value) {
    //   this.offset = value;
    // }
  }
};
</script>

<style lang="scss" scoped>
.split-pane-con {
  width: 600px;
  height: 300px;
  background-color: peachpuff;
  h1 {
    position: absolute;
    top: 0;
    right: 50%;
    color: white;
  }
}
</style>
