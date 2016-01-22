console.log("Start");
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var fs = require('fs')
fs.readFile('people.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var families = data.replace(new RegExp('\r', 'g'),'').split('\n');
  console.log(families.length.toString())

  var people = [];
  for(var i = 0; i < families.length - 1; i++){
    people.push(families[i].split(' '));
  }
  console.log(people.length.toString())
  var gotGift = [];

  for(var i = 0; i < families.length - 1; i++){
    var family = families[i].split(' ');
    for(var j = 0; j < family.length; j++){
      var found = false;
      var famnum = -1;
      console.log("Start Row: " + i)
      do{
        famnum = getRandomInt(0, people.length-1);
        console.log("Row: " + famnum)
        console.log("people: " + people[famnum])
      } while(famnum == i || people[famnum].length == 0)
      var index = getRandomInt(0, people[famnum].length-1);
      gotGift.push(family[j] + " --> " + people[famnum][index])
      people[famnum].splice(index, 1);
      console.log(people.length.toString())
    }
  }
  for(var x = 0; x < gotGift.length; x++){
    console.log(gotGift[x]);
  }
});
