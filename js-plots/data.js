//AC
var AC_data = {
	min: [7.6, 8.6, 9.5, 10.5, 11.5, 12.3, 13.5, 14.4, 15.4, 16.4, 17.3, 18.3, 19.2, 20.1, 21, 21.8, 22.7, 23.5, 24.3, 25.1, 25.8, 26.5, 27.1, 27.7, 28.3, 28.8, 29.3, 29.7],
	med: [9.2, 10.3, 11.4, 12.5, 13.6, 14.8, 15.9, 17, 18.1, 19.2, 20.3, 21.4, 22.4, 23.5, 24.5, 25.5, 26.5, 27.5, 28.4, 29.3, 30.2, 31, 31.8, 32.5, 33.2, 33.9, 34.5, 35.1],
	max: [10.8, 12, 13.3, 14.5, 15.8, 17, 18.3, 19.6, 20.8, 22, 23.3, 24.5, 25.7, 26.9, 28.1, 29.2, 30.3, 31.4, 32.5, 33.5, 34.5, 35.5, 36.4, 37.3, 38.2, 39, 39.7, 40.5]
}

//BPD
var BPD_data = {
	min: [2.49, 2.75, 3.02, 3.3, 3.59, 3.88, 4.18, 4.48, 4.78, 5.08, 5.38, 5.67, 5.96, 6.24, 6.5, 6.76, 7, 7.23, 7.44, 7.63, 7.81, 7.95, 8.08, 8.18, 8.25, 8.3, 8.31, 8.29],
	med: [3.04, 3.32, 3.61, 3.91, 4.21, 4.52, 4.84, 5.16, 5.48, 5.8, 6.11, 6.42, 6.73, 7.02, 7.31, 7.58, 7.84, 8.09, 8.31, 8.52, 8.71, 8.88, 9.02, 9.14, 9.23, 9.29, 9.32, 9.32],
	max: [3.59, 3.89, 4.19, 4.51, 4.84, 5.17, 5.5, 5.84, 6.17, 6.51, 6.84, 7.17, 7.49, 7.8, 8.11, 8.4, 8.68, 8.94, 9.19, 9.41, 9.62, 9.81, 9.97, 10.1, 10.21, 10.29, 10.34, 10.35]
}

//FL
var FL_data = {
	min: [1.16, 1.46, 1.75, 2.03, 2.31, 2.58, 2.85, 3.11, 3.37, 3.62, 3.86, 4.1, 4.32, 4.54, 4.76, 4.96, 5.16, 5.35, 5.53, 5.7, 5.87, 6.02, 6.17, 6.3, 6.43, 6.55, 6.65, 6.75],
	med: [1.55, 1.87, 2.17, 2.47, 2.77, 3.06, 3.34, 3.62, 3.89, 4.15, 4.41, 4.66, 4.91, 5.14, 5.37, 5.59, 5.81, 6.01, 6.21, 6.4, 6.58, 6.75, 6.91, 7.06, 7.2, 7.34, 7.46, 7.57],
	max: [1.95, 2.28, 2.6, 2.91, 3.22, 3.53, 3.83, 4.12, 4.41, 4.69, 4.96, 5.23, 5.49, 5.74, 5.99, 6.23, 6.45, 6.68, 6.89, 7.09, 7.29, 7.47, 7.65, 7.82, 7.98, 8.12, 8.26, 8.39]
}

//HC
var HC_data = {
	min: [9.7, 10.7, 11.8, 12.9, 13.9, 15.1, 16.2, 17.3, 18.4, 19.5, 20.5, 21.6, 22.6, 23.6, 24.5, 25.4, 26.2, 27, 27.7, 28.3, 28.9, 29.4, 29.8, 30, 30.2, 30.3, 30.3, 30.1],
	med: [11.2, 12.3, 13.5, 14.6, 15.8, 17, 18.2, 19.3, 20.5, 21.7, 22.8, 23.9, 25, 26.1, 27.1, 28.1, 29, 29.8, 30.6, 31.3, 31.9, 32.5, 33, 33.3, 33.6, 33.7, 33.8, 33.7],
	max: [12.7, 13.9, 15.1, 16.4, 17.6, 18.9, 20.1, 21.4, 22.7, 23.9, 25.1, 26.3, 27.5, 28.6, 29.7, 30.7, 31.7, 32.6, 33.5, 34.3, 35, 35.6, 36.2, 36.6, 36.9, 37.2, 37.3, 37.3]
}

function draw_graph(graphid, analisi, settimana, val) {

	var mine = [];

	if (settimana > 14 && val > 0) {
		mine.push([settimana, val]);
	}
	
	var dat;
	
	if (analisi == "AC")
		dat = AC_data;
		
	if (analisi == "BPD")
		dat = BPD_data;
		
	if (analisi == "FL")
		dat = FL_data;
		
	if (analisi == "HC")
		dat = HC_data;
	
	if (dat != null) {
	
		var min = [];
		for (var i = 14; i < 42; i++) {
			min.push([i, dat.min[i-14]]);
		}
		var med = [];
		for (var i = 14; i < 42; i++) {
			med.push([i, dat.med[i-14]]);
		}
		var max = [];
		for (var i = 14; i < 42; i++) {
			max.push([i, dat.max[i-14]]);
		}

		var options = {
			xaxis: {
				min: 14,
				max: 41,
				tickSize: 1
			}
		};

		var element = "#graph";
		if (graphid != null)
			element = graphid;
		
		$.plot(element, [
			{
				data: min,
				lines: { show: true },
				color: "#E1A5EB"
			},
			{
				data: med,
				lines: { show: true },
				color: "#9C27B0"
			},
			{
				data: max,
				lines: { show: true },
				color: "#E1A5EB"
			},
			{
				data: mine,
				points: { show: true },
				color: "#3BB027"
			}
		], options);
		
	}

}