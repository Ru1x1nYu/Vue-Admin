<template>
	<div>
		<h2>CountTo</h2>
		<slot name='left'></slot> <span ref="number" :class="countClass" :id="eleId"></span><slot name="right"></slot>
	</div>
</template>

<script>
import CountUp from 'countup'
export default {
	name:'CountTo',
	computed:{
		eleId(){
			return `count_up_${this._uid}`
		},
		countClass(){
			return[
				'count-to-number',
				this.className
			]
		}
	},
	data(){
		return{
			counter:{}
		}
	},
	props:{
		/**
		 * @description 起始值
		 */
		startVal:{
			type:Number,
			default:0
		},
		/**
		 * @description 最终值
		 */
		endVal:{
			type:Number,
			required:true
		},
		/**
		 * @description 小数点后保存几位小数
		 */
		decimals:{
			type:Number,
			default:2
		},
		/**
		 * @description 开始延迟，单位毫秒
		 */
		delay:{
			type:Number,
			default:0
		},
		/**
		 * @description 渐变时长
		 */
		duration:{
			type:Number,
			default:0.5
		},
		/**
		 * @description 是否使用变速效果
		 */
		userEasing:{
			type:Boolean,
			default:false
		},
		/**
		 * @description 是否使用分组 三个一组，1,300
		 */
		useGrouping:{
			type:Boolean,
			default:true
		},
		/**
		 * @description 分组符号
		 */
		separator:{
			type:String,
			default:','
		},
		/**
		 * @description 整数和小数之间符号
		 */
		decimal:{
			type:String,
			default:'.'
		},
		className:{
			type:String,
			default:''
		}
	},
	methods:{
		getCount(){
			return this.$refs.number.innerText;
		},
		getEndEvent(){
			setTimeout(()=>{
				this.$nextTick(()=>{
					this.$emit('on-animation-end',Number(this.getCount()))
				})
			},this.duration * 1000+5)
		}
	},
	watch:{
		endVal(newVal,oldVal){
			// this.startVal==oldVal
			this.counter.update(newVal)
			this.getEndEvent()

		}
	},
	mounted(){
		this.$nextTick(()=>{
			this.counter = new CountUp(this.eleId,this.startVal,this.endVal,this.decimals,this.duration,{
				userEasing:this.userEasing,
				useGrouping:this.useGrouping,
				separator:this.separator,
				decimal:this.decimal
			})
			setTimeout(()=>{
				this.counter.start()
			this.getEndEvent()
			},this.delay)
		})
	}
}
</script>

<style lang="scss" scoped>
@import './count-to.scss';
</style>
