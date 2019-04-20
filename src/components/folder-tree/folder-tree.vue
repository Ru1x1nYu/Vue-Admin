<template>
  <div class="folder-tree-sonwarapper">
    <Tree
      :data="folderTree"
      @on-check-change="handleSelectChange"
      selected
      checked
      :render="renderFunc"
    ></Tree>
  </div>
</template>

<script>
import {
  putFileInFolder,
  transferFolderTree,
  expandSpecifiedFolder
} from "@/lib/utils";
import clonedeep from "clonedeep";
export default {
  name: "FolderTree",
  data() {
    return {
      folderTree: [],
      curentRenamingId: "",
      curentRenamingContent: "",
      renderFunc: (h, { root, node, data }) => {
        const dropList =
          data.type === "folder" ? this.folderDropList : this.fileDropList;
        const isRenaming =
          this.curentRenamingId ===
          `${data.type === "folder" ? "folder" : "file"}_${data.id}`;
        const dropdownRender = dropList.map(item => {
          return <dropdownItem name={item.name}>{item.title}</dropdownItem>;
        });
        return (
          <div class="tree-item" on-select-change={this.click}>
            {data.type === "folder" ? (
              <icon
                type="ios-folder"
                color="#2d8cf8"
                style="margin-right:10px"
              />
            ) : (
              ""
            )}
            {isRenaming ? (
              <span>
                <i-input
                  value={data.title}
                  on-input={this.handleInput}
                  class="tree-rename-input"
                />
                <i-button
                  size="small"
                  type="text"
                  on-click={this.saveRename.bind(this, data)}
                >
                  <icon type="md-checkmark" />
                </i-button>
                <i-button size="small" type="text">
                  <icon type="md-close" />
                </i-button>
              </span>
            ) : (
              <span>{data.title}</span>
            )}
            {dropList && !isRenaming ? (
              <dropdown
                trigger="click"
                placement="right-start"
                on-on-click={this.handleDropClick.bind(this, data)}
              >
                <i-button size="small" type="text" class="tree-item-button">
                  <icon type="md-more" size={12} />
                </i-button>
                <dropdownMenu slot="list">{dropdownRender}</dropdownMenu>
              </dropdown>
            ) : (
              ""
            )}
          </div>
        );
      }
    };
  },
  props: {
    folderList: {
      type: Array,
      default: () => []
    },
    fileList: {
      type: Array,
      default: () => []
    },
    folderDropList: {
      type: Array
    },
    fileDropList: {
      type: Array
    },
    beforeDelete: {
      type: Function
    }
  },
  watch: {
    folderList() {
      this.transData();
    },
    fileList() {
      this.transData();
    }
  },
  methods: {
    transData() {
      this.folderTree = transferFolderTree(
        putFileInFolder(this.folderList, this.fileList)
      );
    },
    click(item) {
      console.log(item);
      // this.$emit('on-check-change')
    },
    handleSelectChange(item) {
      console.log(item);
      console.log(1);
    },
    isFolder(type) {
      return type === "folder";
    },
    handleDelete(data) {
      const folderId = data.folder_id;
      const isFolder = this.isFolder(data.type);
      let updataListName = isFolder ? "folderList" : "fileList";
      let list = isFolder
        ? clonedeep(this.folderList)
        : clonedeep(this.fileList);
      list = list.filter(item => item.id !== data.id);
      this.$emit(`update:${updataListName}`, list);
      this.$nextTick(() => {
        expandSpecifiedFolder(this.folderTree, folderId);
      });
    },
    handleDropClick(data, name) {
      if (name === "rename") {
        this.curentRenamingId = `${
          data.type === "folder" ? "folder" : "file"
        }_${data.id}`;
        console.log(this.curentRenamingId);
      } else if (name === "delete") {
        this.$Modal.confirm({
          title: "提示",
          content: `您确定要删除${
            this.isFolder(data.type) ? "文件夹" : "文件"
          }《${data.title}》吗？`,
          onOk: () => {
            this.beforeDelete
              ? this.beforeDelete()
                  .then(() => {
                    this.handleDelete(data);
                  })
                  .catch(() => {
                    this.$Message.error("删除失败");
                  })
              : this.handleDelete(data);
          }
        });
      }
    },
    handleInput(value) {
      this.curentRenamingContent = value;
    },
    updateList(list, id) {
      let i = -1;
      let len = list.length;
      while (++i < len) {
        let folderItem = list[i];
        if (folderItem.id === id) {
          folderItem.name = this.curentRenamingContent;
          list.splice(i, 1, folderItem);
          break;
        }
      }
      return list;
    },
    saveRename(data) {
      let id = data.id;
      console.log(data);
      let type = data.type;
      let i = -1;
      if (type === "folder") {
        const list = this.updateList(clonedeep(this.folderList), id);
        this.$emit("update:folderList", list);
      } else {
        const list = this.updateList(clonedeep(this.fileList), id);
        this.$emit("update:fileList", list);
      }
      this.curentRenamingId = "";
    }
  },
  mounted() {
    this.transData();
  }
};
</script>

<style lang="scss">
.folder-tree-sonwarapper {
  .tree-item {
    display: inline-block;
    width: calc(100% - 50px);
    height: 30px;
    line-height: 30px;
    .tree-rename-input {
      width: calc(100% - 80px);
    }
    .ivu-dropdown {
      float: right;
    }
    ul {
      padding-left: 0;
      li {
        margin: 0;
        padding: 7px 16px;
      }
    }
  }
}
</style>
