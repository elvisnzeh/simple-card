import React, {Component} from "react";


class Description extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>

            <h5 className="facts">{this.props.name}</h5><br></br>
            </>
        );
    }
}
export default Description;
