import { Card, CardContent } from '@mui/material'
import React from 'react'

function RequestCard(props) {
  const style = {
    container: {
      width: 300,
      height: 200,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    innerContainer: {
      margin: 0,
      padding: 0,
    },
    heading: {
      color: 'white',
      backgroundColor: 'purple',
      padding:'0.25em 0.75em',
      textAlign: 'center',
    },
    item:{
      textAlign: 'center',
      padding: '0.25em 0.75em',
      fontWeight: 'bold',
    },
    itemContainer: {
      paddingTop: '0.75em',
    }
  }
  
  return (
    <Card style = {style.container} elevation = {10}>
      <CardContent style = {style.innerContainer}>
        <h2 style = {style.heading}>Request ID: {props.request_id} </h2>
        <div style = {style.itemContainer}>
          <p style = {style.item}>Hospital ID: {props.hospital_id}</p>
          <p style = {style.item}>Patient Case: {props.case_type}</p>
          <p style = {style.item}>Blood Group: {props.blood_group}</p>
          <p style = {style.item}>Blood Component: {props.blood_group}</p>
          <p style = {style.item}>Quantity: {props.quantity}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default RequestCard