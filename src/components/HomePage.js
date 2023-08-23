import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <div className='content-home'>
                <div>
                    <h2>Read is the Best Practice to Open the World Around you</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, dolorem facere sequi amet sed qui cumque cum laboriosam in animi illum temporib</p>
                </div>
            </div>
            <div className='container-page'>
                <div className='card-left'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsum quisquam porro illo delectus enim!</p>
                    <Link to="/Allbook">
                        <button>Take look</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage