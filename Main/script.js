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
