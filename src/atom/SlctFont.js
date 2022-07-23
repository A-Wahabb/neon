import FontSlction from "./FontSlction";

const SlctFont = ({ oldProps }) => {
    return (
        <>
            <p className="tc-grey fw-bold fs16 text-center">FONT</p>

            <div className="row w-100 mx-auto g-2 FontsCollection">
                {oldProps.FontList.map(each => (

                    <FontSlction
                        FontFamily={oldProps.FontFamily}
                        name={each}
                        setFontFamily={oldProps.setFontFamily} />
                ))}
            </div>
        </>
    );
}

export default SlctFont;