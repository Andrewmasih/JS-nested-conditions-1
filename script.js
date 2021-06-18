/* 'nested condition' is a conditional statement nested inside another conditional statement, it check if the condiontion is TRUE or FALSE, bu creating a new 'if/else' block inside of an exisisting 'if/else' blocks*/

if (2 > 1) {
  console.log("if condition is excuted");
  if (1 > 0) {
    console.log("nested 'if' condition1 is excuted");
  }
}

/* 2 is higher than 1 so 'if' statement is TRUE, then moves oto the next code, also 1 is greater than , so the stseent is also TRUE.  */

