<template>
	<div class="folder-tree-wrapper">
		<folder-tree
		:folder-list.sync='folderList'
		:file-list.sync='fileList'
		:folder-drop-list='folderDrop'
		:file-drop-list='fileDrop'
		:beforeDelete="beforeDelete"
		>
		</folder-tree>
		<!-- <Tree :data='folderTree' :render='renderFunc' @></Tree> -->
	</div>
</template>

<script>
import FolderTree from '_C/folder-tree'
import {getFolderList,getFileList} from '@/api/data'
import {putFileInFolder, transferFolderTree } from '@/lib/utils'
import { setTimeout } from 'timers';
export default {
	components:{
		FolderTree
	},
	data(){
		return{
			folderList:[],
			fileList:[],
			folderDrop:[
				{
				name:'rename',
				title:'重命名'
				},
				{
					name:'delete',
					title:'删除文件夹'
				}
			],
			fileDrop:[
				{
				name:'rename',
				title:'重命名'
				},
				{
					name:'delete',
					title:'删除文件'
				}
			]
			// ,folderTree:[],
			// renderFunc:(h, { root, node, data }) => {
			// 	return h('span', {
            //                     style: {
            //                         display: 'inline-block',
            //                         width: '100%'
            //                     }
            //                 }, [
            //                     h('span', [
            //                         h('Icon', {
            //                             props: {
            //                                 type: 'ios-folder-outline'
            //                             },
            //                             style: {
            //                                 marginRight: '8px'
            //                             }
            //                         }),
            //                         h('span', data.title)
            //                     ]),
            //                     h('span', {
            //                         style: {
            //                             display: 'inline-block',
            //                             float: 'right',
            //                             marginRight: '32px'
			// 						},
			// 						on:{
			// 							"on-check-change":()=>{
			// 							console.log(1);
			// 						}}
			// 					},data.title)
			// 					]);

			// }
		}
	},
	mounted(){
		// 不推荐使用
		// getFolderList().then(res=>{
		// 	getFileList().then(res=>{

		// 	})
		// })
		Promise.all([getFolderList(),getFileList()]).then(res=>{

			this.folderList=res[0]
			this.fileList=res[1]
			// this.folderTree=transferFolderTree(putFileInFolder(res[0],res[1]));
		})
	},
	methods:{
		// handleSelectChange(item){
		// 	console.log(item);
		// 	console.log(1);
		// },
		click(){
			console.log(1);
		},
		beforeDelete(){
			//实际是调用接口
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					let error =null
					if(!error){
						resolve()
					}else{
						reject(error)
					}
				},1000)

			})
		}
	}

}
</script>

<style lang="scss">
.folder-tree-wrapper{
	width: 300px;
	.tree-item{
		display: inline-block;
	}
}
</style>
