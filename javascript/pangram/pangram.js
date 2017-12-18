function Pangram(message){
  this.isPangram = function isPangram(){
    var strippedMessage = message.toLowerCase().match(/[a-z]/g);
    if (!strippedMessage) return false;

    return Array.from("abcdefghijklmnopqrstuvwxyz").every(function checkForLetter(letter){
      return strippedMessage.includes(letter);
    })
  }
}

module.exports = Pangram;
