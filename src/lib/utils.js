import Cookies from 'js-cookie'
import clonedeep from 'clonedeep'
import{ doCustomTimes ,objEqual } from './tools'

export const setTitle = (title) => {
  window.document.title = title || 'admin'
}

export const setToken = (token, tokenName = 'token') => {
  Cookies.set(tokenName, token)
}

export const getToken = (tokenName = 'token') => {
  return Cookies.get(tokenName)
}

export const putFileInFolder = (folderList, fileList) => {
  const folderListCloned = clonedeep(folderList)
  const fileListCloned = clonedeep(fileList)
  return folderListCloned.map(item => {
    const folderId = item.id
    let index = fileListCloned.length
    while (--index >= 0) {
      const fileItem = fileListCloned[index]
      if (fileItem.folder_id === folderId) {
        const file = fileListCloned.splice(index, 1)[0]
        file.title = file.name
        if (item.children) {
          item.children.push(file)
        } else {
          item.children = [file]
        }
      }
    }
    item.type = 'folder'
    item.expand = false
    return item
  })
}

export const transferFolderTree = folderList => {
  if (!folderList.length) {
    return []
  }
  const folderListCloned = clonedeep(folderList)
  const handle = id => {
    let arr = []
    folderListCloned.forEach(folder => {
      if (folder.folder_id === id) {
        const children = handle(folder.id)
        if (folder.children) {
          folder.children = [].concat(folder.children, children)
        } else {
          folder.children = children
        }
        folder.title = folder.name
        arr.push(folder)
      }
    })
    return arr
  }
  return handle(0)
}

export const expandSpecifiedFolder = (folderTree, id) => {
  return folderTree.map(item => {
    if (item.type === 'folder') {
      if (item.id === id) {
        item.expand = true
      } else {
        if (item.children && item.children.length) {
          item.children = expandSpecifiedFolder(item.children, id)
          if (item.children.some(child => {
            return child.expand === true
          })) {
            item.expand = true
          } else {
            item.expand = false
          }
        }
      }
    }
    return item
  })
}



export const routeEqual = (route1,route2)=>{
	const params1=route1.params || {}
	const params2=route2.params || {}
	const query1=route1.query || {}
	const query2=route2.query || {}
	return route1.name===route2.name && objEqual(params1,params2) && objEqual(query1,query2)
}

export const routeHasExist=(tabList,routeItem)=>{
	let len = tabList.length
	let res = false
	doCustomTimes(len,(index)=>{
		if(routeEqual(tabList[index],routeItem)) res =true
	})
	return res
}
