function buildFavThingsList() {
  const item1 = document.getElementById("flave1").value;
  const item2 = document.getElementById("flave2").value;
  const item3 = document.getElementById("flave3").value;

  const flaveThings = [item1, item2, item3]
  
  // Est. ul element
  const flaveList = document.createElement("ul");

  // Est. li elements using a forEach loop
  flaveThings.forEach(function(flaveThing) {
    let li = document.createElement("li");
    li.append(flaveThing);
    flaveList.append(li);
  });
  // const list1 = document.createElement("li")
  // list1.append(flaveThings[1]);
  // const list2 = document.createElement("li")
  // list2.append(flaveThings[0]);
  // const list3 = document.createElement("li")
  // list3.append(flaveThings[2]);
  // // Add li to ul
  // flaveList.append(list1, list2, list3);




  // const listTwo = [];
  // listTwo.push(list1, list2, list3);
  
  // Add ul to DOM
  const flaveContent = document.getElementById("flaveThings")
  flaveContent.append(flaveList);

}

window.addEventListener("load", function() {
  // When submit button clicked
  
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Call function to retrieve results and add to an array
    buildFavThingsList();

  

  });
});