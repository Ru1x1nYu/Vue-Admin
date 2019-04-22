<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider
        collapsible
        v-model="collapsed"
        hide-trigger
        breakpoint="sm"
        :width="200"
        class="sier-outer"
      >
        <!-- 菜单列表 -->
        <side-menu :collapsed="collapsed" :list="routers">
          <p slot="logo">LOGO</p>
        </side-menu>
      </Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon type="md-menu" :size="32" @click.native="handleCollapsed" :class="triggerTranslate"></Icon>
        </Header>
        <Content class="content-wrapper">
          <div>
            <Tabs :animated="false" type="card" :value="$route.name">
              <TabPane :label="item.meta.title" :name="item.name" v-for="(item,index) in tabList" :key="`tabNax_${index}`"></TabPane>
            </Tabs>
          </div>
          <div class="view-box">
            <Card shadow class="page-card">
              <transition name="slide-fade" mode="out-in">
                <router-view></router-view>
              </transition>
            </Card>
          </div>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import SideMenu from "_C/Sider";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      collapsed: false
    };
  },
	watch:{
		'$route'(newRoute){
			this.UPDATE_ROUTER(newRoute)
		}
	},
  computed: {
    triggerTranslate() {
      return ["trigger-icon", this.collapsed ? "rotate" : ""];
    },
    ...mapState("router", {
      routers: state =>
        state.routers.filter(item => {
          return item.path !== "*" && item.name !== "login";
        }),
      ...mapState("tabNav", {
        tabList: state => state.tabList
      })
    })
  },
  methods: {
    handleCollapsed() {
      console.log(this.routers);
      this.collapsed = !this.collapsed;
		},
		...mapMutations('tabNav',[
			'UPDATE_ROUTER'
		])
  },
  components: {
    SideMenu
  }
};
</script>

<style lang="scss" scoped>
.layout-wrapper {
  height: 100%;
  .sier-outer {
    height: 100%;
    // overflow: hidden;
    .ivu-layout-sider-children {
      margin-right: -20px;
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }
  .layout-outer {
    height: 100%;
    .ivu-layout-sider {
      transition: all 0.3s ease-out;
    }
    .header-wrapper {
      background-color: #fff;
      box-shadow: 0 1px 1px rgba(0, 0, 1, 0.1);
      padding: 0 24px;
      .trigger-icon {
        cursor: pointer;
        transition: transform 0.4 ease;
      }
      .rotate {
        transform: rotate(-90deg);
        transition: transform 0.4 ease;
      }
    }
    .content-wrapper {
      padding: 0;

      .view-box {
        padding: 0;
      }
      .page-card {
        min-height: calc(100vh - 84px);
      }
    }
  }
  .ivu-menu-item {
    position: relative;
    .menu-item {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}
</style>
