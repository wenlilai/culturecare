import React from 'react'
import { useParams } from "react-router-dom"

function Confirmation() {
    const params = useParams()
    return (
        <h1>Pending Appointments</h1>
    )
}

export default Confirmation
