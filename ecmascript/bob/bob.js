/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {
  hey(message) {
    if (message == 0) return "Fine. Be that way!";

    let strippedMessage = message.match(/\w/g).join('');
    if(message === message.toUpperCase() && Number.isNaN(Number(strippedMessage))) {
      return "Whoa, chill out!";
    } else if(message[message.length - 1] === "?") {
      return "Sure.";
    } else {
    return "Whatever."
    }
  }
}

export default Bob;
