function orderWeight(strng) {
  const weightArray = strng.split(' ');
  const sortedKeys = weightArray.sort((a, b) => {
    // Calculate sum for weight 'a'
    const sumA = a.split('').reduce((sum, digit) => sum + Number(digit), 0);
    // Calculate sum for weight 'b' 
    const sumB = b.split('').reduce((sum, digit) => sum + Number(digit), 0);
    
    // First, sort by sum value
    if (sumA !== sumB) {
      return sumA - sumB;
    }
    // If sums are equal, sort by string order
    return a.localeCompare(b);
  });
  
  return sortedKeys.join(' ');
}