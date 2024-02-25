const xValues = ["Compete", "Pending", "Not Start"];
const yValues = [20,50, 30];
const barColors = [
  "#3AC977",
  "#0D99FF",
  "#000000",
];

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