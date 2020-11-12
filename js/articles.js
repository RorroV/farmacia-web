//Store a function that loops through each service list item and hides it
function hideSkills() {
    for (var i = 0; i < document.getElementsByClassName("skill-description").length; i++) {
      document.getElementsByClassName("skill-description")[i].style.display = "none";
    };
  };

  //On page load, hide all the service descriptions...
  hideSkills();

  //...Except the first
  document.getElementsByClassName("skill-description")[0].style.display = "block";

  //Store a function that deactivates service headlines
  function deactivate() {
    document.getElementById("skill-h-1").className = "inactive-h3";
    document.getElementById("skill-h-2").className = "inactive-h3";
    document.getElementById("skill-h-3").className = "inactive-h3";
    document.getElementById("skill-h-4").className = "inactive-h3";
    document.getElementById("skill-h-5").className = "inactive-h3";
    document.getElementById("skill-h-6").className = "inactive-h3";
    document.getElementById("skill-h-7").className = "inactive-h3";
  };

  //Collect IDs into an iterable array
  var headlineArray = [
    "skill-h-1", //equal to headlineArray[0]
    "skill-h-2", //equal to headlineArray[1]
    "skill-h-3", //equal to headlineArray[2]
    "skill-h-4", //equal to headlineArray[3]
    "skill-h-5", //equal to headlineArray[4]
    "skill-h-6", //equal to headlineArray[5]
    "skill-h-7", //equal to headlineArray[6]
  ];

  //Go through each headline one at a time
  for (var i = 0; i < headlineArray.length; i++) {
    //Listen for a click on each headline
    document.getElementById(headlineArray[i]).addEventListener("click", function() {
      //If ANY of the headlines are clicked, hide ALL
      hideSkills();
      deactivate();
      //Record the ID of the clicked icon
      var headlineClicked = this.getAttribute("id");

      //Test which headline was clicked and only display the clicked headline's matching description
      if (headlineClicked == "skill-h-1") {
        document.getElementById("skill-h-1").className = "active-h3";
        document.getElementById("skill-description-1").style.display = "block";
        document.getElementsByTagName("h3")[0].style.color = "#fff";
      } else if (headlineClicked == "skill-h-2") {
        document.getElementById("skill-h-2").className = "active-h3";
        document.getElementById("skill-description-2").style.display = "block";
        document.getElementsByTagName("h3")[1].style.color = "#fff";
      } else if (headlineClicked == "skill-h-3") {
        document.getElementById("skill-h-3").className = "active-h3";
        document.getElementById("skill-description-3").style.display = "block";
        document.getElementsByTagName("h3")[2].style.color = "#fff";
      } else if (headlineClicked == "skill-h-4") {
        document.getElementById("skill-h-4").className = "active-h3";
        document.getElementById("skill-description-4").style.display = "block";
        document.getElementsByTagName("h3")[3].style.color = "#fff";
      } else if (headlineClicked == "skill-h-5") {
        document.getElementById("skill-h-5").className = "active-h3";
        document.getElementById("skill-description-5").style.display = "block";
        document.getElementsByTagName("h3")[4].style.color = "#fff";
      } else if (headlineClicked == "skill-h-6") {
        document.getElementById("skill-h-6").className = "active-h3";
        document.getElementById("skill-description-6").style.display = "block";
        document.getElementsByTagName("h3")[5].style.color = "#fff";
      } else if (headlineClicked == "skill-h-7") {
        document.getElementById("skill-h-7").className = "active-h3";
        document.getElementById("skill-description-7").style.display = "block";
        document.getElementsByTagName("h3")[6].style.color = "#fff";
      } else {
        console.log("No headline was clicked.");
      };
    }, false);
  };