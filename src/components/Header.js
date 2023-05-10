import React from 'react'

function Header({heading, fontSize}) {
  return (
    <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", background: 'linear-gradient(30deg, #3891A6, #84999A)', padding: '10px 0'}}>
        <p style={{fontSize: fontSize || '30px' , fontWeight: '600', color: '#fff' }}>{heading}</p>
    </div>
  )
}

export default Header