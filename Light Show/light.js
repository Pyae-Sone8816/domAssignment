function light(show) {
  var pic;
  if (show == 0) {
    pic = "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg";
  } else {
    pic = "https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg";
  }
  document.getElementById("bulb").src = pic;
}
