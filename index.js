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
    document.querySelector('#title').innerHTML = tabName;

    var url="https://docs.google.com/spreadsheets/d/e/2PACX-1vS0qhVBP5W_Hb_ZtY2rOVKX_JM4Irt4yJUxshZY__pQBBq2oqwd5mc_7VeW-x6kdcz2MtMGo4rg5rDT/pub?gid=0&single=true&range=B2:B7&output=csv";
    xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status==200){
            var countSummary = xmlhttp.responseText;
            var splitcountSummary = countSummary.split('"');
            var countSummaryDeathRateLastUpdated = splitcountSummary[8];
            var splitcountSummaryDeathRateLastUpdated = countSummaryDeathRateLastUpdated.split('%');
            document.getElementById("countConfirmed").innerHTML = splitcountSummary[1];
            document.getElementById("countActive").innerHTML = splitcountSummary[3];
            document.getElementById("countRecovered").innerHTML = splitcountSummary[5];
            document.getElementById("countDeaths").innerHTML = splitcountSummary[7];
            document.getElementById("countDeathRate").innerHTML = splitcountSummaryDeathRateLastUpdated[0] + "%";
            document.getElementById("lastUpdatedTime").innerHTML = splitcountSummaryDeathRateLastUpdated[1];
        }
        else {
            document.getElementById("countConfirmed").innerHTML = "Please Check your Internet Connection!";
            document.getElementById("countActive").innerHTML = "Please Check your Internet Connection!";
            document.getElementById("countRecovered").innerHTML = "Please Check your Internet Connection!";
            document.getElementById("countDeaths").innerHTML = "Please Check your Internet Connection!";
            document.getElementById("countDeathRate").innerHTML = "Please Check your Internet Connection!";
            document.getElementById("lastUpdatedTime").innerHTML = "Please Check your Internet Connection!";
        }
    };
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
}