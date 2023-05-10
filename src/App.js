
import { useEffect, useState } from 'react';
import './assets/css/style.css'

// lists of alcohol items
import { items } from './assets/lists/wine-data';

// components
import Header from './components/Header';
import Table from './components/Table';

// utils functions for calculating mean mode and median
import {calculateMean, calculateMedian, calculateMode, calculateGammaMode} from "./utils/helperFunctions"

function App() {

  // states for the mean mode and median 
  let [flavMean, setFlavMean] = useState({})
  let [gammaMean, setGammaMean] = useState({})

  let [flavMedian, setFlavMedian] = useState({})
  let [gammaMedian, setGammaMedian] = useState({})

  let [flavMode, setFlavMode] = useState({})
  let [gammaMode, setGammaMode] = useState({})


  useEffect(() => {

    // function invoking for calculating mode
    let flavModeResult1 = calculateMode(items,1)
    setFlavMode(flavMode = {
      ...flavMode,
      flavMode1: flavModeResult1
    })
    let flavModeResult2 = calculateMode(items,2)
    setFlavMode(flavMode = {
      ...flavMode,
      flavMode2: flavModeResult2
    })

    let flavModeResult3 = calculateMode(items,3)
    setFlavMode(flavMode = {
      ...flavMode,
      flavMode3: flavModeResult3
    })

    let gammaModeResult1 = calculateGammaMode(items, 1)
    setGammaMode(gammaMode = {
      ...gammaMode,
      gammaMode1: gammaModeResult1
    })
    let gammaModeResult2 = calculateGammaMode(items, 2)
    setGammaMode(gammaMode = {
      ...gammaMode,
      gammaMode2: gammaModeResult2
    })

    let gammaModeResult3 = calculateGammaMode(items, 3)
    setGammaMode(gammaMode = {
      ...gammaMode,
      gammaMode3: gammaModeResult3
    })

  // function invoking for calculating median
    let flavMedianResult1 = calculateMedian(items, 1)
    setFlavMedian(flavMedian = {
      ...flavMedian,
      flavMedian1: flavMedianResult1.medianOfFlav
    })
    let flavMedianResult2 = calculateMedian(items, 2)
    setFlavMedian(flavMedian = {
      ...flavMedian,
      flavMedian2: flavMedianResult2.medianOfFlav
    })
    let flavMedianResult3 = calculateMedian(items, 3)
    setFlavMedian(flavMedian = {
      ...flavMedian,
      flavMedian3: flavMedianResult3.medianOfFlav
    })

    let gammaMedianResult1 = calculateMedian(items, 1)
    setGammaMedian(gammaMedian = {
      ...gammaMedian,
      gammaMedian1: gammaMedianResult1.medianofGamma
    })
    let gammaMedianResult2 = calculateMedian(items, 2)
    setGammaMedian(gammaMedian = {
      ...gammaMedian,
      gammaMedian2: gammaMedianResult2.medianofGamma
    })
    let gammaMedianResult3 = calculateMedian(items, 3)
    setGammaMedian(gammaMedian = {
      ...gammaMedian,
      gammaMedian3: gammaMedianResult3.medianofGamma
    })

    // function invoking for calculating mean
    let result1 = calculateMean(items, 1)
    let mean1 = (result1.sumFlav / result1.iterationsFlav).toFixed(3)
    setFlavMean(flavMean = {
      ...flavMean,
      mean1: mean1
    })

    let result2 = calculateMean(items, 2)
    let mean2 = (result2.sumFlav / result2.iterationsFlav).toFixed(3)
    setFlavMean(flavMean = {
      ...flavMean,
      mean2: mean2
    })


    let result3 = calculateMean(items, 3)
    let mean3 = (result3.sumFlav / result3.iterationsFlav).toFixed(3)
    setFlavMean(flavMean = {
      ...flavMean,
      mean3: mean3
    })
    let gammaMeanResult1 = calculateMean(items, 1)
    let gammaMean1 = (gammaMeanResult1.sumGamma / gammaMeanResult1.iterationGamma).toFixed(3)
    setGammaMean(gammaMean = {
      ...gammaMean,
      gammaMean1: gammaMean1
    })

    let gammaMeanResult2 = calculateMean(items,2)
    let gammaMean2 = (gammaMeanResult2.sumGamma / gammaMeanResult2.iterationGamma).toFixed(3)
    setGammaMean(gammaMean = {
      ...gammaMean,
      gammaMean2: gammaMean2
    })


    let gammaMeanResult3 = calculateMean(items,3)
    let gammaMean3 = (gammaMeanResult3.sumGamma / gammaMeanResult3.iterationGamma).toFixed(3)
    setGammaMean(gammaMean = {
      ...gammaMean,
      gammaMean3: gammaMean3
    })
  }, [])

  return (
    <div className="App" >
      <div className='container'>
        {/* Header Component for heading of a table */}
        <Header heading="Mean Mode Median For Flavanoids Elements"  />
        {/* Table component for showing the data of mean mode and median */}
        <Table
          leftSideHeading={"Flavanoids"}
          mean1={flavMean.mean1}
          mean2={flavMean.mean2}
          mean3={flavMean.mean3}
          median1={flavMedian.flavMedian1}
          median2={flavMedian.flavMedian2}
          median3={flavMedian.flavMedian3}
          mode1={flavMode.flavMode1}
          mode2={flavMode.flavMode2}
          mode3={flavMode.flavMode3}
        />
      </div>
      <div className='container'>
        {/* Header Component for heading of a table */}
        <Header heading="Mean Mode Median For Gamma Elements" />
        {/* Table component for showing the data of mean mode and median */}
        <Table
          leftSideHeading={"Gamma"}
          mean1={gammaMean.gammaMean1}
          mean2={gammaMean.gammaMean2}
          mean3={gammaMean.gammaMean3}
          median1={gammaMedian.gammaMedian1}
          median2={gammaMedian.gammaMedian2}
          median3={gammaMedian.gammaMedian3}
          mode1={gammaMode.gammaMode1}
          mode2={gammaMode.gammaMode2}
          mode3={gammaMode.gammaMode3}
        />
      </div>
    </div>
  );
}

export default App;
