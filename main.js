// This function is to scramble a sorted array
function scrambleArray(sortedArray) {
    if (!Array.isArray(sortedArray)) {
      throw new Error('Input is not an array');
    }
    
    if (sortedArray.length < 2) {
      return sortedArray;
    }
    
    const scrambledArray = [...sortedArray]; // This is to create a copy of the input array
    for (let i = 0; i < scrambledArray.length; i++) {
      // This is to generate a random index between i and the end of the array
      const randomIndex = Math.floor(Math.random() * (scrambledArray.length - i)) + i;
      // This is to swap the values at index i and randomIndex
      [scrambledArray[i], scrambledArray[randomIndex]] = [scrambledArray[randomIndex], scrambledArray[i]];
    }
    return scrambledArray;
  }
  
  // This is to get references to HTML elements
  const sortedArrayElement = document.getElementById('sortedArray');
  const scrambledArrayElement = document.getElementById('scrambledArray');
  const scrambleButton = document.getElementById('scrambleButton');
  
  // This is to generate a sorted array of numbers
  const sortedArray = [7, 13, 13, 18, 29, 33];
  sortedArrayElement.textContent = sortedArray.join(', ');
  
  // This takes care of the handle button click event
  scrambleButton.addEventListener('click', () => {
    // This is to scramble the sorted array
    const scrambledArray = scrambleArray(sortedArray);
    
    // This is to display the scrambled array
    scrambledArrayElement.textContent = scrambledArray.join(', ');
  });
  