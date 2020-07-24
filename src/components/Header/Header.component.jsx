import React from 'react';
import './Header.style.css';
export const Header = (props) => {
    return (
        <div className="header">
            <h1>Covid 19 Update</h1>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search Country..." aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={props.handleChange} />
                <div class="input-group-append">
                    <button class="btn btn-secondary" type="button" onClick={props.handleClick}>Search</button>
                </div>
            </div>

        </div>
    )

}