function scuberGreetingForFeet(feet){
  // Write your code here!
  let answer;

  if (feet<=400) {
    return "This one is on me!";
  } else if (feet > 2500) {
    return "No can do.";
  }else if (feet >=2000) {
    return "I will gladly take your thirty bucks.";
  }
}

function ternaryCheckCity(){
  // Write your code here!
  let result;

  city === "NYC" ? (result = "ok, sounds good."): (result = "No go.");

  return result;
}

function switchOnCharmFromTip(){
  // Write your code here!

  switch (tip) {
    case "generous":
      return "Thank you so much.":
      break
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
      break;
  }
}