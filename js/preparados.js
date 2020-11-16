//Store a function that loops through each service list item and hides it
function hidePreps() {
    for (var i = 0; i < document.getElementsByClassName("skill-description").length; i++) {
      document.getElementsByClassName("skill-description")[i].style.display = "none";
    };
  };

  //On page load, hide all the service descriptions...
  hidePreps();

  //...Except the first
  document.getElementsByClassName("skill-description")[0].style.display = "block";

  //Store a function that deactivates service headlines
  function deactivate() {
    document.getElementById("prep-h-1").className = "inactive-h3";
    document.getElementById("prep-h-2").className = "inactive-h3";
    document.getElementById("prep-h-3").className = "inactive-h3";
    document.getElementById("prep-h-4").className = "inactive-h3";
    document.getElementById("prep-h-5").className = "inactive-h3";
    document.getElementById("prep-h-6").className = "inactive-h3";
    document.getElementById("prep-h-7").className = "inactive-h3";
    document.getElementById("prep-h-8").className = "inactive-h3";
    document.getElementById("prep-h-9").className = "inactive-h3";
  };

  //Collect IDs into an iterable array
  var headlineArray = [
    "prep-h-1", //equal to headlineArray[0]
    "prep-h-2", //equal to headlineArray[1]
    "prep-h-3", //equal to headlineArray[2]
    "prep-h-4", //equal to headlineArray[3]
    "prep-h-5", //equal to headlineArray[4]
    "prep-h-6", //equal to headlineArray[5]
    "prep-h-7", //equal to headlineArray[6]
    "prep-h-8", //equal to headlineArray[7]
    "prep-h-9", //equal to headlineArray[8]
  ];

  //Go through each headline one at a time
  for (var i = 0; i < headlineArray.length; i++) {
    //Listen for a click on each headline
    document.getElementById(headlineArray[i]).addEventListener("click", function() {
      //If ANY of the headlines are clicked, hide ALL
      hidePreps();
      deactivate();
      //Record the ID of the clicked icon
      var headlineClicked = this.getAttribute("id");

      //Test which headline was clicked and only display the clicked headline's matching description
      if (headlineClicked == "prep-h-1") {
        document.getElementById("prep-h-1").className = "active-h3";
        document.getElementById("prep-description-1").style.display = "block";
        document.getElementsByTagName("h3")[0].style.color = "#fff";
      } else if (headlineClicked == "prep-h-2") {
        document.getElementById("prep-h-2").className = "active-h3";
        document.getElementById("prep-description-2").style.display = "block";
        document.getElementsByTagName("h3")[1].style.color = "#fff";
      } else if (headlineClicked == "prep-h-3") {
        document.getElementById("prep-h-3").className = "active-h3";
        document.getElementById("prep-description-3").style.display = "block";
        document.getElementsByTagName("h3")[2].style.color = "#fff";
      } else if (headlineClicked == "prep-h-4") {
        document.getElementById("prep-h-4").className = "active-h3";
        document.getElementById("prep-description-4").style.display = "block";
        document.getElementsByTagName("h3")[3].style.color = "#fff";
      } else if (headlineClicked == "prep-h-5") {
        document.getElementById("prep-h-5").className = "active-h3";
        document.getElementById("prep-description-5").style.display = "block";
        document.getElementsByTagName("h3")[4].style.color = "#fff";
      } else if (headlineClicked == "prep-h-6") {
        document.getElementById("prep-h-6").className = "active-h3";
        document.getElementById("prep-description-6").style.display = "block";
        document.getElementsByTagName("h3")[5].style.color = "#fff";
      } else if (headlineClicked == "prep-h-7") {
        document.getElementById("prep-h-7").className = "active-h3";
        document.getElementById("prep-description-7").style.display = "block";
        document.getElementsByTagName("h3")[6].style.color = "#fff";
      } else if (headlineClicked == "prep-h-8") {
        document.getElementById("prep-h-8").className = "active-h3";
        document.getElementById("prep-description-8").style.display = "block";
        document.getElementsByTagName("h3")[7].style.color = "#fff";
      } else if (headlineClicked == "prep-h-9") {
        document.getElementById("prep-h-9").className = "active-h3";
        document.getElementById("prep-description-9").style.display = "block";
        document.getElementsByTagName("h3")[8].style.color = "#fff";
      } else {
        console.log("No headline was clicked.");
      };
    }, false);
  };