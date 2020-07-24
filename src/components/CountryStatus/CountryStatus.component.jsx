import React from 'react';
import './CountryStatus.style.css';
export const CountryStatus = (props) => {
    return (
       /* <div className="cardbox">
            <div class="card text-black bg-warning mb-3">
                <div class="card-header">Confirmed Cases</div>
                <div class="card-body">

                    <p class="card-text">{props.confirmed}</p>
                </div>
            </div>
            <div class="card text-black bg-danger mb-3" >
                <div class="card-header">Death Cases</div>
                <div class="card-body">

                    <p class="card-text">{props.deaths}</p>
                </div>
            </div>
            
            <div class="card text-black bg-success mb-3">
                <div class="card-header">Recovered Cases</div>
                <div class="card-body">

                    <p class="card-text">{props.recovered}</p>
                </div>
            </div>

        </div>*/
        <div class="card-deck">
  <div class="card">
   
    <div class="card-body">
      <h5 class="card-title">Confirmed Cases</h5>
    <p class="card-text">{props.confirmed}</p>
     
    </div>
  </div>
  <div class="card">
   
    <div class="card-body">
      <h5 class="card-title">Death Cases</h5>
    <p class="card-text">{props.deaths}</p>
      
    </div>
  </div>
  <div class="card">
    
    <div class="card-body">
      <h5 class="card-title">Recovered Cases</h5>
    <p class="card-text">{props.recovered}</p>
    </div>
  </div>
</div>

    )

}