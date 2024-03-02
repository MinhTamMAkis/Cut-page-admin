 /**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create map instance
var chart = am4core.create("mapdiv", am4maps.MapChart);
chart.width = am4core.percent(100);
chart.height = am4core.percent(100);
// Set map definition
chart.geodata = am4geodata_worldHigh;

// Set projection
chart.projection = new am4maps.projections.Mercator();

// Export
// chart.exporting.menu = new am4core.ExportMenu();

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();
chart.zoomControl.align = "left";
chart.zoomControl.valign = "top";


 // Adjust the top position as needed


/*
var homeButton = new am4core.Button();
homeButton.events.on("hit", function() {
  chart.goHome();
});

homeButton.icon = new am4core.Sprite();
homeButton.padding(7, 5, 7, 5);
homeButton.width = 30;
homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
homeButton.marginBottom = 10;
homeButton.parent = chart.zoomControl;
homeButton.insertBefore(chart.zoomControl.plusButton);
*/
// Center on the groups by default
chart.homeZoomLevel = 1.5;
chart.homeGeoPoint = { longitude: 10, latitude: 52 };

// The rest of the world.
var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
var worldSeriesName = "world";
worldSeries.name = worldSeriesName;
worldSeries.useGeodata = true;
worldSeries.fillOpacity = 1;
worldSeries.hiddenInLegend = true;
worldSeries.mapPolygons.template.nonScalingStroke = true;

// Only show map without any data or legend
chart.legend = null;

// Tooltip
worldSeries.mapPolygons.template.tooltipText = "{name}";

// Disable hover events
worldSeries.mapPolygons.template.events.disableType("over");
worldSeries.mapPolygons.template.events.disableType("out");
document.querySelector("#mapdiv g[aria-labelledby='id-79-title']").remove();
