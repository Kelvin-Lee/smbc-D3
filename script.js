var rl = require('readline');
var fs = require('fs');
var d3 = require('d3');

document = require('jsdom').jsdom();

var lineReader = rl.createInterface({
  "input": fs.createReadStream(process.argv[2])
});

var set = new Set();

lineReader.on('line', function(line){
  
  var words = line.split(' ').map(function(word){
    return word.toLowerCase()
  });

  words.forEach(function(word){
    if (!word.match(/^\d{4}-\d{2}-\d{2}/) && !set.has(word))
      set.add(word);
  });
});

lineReader.on('close', function(){

  var dataset = Array.from(set);

  d3.select("body")
    .selectAll("p")
    .data(dataset)
    .enter()
    .append("p")
    .text(":]") ;

  console.log(d3.select("body").html());

})
