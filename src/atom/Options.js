import OptionEach from "./OptionEach";

const Options = (props) => {
    return (
        <>
            <div className="row py-3 g-2">
                <p className="fw-600 fs18 tc-grey-2 ">Select your Options</p>
                <div className="col-sm-6">
                    <OptionEach
                        size="Small"
                        price="110"
                        length="10"
                        height=""
                        slctdSize={props.slctdSize}
                        setslctdSize={props.setslctdSize}
                    />
                </div>

                <div className="col-sm-6">
                    <OptionEach
                        size="Medium"
                        price="130"
                        length="15"
                        height=""
                        slctdSize={props.slctdSize}
                        setslctdSize={props.setslctdSize}
                    />
                </div>

                <div className="col-sm-6">
                    <OptionEach
                        size="Large"
                        price="150"
                        length="20"
                        height=""
                        slctdSize={props.slctdSize}
                        setslctdSize={props.setslctdSize}
                    />
                </div>
                <div className="col-sm-6">
                    <OptionEach
                        size="X Large"
                        price="180"
                        length="25"
                        height=""
                        slctdSize={props.slctdSize}
                        setslctdSize={props.setslctdSize}
                    />
                </div>
                <div className="col-sm-6">
                    <OptionEach
                        size="XX Large"
                        price="200"
                        length="30"
                        height=""
                        slctdSize={props.slctdSize}
                        setslctdSize={props.setslctdSize}
                    />
                </div>
                <div className="col-sm-6">
                    <OptionEach
                        size="supersized"
                        price="250"
                        length="35"
                        height=""
                        slctdSize={props.slctdSize}
                        setslctdSize={props.setslctdSize}
                    />
                </div>
                <p className="text-grey fs11" >*Each sign is handcrafted, and sizes shown will be accurate within 1 or 2 inches.</p>
            </div>
        </>
    );
}

export default Options;