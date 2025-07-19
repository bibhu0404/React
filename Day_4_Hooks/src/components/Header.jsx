import React from 'react'

function Header() {
  console.log("Header Rendered");
  return (
    <div>
      <h2>There is no more than 1 render of this header component, using export default React.memo(Header)</h2>
    </div>
  )
}

export default React.memo(Header)