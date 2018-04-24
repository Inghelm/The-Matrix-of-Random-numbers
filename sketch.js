// The Matrix of Random numbers!
// Design : MR K.ING
var symbolSize = 18;
var streams = [];
function setup() {
   createCanvas(500, 500);	
   background(0);
   var x = 0;
   for (var i = 0; i <= width / symbolSize; i++) {
    var stream = new Stream();
    stream.generateSymbols(x, random(-850, 0));
    streams.push(stream);
     x += symbolSize
   }
   textSize(symbolSize);
}
function draw() {
   background(0, 77, 102);
   streams.forEach(function(stream) {
   stream.render();	
   });
}
function Symbol(x, y, speed, first) {
   this.x = x;
   this.y = y;
   this.value;
   this.speed = speed;
   this.switchInterval = round(random(2, 20));
   this.first = first;
   this.setToRandomSymbol = function() {
     if (frameCount % this.switchInterval == 0) {
      this.value = getRandomInt(10);
   }
  }
   this.rain = function(){
   this.y = (this.y >= height) ? 0 : this.y += this.speed;
  }
}
function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max));
}
function Stream() {
   this.symbols = [];
   this.totalSymbols = round(random(5, 30));
   this.speed = random(2, 6);
   this.generateSymbols = function(x, y) {
     var first = round(random(0, 4)) == 1;
      for (var i =0; i <= this.totalSymbols; i++) {
       symbol = new Symbol(x, y, this.speed, first);
       symbol.setToRandomSymbol();
        this.symbols.push(symbol);
         y -= symbolSize;
         first = false;
   }
  }
   this.render = function(){
   this.symbols.forEach(function(symbol) {
     if (symbol.first){
      fill(255, 255, 255);
   } else {
      fill(0, 172, 231);
}
   text(symbol.value, symbol.x, symbol.y);
   symbol.rain();
   symbol.setToRandomSymbol();	
   });
   }		
}
