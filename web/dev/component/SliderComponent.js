import React from "react";


export default class SliderComponent extends React.Component {
    constructor() {
        super();

    };

    handleTabChange = (event, index) => {
        this.setState({
            index: index
        })
    };

    render() {
        return (
            <div id="sliderFrame">
                <div id="slider">
                    <img src="image/1.jpg"/>
                    <img src="image/2.jpg"/>
                    <img src="image/3.jpg"/>
                    <img src="image/4.jpg"/>
                    <img src="image/5.jpg"/>
                </div>
            </div>
        );
    }
}