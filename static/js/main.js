(function(){
	'use strict';

	let vm = new Vue({
		el: '#app',
		data: {
			formModal: false,
			newChacker: '',
			chackers:[
			]
		},
		methods:{
			openFormModal: function(){
				this.formModal = true
			},
			openSetting: function(index){
				this.chackers[index].setting = true
			},
			closeFormModal: function () {
				this.formModal = false
			},
			closeSettingModal: function () {
				this.chackers[index].setting = false
			},
			addChacker: function(){
				let item = {
					text: this.newChacker,
					fire: 0,
					setting: false
				}
				this.chackers.push(item);
				this.newChacker='';
				this.formModal=false;
			},
			addFire: function(index){
				this.chackers[index].fire++
			},
			deleteChacker: function(index){
				this.chackers.splice(index, 1);
			}
		}
	});
})();