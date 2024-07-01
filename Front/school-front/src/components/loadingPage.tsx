import React from 'react';
import ReactLoading from 'react-loading';
import '../app/globals.css'
export default function LoadingPage(){
    return(
        <div className="loading">
            <h1>Loading...</h1>

            <ReactLoading type={"balls"} color={"#000"}  />
        </div>
    )
}