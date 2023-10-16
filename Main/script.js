// ---------------graph -------------------
var data = google.visualization.arrayToDataTable([
  ["Element", "Density", { role: "style" }, { role: "annotation" }],
  ["Copper", 8.94, "#b87333", "Cu"],
  ["Silver", 10.49, "silver", "Ag"],
  ["Gold", 19.3, "gold", "Au"],
  ["Platinum", 21.45, "color: #e5e4e2", "Pt"],
]);

function getValueAt(column, dataTable, row) {
  return dataTable.getFormattedValue(row, column);
}

function dashboard() {
  document.getElementById("page-1").style.display = "block";
  document.getElementById("page-2").style.display = "none";
  document.getElementById("page-3").style.display = "none";
  document.getElementById("page-4").style.display = "none";
  document.getElementById("page-5").style.display = "none";
  document.getElementById("page-6").style.display = "none";

  document.getElementById("menu-item-1").style.backgroundColor = "#FBEDD9";
  document.getElementById("menu-item-2").style.backgroundColor = "white";
  document.getElementById("menu-item-3").style.backgroundColor = "white";
  document.getElementById("menu-item-4").style.backgroundColor = "white";
  document.getElementById("menu-item-5").style.backgroundColor = "white";
  document.getElementById("menu-item-6").style.backgroundColor = "white";

document.getElementById('parent-main').style.gridTemplateColumns ='1fr 3fr 1fr';
document.getElementById('parent-main').style.gridTemplateRows ='1fr';

document.getElementById('div1').style.gridArea = '1 / 1 / 2 / 2';
document.getElementById('div2').style.gridArea = '1 / 2 / 2 / 3';
document.getElementById('div3').style.gridArea = '1 / 3 / 2 / 4';

document.getElementById('calender').getAttribute('src') = 'https://calendar.google.com/calendar/embed?height=300&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FKolkata&showTz=0&showTabs=0&showCalendars=0&showNav=1&showTitle=0&showPrint=0';
document.getElementById('events').getAttribute('src') = 'https://calendar.google.com/calendar/embed?height=300&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FKolkata&showTz=0&showTabs=0&showCalendars=0&showNav=0&showTitle=0&showPrint=0&mode=AGENDA&showDate=0&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%230B8043';

document.getElementById('dashboard').style.width = '59%';

document.getElementById('icon').style.marginRight='26px';

document.getElementById('div2').style.backgroundColor = '#FBEDD9';


}

function progress_chat() {
  document.getElementById("page-1").style.display = "none";
  document.getElementById("page-2").style.display = "block";
  document.getElementById("page-3").style.display = "none";
  document.getElementById("page-4").style.display = "none";
  document.getElementById("page-5").style.display = "none";
  document.getElementById("page-6").style.display = "none";

  document.getElementById("menu-item-1").style.backgroundColor = "white";
  document.getElementById("menu-item-2").style.backgroundColor = "#FBEDD9";
  document.getElementById("menu-item-3").style.backgroundColor = "white";
  document.getElementById("menu-item-4").style.backgroundColor = "white";
  document.getElementById("menu-item-5").style.backgroundColor = "white";
  document.getElementById("menu-item-6").style.backgroundColor = "white";

  document.getElementById('parent-main').style.gridTemplateColumns ='.25fr 1fr';
  document.getElementById('parent-main').style.gridTemplateRows ='1fr';
  
  document.getElementById('div1').style.gridArea = '1 / 1 / 2 / 2';
  document.getElementById('div2').style.gridArea = '1 / 2 / 2 / 3';
  document.getElementById('div3').style.display = 'none';

  document.getElementById('dashboard').style.width = '80%';

  document.getElementById('icon').style.marginRight='36px';

  document.getElementById('div2').style.backgroundColor = 'white';

}

