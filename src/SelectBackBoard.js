import React from 'react'
import neonbackground1 from './Assets/Imgs/neonbackground1.png'

function SelectBackBoard(props) {

    return (
        <>
            <p className="fw-bold fs13 my-2 tc-grey-2">SELECT YOUR BACKBOARD:</p>
            <div className="text-center" style={{
                background: '#f5f5f5', padding: '10px 0',
                borderRadius: '15px',
                margin: '10px',
            }}>
                <img src={neonbackground1} width={171} />

            </div>
            <p className="fw-bold fs13 my-2 tc-grey-2">(more options will be available soon for backgrounds)</p>

            <div className='total-section d-inline-flex w-100 p-3'>
                <p className='mb-0 mt-2 fs-14'>Total with selected options:</p>
                <p className='fs22 ms-auto mb-1'>{props.sizeParams.price}</p>
            </div>
        </>
    )
}

export default SelectBackBoard