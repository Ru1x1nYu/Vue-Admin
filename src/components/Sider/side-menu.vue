<template>
  <div class="side-menu-wrapper">
    <slot name="logo"></slot>
    <Menu v-show="!collapsed" width="auto" theme="dark" @on-select="handleSelect" accordion >
			<template v-for="item in list">
				<re-submenu
				 class="menu-item"
					v-if="item.children"
					:key="`menu_${item.name}`"
					:name="item.name"
					:parent="item"
				>
					<menu-item></menu-item>
				</re-submenu>
				<menu-item v-else :key="`menu_${item.name}`" :name="item.name">
					<Icon :type="item.icon" size="26"/>
							<span>{{item.title}}</span>
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
		},
  },
  components: {
    ReSubmenu,
    ReDropdown
  },
	methods:{
		handleSelect(name){
			console.log(name);
		},
		handleClick(name){
			console.log(name);
		}
	}
};
</script>

<style lang="scss">
.side-menu-wrapper {
  width: 100%;

  .ivu-tooltip,.drop-menu-span {
    display: block;
    width: 100%;
    text-align: center;
    padding: 10px 0;

  }
  .aside-menu-wrapper {
    .ivu-dropdown{
			display: block ;
			padding:10px;
			margin:0 auto;
			.ivu-select-dropdown{
				.ivu-dropdown{
					padding: 0;
				}
			}
		}
  }
}
.side-enter-active, .side-leave-active {
  transition: all .3s ease;
	opacity: 1;
}
.side-enter, .side-leave-to {
  opacity: 0;
}
</style>
