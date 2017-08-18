import React from "react";
import HomePageIcon from "material-ui-icons/Home";
import PromotionPageIcon from "material-ui-icons/Star";
import IntroductionPageIcon from "material-ui-icons/Receipt";
import ContactPageIcon from "material-ui-icons/PhoneInTalk";
import SliderComponent from "./SliderComponent";
import PromotionPageComponent from "./PromotionPageComponent";
import AboutPageComponent from "./AboutPageComponent";
import FooterComponent from "./FooterComponent";


export default class MainComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            mode: "promotion"
        };

    };

    showContent = () => {
        switch (this.state.mode) {
            case "promotion":
                return <PromotionPageComponent/>;
                break;
            case "about":
                return <AboutPageComponent/>;
                break;
            case "contact":
                return "";
                break;
        }
    };

    handleChangeMode = (event) => {
        let mode = event.currentTarget.id;
        this.setState({
            mode: mode
        })
    };

    render() {
        return (
            <div className="body-wrapper">
                <div className="header">
                    <div className="logo-container">
                        <img src="./image/logo.png"/>
                    </div>
                    <div className="navigation-container">
                        <div onClick={this.handleChangeMode} id="promotion" className="navigation-item">
                            <PromotionPageIcon/><br/>
                            KHUYẾN MÃI
                        </div>
                        <div onClick={this.handleChangeMode} id="about" className="navigation-item">
                            <IntroductionPageIcon/><br/>
                            GIỚI THIỆU
                        </div>
                        <div onClick={this.handleChangeMode} id="contact" className="navigation-item">
                            <ContactPageIcon/><br/>
                            LIÊN HỆ
                        </div>
                    </div>
                </div>
                <div className="slider-container">
                    <SliderComponent/>
                </div>
                <div className="content">
                    {this.showContent()}
                </div>
                <div className="footer">
                    <FooterComponent/>
                </div>
            </div>
        );
    }
}