function practice_tests() {
  document.getElementById("page-1").style.display = "none";
  document.getElementById("page-2").style.display = "none";
  document.getElementById("page-3").style.display = "block";
  document.getElementById("page-4").style.display = "none";
  document.getElementById("page-5").style.display = "none";
  document.getElementById("page-6").style.display = "none";

  document.getElementById("menu-item-1").style.backgroundColor = "white";
  document.getElementById("menu-item-2").style.backgroundColor = "white";
  document.getElementById("menu-item-3").style.backgroundColor = "#FBEDD9";
  document.getElementById("menu-item-4").style.backgroundColor = "white";
  document.getElementById("menu-item-5").style.backgroundColor = "white";
  document.getElementById("menu-item-6").style.backgroundColor = "white";

  document.getElementById("parent-main").style.gridTemplateColumns =
    ".25fr 1fr";
  document.getElementById("parent-main").style.gridTemplateRows = "1fr";

  document.getElementById("div1").style.gridArea = "1 / 1 / 2 / 2";
  document.getElementById("div2").style.gridArea = "1 / 2 / 2 / 3";
  document.getElementById("div3").style.display = "none";

  document.getElementById('dashboard').style.width = '80%';
  
  document.getElementById('icon').style.marginRight='36px';

}

function analyses() {
  document.getElementById('page-1').style.display = 'none';
  document.getElementById('page-2').style.display = 'none';
  document.getElementById('page-3').style.display = 'none';
  document.getElementById('page-4').style.display = 'block';
  document.getElementById('page-5').style.display = 'none';
  document.getElementById('page-6').style.display = 'none';

  document.getElementById('menu-item-1').style.backgroundColor = 'white';
  document.getElementById('menu-item-2').style.backgroundColor = 'white';
  document.getElementById('menu-item-3').style.backgroundColor = 'white';
  document.getElementById('menu-item-4').style.backgroundColor = '#FBEDD9';
  document.getElementById('menu-item-5').style.backgroundColor = 'white';
  document.getElementById('menu-item-6').style.backgroundColor = 'white';

  document.getElementById('parent-main').style.gridTemplateColumns =
    '.25fr 1fr';
  document.getElementById('parent-main').style.gridTemplateRows = '1fr';

  document.getElementById('div1').style.gridArea = '1 / 1 / 2 / 2';
  document.getElementById('div2').style.gridArea = '1 / 2 / 2 / 3';
  document.getElementById('div3').style.display = 'none';

  document.getElementById('dashboard').style.width = '80%';

  document.getElementById('icon').style.marginRight='36px';

}

function results() {
  document.getElementById("page-1").style.display = "none";
  document.getElementById("page-2").style.display = "none";
  document.getElementById("page-3").style.display = "none";
  document.getElementById("page-4").style.display = "none";
  document.getElementById("page-5").style.display = "block";
  document.getElementById("page-6").style.display = "none";

  document.getElementById("menu-item-1").style.backgroundColor = "white";
  document.getElementById("menu-item-2").style.backgroundColor = "white";
  document.getElementById("menu-item-3").style.backgroundColor = "white";
  document.getElementById("menu-item-4").style.backgroundColor = "white";
  document.getElementById("menu-item-5").style.backgroundColor = "#FBEDD9";
  document.getElementById("menu-item-6").style.backgroundColor = "white";

  document.getElementById("parent-main").style.gridTemplateColumns =
    ".25fr 1fr";
  document.getElementById("parent-main").style.gridTemplateRows = "1fr";

  document.getElementById("div1").style.gridArea = "1 / 1 / 2 / 2";
  document.getElementById("div2").style.gridArea = "1 / 2 / 2 / 3";
  document.getElementById("div3").style.display = "none";

  document.getElementById('dashboard').style.width = '80%';

  document.getElementById('icon').style.marginRight='36px';

}

