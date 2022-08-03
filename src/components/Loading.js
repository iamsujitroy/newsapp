import React from 'react'

export default function Loading() {
    let loadingStyle = {
        // position: 'absolute',
        // top: '50%',
        // left: '50%',
        // transform: 'translate(-50%, -50%)'
        display: 'block',
        margin: '30px auto',

    }
    return (
        <>
            <img src={`${process.env.PUBLIC_URL}/images/loading.gif`} style={loadingStyle} alt="Loading" />
        </>
    )
}
