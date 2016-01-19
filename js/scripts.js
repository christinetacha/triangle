var triangle = function(a, b, c) {
  if (a && b === c) {
  return true;
} else if ((a === b && a != c) || (a === c && a != b)) { 
  return true;
}

};
