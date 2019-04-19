<template>
	<div class="folder-tree-wrapper">

	</div>
</template>

<script>
import {getFolderList,getFileList} from '@/api/data'
export default {
	data(){
		return{
			folderList:[],
			fileList:[]
		}
	},
	mounted(){
		getFolderList().then(res=>{
			console.log(res);
		})
	}

}
</script>

<style lang="scss" scoped>
.folder-tree-wrapper{
	width: 300px;
}
</style>
