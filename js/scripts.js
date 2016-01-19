var triangle = function(a, b, c) {

  if ((a + b) <= c || (b + c) <= a || (a + c) <= b) {
  return false;
  } else if (a && b === c) {
   return true;
  } else if ((a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)) {
   return true;
  } else if ((a !== b) && (b !== c) && (a !== c)) {
  return true;
  }
};
