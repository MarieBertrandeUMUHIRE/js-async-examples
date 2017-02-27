  // function firstTask(){
  //   console.log("first task done");
  // }
  // function secondTask(){
  //   console.log("second task done");
  // }
  // function thirdTask(){
  //   console.log("thrid task done");
  // }
  // setTimeout(firstTask,2000);
  // setTimeout(secondTask,4000);
  // setTimeout(thirdTask,000);


function changeColor() {
  setTimeout(function() {
    document.getElementById("firstHeading").style.background = "grey";
    setTimeout(function() {
      document.getElementById("firstHeading").style.color = "white";
      setTimeout(function() {
        document.getElementById("secondHeading").style.color = "green";
        setTimeout(function() {
          document.getElementById("secondHeading").style.background = "yellow";
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}