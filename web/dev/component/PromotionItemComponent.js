import React from "react";
import moment from "moment";
import Button from 'material-ui/Button';


export default class PromotionItemComponent extends React.Component {
    constructor(props) {
        super(props);
    };

    handleLoadImage = (event) => {
        let width = event.target.width;
        let height = event.target.height;
        if ((width / height >= 1 && width / height <= 1.2) || (width / height) < 1) {
            $(event.target).addClass("img-square");
        } else {
            $(event.target).addClass("img-rectangle");
        }
    };

    handleHover = (event) => {
        $(event.currentTarget).children().eq(3).css("opacity", "1");
    };

    handleMouseOut = (event) => {
        $(event.currentTarget).children().eq(3).css("opacity", "0");
    };

    componentDidMount() {
        setTimeout(() => {
            $(".promotion-item").css("opacity", "1");
        }, 0)
    }


    render() {
        let endTime = moment(this.props.promotionEndTime);
        let remainingDay = endTime.diff(moment().format("YYYY-MM-DD"), "days");
        return (
            <div className="promotion-item" onMouseOut={this.handleMouseOut} onMouseOver={this.handleHover}>
                <div className="promotion-owner-logo"><img src={"./image/logo/" + this.props.promotionOwner + ".png"}/>
                </div>
                <div className="promotion-title"><a>{this.props.promotionTitle}</a></div>
                <div className="promotion-image">
                    <img onLoad={this.handleLoadImage} name="promotion-image"
                         src={this.props.promotionImage}/>
                </div>
                <div className="promotion-content">
                    <div style={{margin: 5}}>
                        {
                            this.props.promotionContent.split("\r\n").map((text, index) => {
                                if (text === "" || text === " ") {
                                    return ""
                                }
                                return <p key={index}>+ {text}</p>
                            })
                        }
                    </div>
                    <div className="promotion-footer">
                        <div className="promotion-time">
                            <img
                                src="./image/clock.png"/> {(remainingDay + 1 <= 0) ? "Hết hạn" : "Còn " + (remainingDay + 1) + " ngày"}
                        </div>
                        <div className="promotion-link">
                            <Button style={{fontWeight: "bold"}} target="_blank" raised color="accent"
                                    href={this.props.promotionLink}>
                                XEM NGAY
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}