<template>
	<div style="width:100%;height:100%">
		<div id="echart_line"></div>
	</div>
</template>

<script>
	import echarts from "echarts";
	export default {
		props: ["datas"],
		data() {
			return {
				dataList: [5, 20, 36, 10, 10, 20],
				data: this.datas
			};
		},
		mounted() {
			this.echartsInit(this.dataList)
		},
		methods: {
			echartsInit(dataList) {
				let myChart = echarts.init(document.getElementById("echart_line"));
				let options = {
					title: {
						text: "ECharts 入门示例"
					},
					tooltip: {},
					xAxis: {
						data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
					},
					yAxis: {},
					series: [
						{
							name: "销量",
							type: "line",
							data: dataList
						}
					]
				};
				this.$nextTick(() => {});
				myChart.setOption(options);
				window.onresize = () => {
					myChart.resize();
				};
			}
		}
	};
</script>
<style lang="scss">
#echart_line {
	width: 100%;
	height: 100%;
}
</style>