const xValues = ["Compete", "Pending", "Not Start"];
const yValues = [20,50, 30];
const barColors = [
  "#3AC977",
  "#0D99FF",
  "#000000",
];
Chart.register({
  id: 'titleInsidePlugin',
  beforeDraw: chart => {
    const { ctx, chartArea } = chart;
    const { top, left, width, height } = chartArea;

    // Draw title text
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const titleLine1 = '62';
    const titleLine2 = 'Compete';
    ctx.fillStyle = '#828690';
    ctx.strokeStyle = '#FFFFFF';

    ctx.font = '22px Arial';
    ctx.lineWidth = 2; // Border width
    ctx.strokeText(titleLine1, left + width / 2, top + height / 2 - 10);
    ctx.fillText(titleLine1, left + width / 2, top + height / 2 - 10);

    ctx.font = '11px Arial';
    ctx.lineWidth = 1; 
    
    ctx.fillText(titleLine2, left + width / 2, top + height / 2 + 10);
    ctx.strokeText(titleLine2, left + width / 2, top + height / 2 + 10);

    
    ctx.restore();
  }
});
new Chart("Chart_cricle", {
  type: "doughnut",
  data: {
    labels: [],
    datasets: [{
      backgroundColor: barColors,
      data: yValues,// Set the border width to 0 to remove the border
    }]
  },
  options: {
    plugins: {
      titleInsidePlugin: {} ,
      legend: {
        display: true,
        position: 'right',
        
      },
      
    },
    cutout: '80%',
    borderWidth: 2,
    borderColor: '#444444'
  }
});