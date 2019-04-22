<template>
  <Submenu :name="parent.name" accordion>
    <template slot="title">
      <Icon :type="parent.icon"/>
      <span>{{parent.meta.title}}</span>
    </template>
    <template v-for="item in parent.children">
      <re-submenu v-if="item.children" :key="`menu_${item.name}`" :name="item.name" :parent="item">

      </re-submenu>
      <menu-item v-else :key="`menu_${item.name}`" :name="item.name">
        <Icon :type="item.icon"/>
        {{item.meta.title}}
      </menu-item>
    </template>
  </Submenu>
</template>

<script>
export default {
  name: "ReSubmenu",
  props: {
    parent: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
