// Each number function takes an a operation function
//  It checks if a opFunction is passed in
//    If one is passed in, it gets the operation type and number
//    and returns the result of the operation with the number of the function and the number
//    given from the passed in function
//  If opFunction is not passed in
//    it returns just the number of the function
function zero(opFunction) {
  if (opFunction) {
    if (opFunction.operation == "+") {
      return 0 + opFunction.number;
    } else if (opFunction.operation == "-") {
      return 0 - opFunction.number;
    } else if (opFunction.operation == "*") {
      return 0 * opFunction.number;
    } else {
      return Math.floor(0 / opFunction.number);
    }
  }
  return 0;
}
function one(opFunction) {
  if (opFunction) {
    if (opFunction.operation == "+") {
      return 1 + opFunction.number;
    } else if (opFunction.operation == "-") {
      return 1 - opFunction.number;
    } else if (opFunction.operation == "*") {
      return 1 * opFunction.number;
    } else {
      return Math.floor(1 / opFunction.number);
    }
  }
  return 1;
}
function two(opFunction) {
  if (opFunction) {
    if (opFunction.operation == "+") {
      return 2 + opFunction.number;
    } else if (opFunction.operation == "-") {
      return 2 - opFunction.number;
    } else if (opFunction.operation == "*") {
      return 2 * opFunction.number;
    } else {
      return Math.floor(2 / opFunction.number);
    }
  }
  return 2;
}
function three(opFunction) {
  if (opFunction) {
    if (opFunction.operation == "+") {
      return 3 + opFunction.number;
    } else if (opFunction.operation == "-") {
      return 3 - opFunction.number;
    } else if (opFunction.operation == "*") {
      return 3 * opFunction.number;
    } else {
      return Math.floor(3 / opFunction.number);
    }
  }
  return 3;
}
function four(opFunction) {
  if (opFunction) {
    if (opFunction.operation == "+") {
      return 4 + opFunction.number;
    } else if (opFunction.operation == "-") {
      return 4 - opFunction.number;
    } else if (opFunction.operation == "*") {
      return 4 * opFunction.number;
    } else {
      return Math.floor(4 / opFunction.number);
    }
  }
  return 4;
}
function five(opFunction) {
  if (opFunction) {
    if (opFunction.operation == "+") {
      return 5 + opFunction.number;
    } else if (opFunction.operation == "-") {
      return 5 - opFunction.number;
    } else if (opFunction.operation == "*") {
      return 5 * opFunction.number;
    } else {
      return Math.floor(5 / opFunction.number);
    }
  }
  return 5;
}
function six(opFunction) {
  if (opFunction) {
    if (opFunction.operation == "+") {
      return 6 + opFunction.number;
    } else if (opFunction.operation == "-") {
      return 6 - opFunction.number;
    } else if (opFunction.operation == "*") {
      return 6 * opFunction.number;
    } else {
      return Math.floor(6 / opFunction.number);
    }
  }
  return 6;
}
function seven(opFunction) {
  if (opFunction) {
    if (opFunction.operation == "+") {
      return 7 + opFunction.number;
    } else if (opFunction.operation == "-") {
      return 7 - opFunction.number;
    } else if (opFunction.operation == "*") {
      return 7 * opFunction.number;
    } else {
      return Math.floor(7 / opFunction.number);
    }
  }
  return 7;
}
function eight(opFunction) {
  if (opFunction) {
    if (opFunction.operation == "+") {
      return 8 + opFunction.number;
    } else if (opFunction.operation == "-") {
      return 8 - opFunction.number;
    } else if (opFunction.operation == "*") {
      return 8 * opFunction.number;
    } else {
      return Math.floor(8 / opFunction.number);
    }
  }
  return 8;
}
function nine(opFunction) {
  if (opFunction) {
    if (opFunction.operation == "+") {
      return 9 + opFunction.number;
    } else if (opFunction.operation == "-") {
      return 9 - opFunction.number;
    } else if (opFunction.operation == "*") {
      return 9 * opFunction.number;
    } else {
      return Math.floor(9 / opFunction.number);
    }
  }
  return 9;
}
// operation functions return an object with the operation type and number passed in (right operand)
function plus(num) {
  let operObj = {
    operation: "+",
    number: num
  };
  return operObj;
}
function minus(num) {
  let operObj = {
    operation: "-",
    number: num
  };
  return operObj;
}
function times(num) {
  let operObj = {
    operation: "*",
    number: num
  };
  return operObj;
}
function dividedBy(num) {
  let operObj = {
    operation: "/",
    number: num
  };
  return operObj;
}
