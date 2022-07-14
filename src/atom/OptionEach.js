const OptionEach = (props) => {
    console.log({ props })
    return (
        <>
            <div className={`d-flex justify-content-between p-2 cursorPointer size_box ${props.slctdSize == props.size && 'active'} `} onClick={() => { props.setslctdSize(props.size) }}>
                <div>
                    <p className="fw-bold fs14 text-black">{props.size}</p>
                    <p className="fw-bold fs14 text-black mb-0">${props.price}</p>
                </div>
                <div>
                    <p className="fs12 tc-grey-3 text-end" >Length:{props.length}</p>
                    <p className="fs12 tc-grey-3 text-end mb-0" >Height:{props.height}"</p>
                </div>
            </div>
        </>
    );
}

export default OptionEach;