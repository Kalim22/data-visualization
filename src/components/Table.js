import React from 'react'

function Table(props) {
  return (
    <table className='table'>
        <thead>
            <tr>
                <td>Measusre</td>
                <td>Class 1</td>
                <td>Class 2</td>
                <td>Class 3</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{props.leftSideHeading} Mean</td>
                <td>{props.mean1}</td>
                <td>{props.mean2}</td>
                <td>{props.mean3}</td>
            </tr>
            <tr>
                <td>{props.leftSideHeading} Median</td>
                <td>{props.median1}</td>
                <td>{props.median2}</td>
                <td>{props.median3}</td>
            </tr>
            <tr>
                <td>{props.leftSideHeading} Mode</td>
                <td>{props.mode1}</td>
                <td>{props.mode2}</td>
                <td>{props.mode3}</td>
            </tr>
        </tbody>
    </table>
  )
}

export default Table