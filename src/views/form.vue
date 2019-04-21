<template>
  <div class="form-wrapper">
    <!-- <Form :label-width="80" :rules="rules" ref="form" :model="formData">
      <FormItem label="姓名" prop="name">
        <Input v-model="formData['name']"/>
      </FormItem>
      <FormItem label="年龄">
        <Input v-model="formData['age']"/>
      </FormItem>
      <FormItem label>
        <Button type="primary" @click="handleSubmit">提交</Button>
      </FormItem>
    </Form> -->
			<!-- <form-group :list='formList' :url='url'></form-group> -->
			<form-single
				ref="formSingle"
				v-for="(item,index) in formList"
				:key="`form_${index}`"
				:config='item'
				:value-data='valueData'
				:rule-data='ruleData'
				:error-data='errorData'
			>

			</form-single>
			<Button type="primary" ref="button" @click='handleSubmit'>提交</Button>
			<Button @click="handleReset">重置</Button>
  </div>
</template>

<script>
import FormGroup from '_C/form-group'
/*const validatePassCheck = (rule, value, callback) => {
  if (value !== "小余") {
    callback(new Error("把你爹名字写清楚了"));
  } else {
    callback();
  }
};*/
import formData from '@/mock/response/form-data'
import FormSingle from '_C/form-single'
import { sentFormData } from "@/api/data";
import clonedeep from 'clonedeep'
export default {
	name: "forms",
	components:{
		FormGroup,
		FormSingle
	},
  data() {
    return {
			url:'/data/formData',
		/*formData: {
        name: "",
        password: "",
        age: 18
      },
      rules: {
        name: [
          {
            required: true,
            message: "姓名不能为空",
            trigger: "blur"
					},
					{
						validator:validatePassCheck,trigger:'blur'
					}
        ]
      }*/
		formList:formData,
		valueData:{},
		ruleData:{},
		errorData:{},
		initValueDate:{}
		};
  },
  methods: {
   /* handleSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          sentFormData(this.formData).then(res => {
            console.log(res);
          });
        }
      });
		}*/

		handleReset(){
			this.valueData=clonedeep(this.initValueDate)
		},
		handleSubmit(){
			// this.$refs.form.validate(valid=>{
			// 	if(valid){
			// 		sentFormData({
			// 			url:this.url,
			// 			data:this.valueList
			// 		}).then(res=>{
			// 			this.$emit('on-submit-success',res)
			// 		}).catch(err=>{
			// 			console.log(err);
			// 			this.$emit('on-submit-error',err)
			// 			for(let key in err){
			// 				this.errorData[key]=err[key]
			// 			}
			// 		})
			// 	}
			// })
			//组件的ref获取到的是数组，原生的获取到则是DOM
			let isVaild=true
			this.$refs.formSingle.forEach(item=>{
				item.validate(valid=>{
					if(!valid){
						isVaild=false
					}
				})
				if(isVaild){
					sentFormData({
						url:this.url,
						data:this.valueData
					}).then(res=>{
						console.log('success');
						this.$emit('on-submit-success',res)
					}).catch(err=>{
						this.$emit('on-submit-error',err)
						for(let key in err){
							this.errorData[key]=err[key]
						}
					})
				}
			})
		},

	},
	mounted(){
		let valueData={}
		let ruleData={}
		let errorData={}
		let initValueDate={}
		formData.forEach(item => {
			valueData[item.name]=item.value
			ruleData[item.name]=item.rule
			errorData[item.name]=''
			initValueDate[item.name]=item.value
		})
		this.valueData=valueData
		this.ruleData=ruleData
		this.errorData=errorData
		this.initValueDate=initValueDate
	}
};
</script>

<style lang="scss" scoped>
.form-wrapper {
  padding: 20px;
}
</style>
