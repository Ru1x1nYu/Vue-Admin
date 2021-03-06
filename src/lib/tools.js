export const doCustomTimes = (times, callback) => {
  let i = -1
  while (++i < times) {
    callback(i)
  }
}

export const objEqual = (obj1,obj2)=>{
	const keyArr1=Object.keys(obj1)
	const keyArr2=Object.keys(obj2)
	if(keyArr1.length!==keyArr2.length) return false
	else if(keyArr1.length===0 &&keyArr2.length===0){
		return true
	}else{
		return !keyArr1.some(key=>obj1[key]!==obj2[key])
	}
}
