<template>
  <div class="side-menu-wrapper">
    <slot name="logo"></slot>
    <Menu
      ref="menu"
      v-if="!collapsed"
      width="auto"
      theme="dark"
      @on-select="handleSelect"
      accordion
    >
      <template v-for="item in list">
        <re-submenu
          class="menu-item"
          v-if="item.children"
          :key="`menu_${item.name}`"
          :name="item.name"
          :parent="item"
        >
        </re-submenu>
        <menu-item v-else :key="`menu_${item.name}`" :name="item.name">
          <Icon :type="item.icon" style="display:inline;"/>
          <span class="menu-item" style="display:inline;">{{item.meta.title}}</span>
        </menu-item>
      </template>
    </Menu>
    <div class="aside-menu-wrapper" v-show="collapsed">
      <template v-for="item in list">
        <re-dropdown
          @on-select="handleSelect"
          v-if="item.children"
          icon-color="#fff"
          :showTitle="false"
          :key="`drop_${item.name}`"
          :parent="item"
        ></re-dropdown>
        <Tooltip
          v-else
          :content="item.title"
          :key="`drop_${item.name}`"
          transfer
          placement="right-start"
        >
          <span class="drop-menu-span" @click="handleClick(item.name)">
            <Icon :type="item.icon" :size="30" color="#fff"></Icon>
            <!-- <span class="aside-menu-item" >{{item.title}}</span> -->
          </span>
        </Tooltip>
      </template>
    </div>
  </div>
</template>

<script>
import ReSubmenu from "./re-submenu.vue";
import ReDropdown from "./re-dropdown.vue";
export default {
  name: "SideMenu",
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  components: {
    ReSubmenu,
    ReDropdown
  },
  computed: {},
  methods: {
    handleSelect(name) {
      this.$router.push({
				name
			})
    },
    handleClick(name) {
      console.log(name);
    }
  }
};
</script>

<style lang="scss">
.side-menu-wrapper {
  width: 100%;

  .ivu-tooltip,
  .drop-menu-span {
    display: block;
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }
  .aside-menu-wrapper {
    .ivu-dropdown {
      display: block;
      padding: 10px 0;
      margin: 0 auto;
      .ivu-select-dropdown {
        .ivu-dropdown {
          padding: 0;
        }
      }
    }
    .aside-menu-item {
      width: 100px;
      // display: none;
      // display: block;
      transition: all 3s ease-in-out;
    }
  }
}
.ivu-dropdown .ivu-select-dropdown {
  margin-left: 2px;
}
</style>
