function Gigasecond(input){
  this.date = function calculateFutureGigasecond(){
    var gigasecond = 1000000000000;
    return new Date(input.getTime() + gigasecond);
  }
}


module.exports = Gigasecond;
