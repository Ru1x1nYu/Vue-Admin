<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{width:leftOffsetPercent}">
      <slot name="left"></slot>
    </div>
    <div
      class="pane-trigger-con"
      @mousedown="handleMouseDown"
      :style="{left:triggerLeft, width:`${triggerWidth}px`}"
    ></div>
    <div class="pane pane-right" :style="{left:leftOffsetPercent}">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpiltPane",
  data() {
    return {
      leftOffset: 0.3,
      canMove: false,
      initOffset: 0
    };
  },
  props: {
    triggerWidth: {
      type: Number,
      default: 6
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    },
    value: {
      type: Number,
      default: 0.5
    }
  },
  computed: {
    leftOffsetPercent() {
      return `${this.value * 100}%`;
    },
    triggerLeft() {
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`;
    }
  },
  methods: {
    changeLeft() {
      this.value += 0.1;
    },
    handleMouseDown() {
      document.addEventListener("mousemove", this.handleMouseMove);
      document.addEventListener("mouseup", this.handleMouseUp);
      this.initOffset =
        event.pageX - event.srcElement.getBoundingClientRect().left;
      console.log(
        event.pageX, //鼠标的位置
        event.srcElement.getBoundingClientRect(), //移动条左边元素
        this.initOffset
      );
      this.canMove = true;
    },
    handleMouseMove(event) {
      // console.log(event.pageX - this.$refs.outer.getBoundingClientRect().left);
      if (!this.canMove) return;
      const outerRect = this.$refs.outer.getBoundingClientRect();
      console.log(
        event.pageX,
        outerRect.left,
        this.initOffset,
        this.triggerWidth,
        outerRect.width
      );
      let offsetPercent =
        (event.pageX - //鼠标的位置
        outerRect.left - //外部容器距离左边位置
          this.initOffset +
          this.triggerWidth / 2) / //移动条条的一半
        outerRect.width; //外部容器的宽

      if (offsetPercent < this.min) offsetPercent = this.min;
      if (offsetPercent > this.max) offsetPercent = this.max;
      // this.$emit("input", offsetPercent);
      this.$emit("update:value", offsetPercent);
    },
    handleMouseUp() {
      this.canMove = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.split-pane-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  .pane {
    height: 100%;
    position: absolute;
    top: 0;
  }
  .pane-left {
    background-color: palegreen;
  }
  .pane-right {
    right: 0;
    bottom: 0;
    // left: 30%;
    background-color: purple;
  }
  .pane-trigger-con {
    height: 100%;
    background-color: red;
    position: absolute;
    top: 0;
    z-index: 10;
    user-select: none;
    cursor: col-resize;
  }
}
</style>

