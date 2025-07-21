import React from 'react'
import { useParams } from 'react-router-dom'

function HomeDetails() {
  const {id} = useParams();
  return (
    <>
      <h1>Upgraded Home Page</h1>
      <p>Welcome to the Home Page! {id}</p>
    </>
  )
}

export default HomeDetails