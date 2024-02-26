function chart_overview(){
  
  var mychart = document.getElementById("Chart-overview").getContext("2d");
  const colors = {
    purple: {
      default: "rgba(149, 76, 233, 1)",
      half: "rgba(149, 76, 233, 0.2)",
      quarter: "rgba(149, 76, 233, 0.2)",
      zero: "rgba(149, 76, 233, 0.2)"
    },
    indigo: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)"
    }
  };
  gradient = mychart.createLinearGradient(0, 25, 0, 300);
  gradient.addColorStop(0, colors.purple.half);
  gradient.addColorStop(0.35, colors.purple.quarter);
  gradient.addColorStop(1, colors.purple.zero);
  var datayValue = ['Jan', 'Feb', 'Mar', 'Apr',
  'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  var offset = 0;
  datayValue.forEach(function(label, index) {
    if (label === '') {
      offset += 100; // Tăng offset lên 100px nếu là nhãn trống
    } else {
      datayValue[index] = {
        value: label,
        offset: offset // Thiết lập offset cho nhãn
      };
    }
  });
  new Chart(mychart, {
    type: 'bar',
    data: {
      datasets: [{
          data: [35, 15, 18, 38, 45, 35, 27, 35, 45, 35, 27, 45],
          type: 'line',
          borderColor: "red",
          pointRadius: 0, // Remove dots
          borderDash: [5, 5], // Create a dashed line
          borderWidth: 1
        },
        {
          data: [60, 30, 20, 45, 50, 40, 35, 43, 45, 35, 27, 65],
          type: 'bar',
          backgroundColor: "#000000",
          barPercentage: 0.2,
          borderRadius: 10,

        },
        {
          type: 'line',
          data: [20, 8, 12, 29, 35, 30, 20, 40, 45, 35, 27, 65],
          fill: true,
          backgroundColor: gradient,
          pointBackgroundColor: colors.purple.default,
          borderColor: colors.purple.default,
          pointRadius: 0,
          lineTension: 0.2,
          borderWidth: 2,
        }
      ],
      labels: datayValue.map(function(label) {
        return label.value; // Trả về giá trị nhãn
      }),
    },
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
          
        y: {
          max: 100,
          min: 0,
          ticks:{
            stepSize:25

          },
          grid: {
            color: '#464646'

          },
          
          
        },
        x: {
          grid: {
            display: false,
            color: '#464646'
          }
          
        },
      }
    }
  });
}
chart_overview();

function chart_total_earn() {
  var ctx = document.getElementById('Chart-total-earn').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['May', 'June', 'July', 'Aug', 'Sep', 'Oct'],
          datasets: [{
              label: '# of Votes',
              data: [650, 600, 650, 600, 650,600],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              pointRadius: 0
          }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
          scales: {
              y: {
                  position: 'left',
                  beginAtZero: true,
                  ticks:{
                    stepSize:200
          
                  },
                  grid: {
                    display: false
          
                  }
                  
              }
          }
      }
  });
}
chart_total_earn();