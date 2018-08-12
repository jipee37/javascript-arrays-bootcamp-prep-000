 var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

 addElementToBeginningOfArray = (array, element) => [element, ...array]

 destructivelyAddElementToBeginningOfArray = (array, element) => {
   array.unshift(element)
   return array
 }

 accessElementInArray = (array, index) => array[index]

 destructivelyRemoveElementFromBeginningOfArray = (array) => {
   array.shift()
   return array
 }

 //removeElementFromEndOfArray = (array) => array.slice(1)

 /*destructivelyRemoveElementFromEndOfArray = (array) => {
   array.pop()
   return array
 }*/

 //removeElementFromEndOfArray = (array) => array.slice(0, array.length-1)
