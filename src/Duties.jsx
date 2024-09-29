import React from 'react'
import {FaAngleDoubleRight} from 'react-icons/fa'
import {v4 as uuidv4} from 'uuid'

const Duties = ({duties}) => {

    const id = uuidv4()
    console.log(id)

  return (
    <div>
        {duties.map((duty, index) => {
             
             const id = uuidv4()
            console.log(id) 

            console.log(duty)
            return <div key={id} className='job-desc'>
                <FaAngleDoubleRight className='job-icon' />
                <p>{duty}</p>
            </div>
        })}
    </div>
  )
}

export default Duties