$(function(){
    Chart.defaults.global.defaultFontFamily = "Roboto";
	
	// Pie Chart
	
	var ctx = document.getElementById('pieChart').getContext('2d');
	var pieChart = new Chart(ctx, {
		type: 'pie',
		data: {
			labels: ['Functional Testing', 'Performance Testing', 'Security Testing' , 'Comparibility Testing'],
			datasets: [{
				label: '# of Votes',
				data: [35,15, 25, 25],
				backgroundColor: [
					'#FF5E7D',
					'#2F82FF',
					'#C23FCD',
					'#5855D6'
					
				],
				borderWidth: 1
			}]
		},
		options: {
			responsive: true,
			legend: {
				display: false
			}
		}
	});
	
});