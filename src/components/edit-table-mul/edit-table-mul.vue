<template>
  <Table :columns="insideColumns" :data="value"></Table>
</template>

<script>
import clonedeep from "clonedeep";
export default {
  name: "EditTable",
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      insideData: [],
      insideColumns: [],
      edittingId: "",
      edittingContent: ""
    };
  },
  methods: {
    handleClick({ row, index, column }) {
      let keyIndex = this.insideData[index].edittingKeyArr
        ? this.insideData[index].edittingKeyArr.indexOf(column.key)
				: -1;
				let rowObj = this.insideData[index];
      if (keyIndex>-1) {
				//保存
				rowObj.edittingKeyArr.splice(keyIndex,1)
				this.insideData.splice(index,1,rowObj)
				this.$emit("input", this.insideData);
				console.log(this.insideData);
        this.$emit("on-edit", {
          row,
          index,
          column,
          newVal: this.insideData[index][column.key]
        });
      } else {
        rowObj.edittingKeyArr =
          rowObj.edittingKeyArr && rowObj.edittingKeyArr.length
            ? [...rowObj.edittingKeyArr, column.key]
            : [column.key];
        this.insideData.splice(index, 1, rowObj);
      }
    },
    handlInput(row,index,column,newVal) {
			console.log(this.insideData);
      this.insideData[index][column.key] = newVal;
    },
    handleColums() {
      this.insideData = clonedeep(this.value);
      const insideColumns = this.columns.map(item => {
        if (!item.render && item.edittable) {
          item.render = (h, { row, index, column }) => {
            const keyArr = this.insideData[index]
              ? this.insideData[index].edittingKeyArr
              : [];
            return (
              <div>
                {keyArr && keyArr.indexOf(column.key) > -1 ? (
                  <i-input
                    value={row[column.key]}
                    style="width:50px;"
                    on-input={this.handlInput.bind(this,  row, index, column )}
                  />
                ) : (
                  <span>{row[column.key]}</span>
                )}
                <i-button
                  on-click={this.handleClick.bind(this, { row, index, column })}
                >
                  {keyArr && keyArr.indexOf(column.key) > -1 ? "保存" : "编辑"}
                </i-button>
              </div>
            );
          };
          console.log("return item");
          return item;
        } else {
          console.log("item");
          return item;
        }
      });
      this.insideColumns = insideColumns;
    }
  },
  watch: {
    columns() {
      this.handleColums();
    },
    value() {
      this.handleColums();
    }
  },
  mounted() {
    this.handleColums();
  }
};
</script>

<style lang="scss" scoped>
</style>
