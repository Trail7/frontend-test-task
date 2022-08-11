import React from "react";

export const Horse = ({name, distance}) => {
    const distanceInPercentage = Math.floor(distance/10)
    return (
        <div className='w-75 p-3'>
            <span className="badge text-bg-secondary mb-2">{name}</span>
            <div className="progress mb-4">
                <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{width: `${distanceInPercentage}%`}}
                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{distance}
                </div>
            </div>
        </div>
    )
}