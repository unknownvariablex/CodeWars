function filter_list(l) {
  //filter to remove strings. typeof() returns string of type of element
  const filteredl = l.filter(el => typeof(el) !== "string")
   // Return a new array with the strings filtered ou
  return filteredl
}