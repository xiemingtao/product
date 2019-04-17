<template>
	<div>
		<div class="options">
			<Button type="info" @click="addProduct">添加商品</Button>
		</div>
		<Table border :columns="columns5" :data="data5"></Table>
		<br>
		<Page :total="100" show-elevator/>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				columns5: [
					{
						title: "Date",
						key: "date",
						sortable: true
					},
					{
						title: "Name",
						key: "name"
					},
					{
						title: "Age",
						key: "age",
						sortable: true
					},
					{
						title: "Address",
						key: "address"
					},
					{
						title: '操作',
						align: 'center',
						width: '80px',
						render: (h,params) => {
							return h('div', [
									h('Button', {
											props: {
													type: 'primary',
													size: 'small'
											},
											style: {
													marginRight: '5px'
											},
											on: {
												click: () => {
													console.log(params)
												}
											}
									}, '编辑')
							]);
						}
					}
				],
				data5: [
					{
						name: "John Brown",
						age: 18,
						address: "New York No. 1 Lake Park",
						date: "2016-10-03"
					},
					{
						name: "Jim Green",
						age: 24,
						address: "London No. 1 Lake Park",
						date: "2016-10-01"
					},
					{
						name: "Joe Black",
						age: 30,
						address: "Sydney No. 1 Lake Park",
						date: "2016-10-02"
					},
					{
						name: "Jon Snow",
						age: 26,
						address: "Ottawa No. 2 Lake Park",
						date: "2016-10-04"
					}
				]
			}
		},
		mounted() {},
		methods: {
			addProduct() {
				this.$router.push({
					name: 'add_product'
				})
			}
		}
	}
</script>
<style lang="scss">
	.options {
		padding: 20px;
	}
</style>


