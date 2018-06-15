window.onload = function() {
  addThree()
  completeList();
}

var sixThroughNineArray = [ 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN' ];
var teensArray = [ 'ELEVEN', 'TWELVE', 'THIRTEEN', 'FOURTEEN', 'FIFTEEN', 'SIXTEEN', 'SEVENTEEN', 'EIGHTEEN', 'NINETEEN'];
var oneThroughNineArray = [ '', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE'];
var tensArray = ['TWENTY', 'THIRTY', 'FORTY', 'FIFTY', 'SIXTY', 'SEVENTY', 'EIGHTY', 'NINETY']

function addThree() {
  var newLi = document.createElement("LI");
  var newSpan = document.createElement("SPAN");
  newLi.appendChild(newSpan);
  var textNode = document.createTextNode("THREE");
  newSpan.appendChild(textNode);
  var list = document.querySelector("ol");
  list.insertBefore(newLi, list.childNodes[4]);
}


function addNumbers(passedArray) {
  for (var i=0; i < passedArray.length; i++ ) {
    var item = document.createElement('li');
    var span = document.createElement('span');
    item.appendChild(span);
    var list = document.querySelector("ol");
    span.appendChild(document.createTextNode(passedArray[i]));
    list.appendChild(item);
  }
}
function addTens(spot) {
  if (spot < 8) {
    for (var i=0; i < oneThroughNineArray.length; i++ ) {
      var item = document.createElement('li');
      var span = document.createElement('span');
      item.appendChild(span);
      var list = document.querySelector("ol");
      span.appendChild(document.createTextNode(tensArray[spot] + oneThroughNine[i]));
      list.appendChild(item);
    }
  }
}


function completeList() {
  sixThroughNine = sixThroughNineArray.slice(0,5);
  teens = teensArray.slice(0,9);
  oneThroughNine = oneThroughNineArray.slice(0,10);
  addNumbers(sixThroughNine);
  addNumbers(teens);
  addTens(0);
  addTens(1);
  addTens(2);
  addTens(3);
  addTens(4);
  addTens(5);
  addTens(6);
  addTens(7);
  addTens(8);
  addTens(9);
  var item = document.createElement('li');
  var span = document.createElement('span');
  item.appendChild(span);
  var list = document.querySelector("ol");
  span.appendChild(document.createTextNode('ONE HUNDRED'));
  list.appendChild(item);
}