function concept_videos() {
  document.getElementById("page-1").style.display = "none";
  document.getElementById("page-2").style.display = "none";
  document.getElementById("page-3").style.display = "none";
  document.getElementById("page-4").style.display = "none";
  document.getElementById("page-5").style.display = "none";
  document.getElementById("page-6").style.display = "block";

  document.getElementById("menu-item-1").style.backgroundColor = "white";
  document.getElementById("menu-item-2").style.backgroundColor = "white";
  document.getElementById("menu-item-3").style.backgroundColor = "white";
  document.getElementById("menu-item-4").style.backgroundColor = "white";
  document.getElementById("menu-item-5").style.backgroundColor = "white";
  document.getElementById("menu-item-6").style.backgroundColor = "#FBEDD9";

  document.getElementById("parent-main").style.gridTemplateColumns =
    ".25fr 1fr";
  document.getElementById("parent-main").style.gridTemplateRows = "1fr";

  document.getElementById("div1").style.gridArea = "1 / 1 / 2 / 2";
  document.getElementById("div2").style.gridArea = "1 / 2 / 2 / 3";
  document.getElementById("div3").style.display = "none";

  document.getElementById('dashboard').style.width = '80%';

  document.getElementById('icon').style.marginRight='36px';

}

google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'My Daily Activities',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }

      google.charts.load('current', {'packages':['line', 'corechart']});
      google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var button = document.getElementById('change-chart');
      var chartDiv = document.getElementById('chart_div');

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Month');
      data.addColumn('number', "Average Temperature");
      data.addColumn('number', "Average Hours of Daylight");

      data.addRows([
        [new Date(2014, 0),  -.5,  5.7],
        [new Date(2014, 1),   .4,  8.7],
        [new Date(2014, 2),   .5,   12],
        [new Date(2014, 3),  2.9, 15.3],
        [new Date(2014, 4),  6.3, 18.6],
        [new Date(2014, 5),    9, 20.9],
        [new Date(2014, 6), 10.6, 19.8],
        [new Date(2014, 7), 10.3, 16.6],
        [new Date(2014, 8),  7.4, 13.3],
        [new Date(2014, 9),  4.4,  9.9],
        [new Date(2014, 10), 1.1,  6.6],
        [new Date(2014, 11), -.2,  4.5]
      ]);

      var materialOptions = {
        chart: {
          title: 'Average Temperatures and Daylight in Iceland Throughout the Year'
        },
        width: 600,
        height: 500,
        series: {
          // Gives each series an axis name that matches the Y-axis below.
          0: {axis: 'Temps'},
          1: {axis: 'Daylight'}
        },
        axes: {
          // Adds labels to each axis; they don't have to match the axis names.
          y: {
            Temps: {label: 'Temps (Celsius)'},
            Daylight: {label: 'Daylight'}
          }
        }
      };

      var classicOptions = {
        title: 'Average Temperatures and Daylight in Iceland Throughout the Year',
        width: 900,
        height: 500,
        // Gives each series an axis that matches the vAxes number below.
        series: {
          0: {targetAxisIndex: 0},
          1: {targetAxisIndex: 1}
        },
        vAxes: {
          // Adds titles to each axis.
          0: {title: 'Temps (Celsius)'},
          1: {title: 'Daylight'}
        },
        hAxis: {
          ticks: [new Date(2014, 0), new Date(2014, 1), new Date(2014, 2), new Date(2014, 3),
                  new Date(2014, 4),  new Date(2014, 5), new Date(2014, 6), new Date(2014, 7),
                  new Date(2014, 8), new Date(2014, 9), new Date(2014, 10), new Date(2014, 11)
                 ]
        },
        vAxis: {
          viewWindow: {
            max: 30
          }
        }
      };

      function drawMaterialChart() {
        var materialChart = new google.charts.Line(chartDiv);
        materialChart.draw(data, materialOptions);
        button.innerText = 'Change to Classic';
        button.onclick = drawClassicChart;
      }

      function drawClassicChart() {
        var classicChart = new google.visualization.LineChart(chartDiv);
        classicChart.draw(data, classicOptions);
        button.innerText = 'Change to Material';
        button.onclick = drawMaterialChart;
      }

      drawMaterialChart();

    }
