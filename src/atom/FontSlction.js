const FontSlction = (props) => {
    return (
        <>
            <div className={`col-6 col-sm-4 col-md-3  ${props.FontFamily == props.name && 'active'}`} style={{
                fontFamily: props.name
            }}>
                <p className={`roundbdr mb-0 text-center text-black cursorPointer ${props.name}  `} onClick={() => props.setFontFamily(props.name)}>Font Style</p>
            </div>
        </>
    );
}

export default FontSlction;