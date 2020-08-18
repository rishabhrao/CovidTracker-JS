function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  document.querySelector("#title").innerHTML = tabName;

  var url =
    "https://spreadsheets.google.com/feeds/list/1w8_fk-tp_xfL4BjxqgtDxlWMMEtSL8xvFBf8gikxMHU/od6/public/values?alt=json";
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var countSummary = xmlhttp.responseText;
      var countConfirmed = countSummary.substring(1804, 1813);
      var countActive = countSummary.substring(2440, 2447);
      var countRecovered = countSummary.substring(3066, 3075);
      var countDeaths = countSummary.substring(3690, 3696);
      var countDeathRate = countSummary.substring(4309, 4314);
      var lastUpdatedTime = countSummary.substring(4935, 4943);
      document.getElementById("countConfirmed").innerHTML = countConfirmed;
      document.getElementById("countActive").innerHTML = countActive;
      document.getElementById("countRecovered").innerHTML = countRecovered;
      document.getElementById("countDeaths").innerHTML = countDeaths;
      document.getElementById("countDeathRate").innerHTML = countDeathRate;
      document.getElementById("lastUpdatedTime").innerHTML = lastUpdatedTime;
    } else {
      document.getElementById("countConfirmed").innerHTML =
        "Please Check your Internet Connection!";
      document.getElementById("countActive").innerHTML =
        "Please Check your Internet Connection!";
      document.getElementById("countRecovered").innerHTML =
        "Please Check your Internet Connection!";
      document.getElementById("countDeaths").innerHTML =
        "Please Check your Internet Connection!";
      document.getElementById("countDeathRate").innerHTML =
        "Please Check your Internet Connection!";
      document.getElementById("lastUpdatedTime").innerHTML =
        "Please Check your Internet Connection!";
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send(null);
}
