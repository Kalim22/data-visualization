// function for calculate mean
export const calculateMean = (arr, alcoholType) => {

    // variables for storing values
    let sumOfFlavanoidsValue = 0
    let sumOfGammaValue = 0
    let iterationForFlavanoidsValue = 0
    let newArrayofGammaValues = []

    // for loop for iterating the items array
    for (let i = 0; i < arr.length; i++) {
        // condition for checking which type of alcohol is
        if (arr[i].Alcohol === alcoholType) {

            iterationForFlavanoidsValue++

            // adding flavanoids value in a variable
            sumOfFlavanoidsValue += +arr[i].Flavanoids

            // calculating gammavalue by given formula
            let gammaValue = ((arr[i].Ash * arr[i].Hue) / arr[i].Magnesium).toFixed(3)

            // adding gamma value to a new array
            newArrayofGammaValues.push(+gammaValue)

            // condition for checking new array of gamma value has elements in it
            if (newArrayofGammaValues.length > 0) {
                for (let j = 0; j < newArrayofGammaValues.length; j++) {
                    // adding gamma value in a variable
                    sumOfGammaValue += newArrayofGammaValues[j]
                }
            }
        }
    }

    return {
        // sum of flavanoids
        sumFlav: sumOfFlavanoidsValue,
        // number of flavanoids elements
        iterationsFlav: iterationForFlavanoidsValue,
        // sum of gamma
        sumGamma: sumOfGammaValue,
        // number of gamma elements
        iterationGamma: newArrayofGammaValues.length
    }
}

  // function for calculate median
export  const calculateMedian = (arr, alcoholType) => {

    // variables for storing values
    let listValueForMedian = []
    let newArrayofGammaValues = []

    // for loop for iterating the items array
    for (let i = 0; i < arr.length; i++) {
      // condition for checking which type of alcohol is
      if (arr[i].Alcohol === alcoholType) {
        listValueForMedian.push(arr[i].Flavanoids)

        // calculating gammavalue by given formula
        let gammaValue = ((arr[i].Ash * arr[i].Hue) / arr[i].Magnesium).toFixed(3)

        // adding gamma value to a new array
        newArrayofGammaValues.push(+gammaValue)
      }
    }

    // variable for middle of the array length
    let middleofFlavVal = Math.floor(listValueForMedian.length / 2)
    let middleofGammaVal = Math.floor(listValueForMedian.length / 2)

    // condition for calculation on basis of array length is even or odd
    if (listValueForMedian.length % 2 === 0 && newArrayofGammaValues.length % 2 === 0) {
      return {
        medianOfFlav: ((+listValueForMedian[middleofFlavVal] + +listValueForMedian[middleofFlavVal - 1]) / 2).toFixed(3),
        medianofGamma: ((+newArrayofGammaValues[middleofGammaVal] + +newArrayofGammaValues[middleofGammaVal - 1]) / 2).toFixed(3)
      }
    }

    // condition for calculation on basis of array length is even or odd
    if (listValueForMedian.length % 2 != 0 && newArrayofGammaValues.length % 2 !== 0) {
      return {
        medianOfFlav: ((+listValueForMedian[middleofFlavVal] / 2)).toFixed(3),
        medianofGamma: ((+newArrayofGammaValues[middleofGammaVal] / 2)).toFixed(3),
      }
    }
  }

    // function for calculate mode
 export   const calculateMode = (arr, alcoholType) => {

        // variables for storing values
        let objectForFlavValues = {}
    
        // for loop for iterating the items array
        for (let i = 0; i < arr.length; i++) {
          // condition for checking which type of alcohol is
          if (arr[i].Alcohol === alcoholType) {
            // checking other condition for objects has this value store in it or not
            if (objectForFlavValues[arr[i].Flavanoids]) {
              objectForFlavValues[arr[i].Flavanoids] += 1
            } else {
              objectForFlavValues[arr[i].Flavanoids] = 1
            }
          }
        }
        // finding the maximum number of value of a key in a object
        let maxValueofFlav = Object.keys(objectForFlavValues).reduce((a, b) => objectForFlavValues[a] > objectForFlavValues[b] ? a : b)
    
        return maxValueofFlav
      }

      
// function for calculate mode for gamma values
 export const calculateGammaMode = (arr, alcoholType) => {

    // function for calculate mode
    let newArrayofGammaValues = []
    let objectforGammaValues = {}

    // map function for iterating the items array
    arr.map((ele) => {
      if (ele.Alcohol === alcoholType) {
        
        // calculating gammavalue by given formula
        let gammaValue = ((ele.Ash * ele.Hue) / ele.Magnesium).toFixed(1)

        // adding gamma value to a new array
        newArrayofGammaValues.push(+gammaValue)
      }
    })

    // for loop for iterating the new array of gamma elements
    for (let i = 0; i < newArrayofGammaValues.length; i++) {
      if (objectforGammaValues[newArrayofGammaValues[i]]) {
        objectforGammaValues[newArrayofGammaValues[i]] += 1
      } else {
        objectforGammaValues[newArrayofGammaValues[i]] = 1
      }
    }

    // finding the maximum number of value of a key in a object
    let maxOccuringKey = Object.keys(objectforGammaValues).reduce((a, b) => objectforGammaValues[a] > objectforGammaValues[b] ? a : b)
    return maxOccuringKey
  }
