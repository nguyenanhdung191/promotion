import React from "react";
import Paper from "material-ui/Paper";
import Button from 'material-ui/Button';


import PromotionItemComponent from "./PromotionItemComponent";


export default class PromotionPageComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            type: "",
            page: 0,
            offers: []
        };
    };

    componentDidMount() {
        $("#all").addClass("promotion-type-selected");
        this.getOffers("all", 1);
    };

    getOffers = (type, page) => {
        let object = this.state;
        object.offers.length = 0;
        object.page = page;
        object.type = type;
        $.get(`/api/offers?type=${type}&page=${page}`, json => {
            json.forEach(offer => {
                object.offers.push(offer);
            });
            this.setState(object);
        });
    };

    handleChangeType = (event) => {
        $(event.currentTarget).addClass("promotion-type-selected");
        $(`#${this.state.type}`).removeClass("promotion-type-selected");
        this.getOffers(event.currentTarget.id, 1);
    };

    handleShowMorePromotion = () => {
        let object = this.state;
        object.page += 1;
        $.get(`/api/offers?type=${object.type}&page=${object.page}`, json => {
            if (json.length === 0) {
                alert("Bạn đã xem tất cả khuyến mãi");
            }
            json.forEach(offer => {
                object.offers.push(offer);
            });
            this.setState(object);
        });
    };

    render() {
        return (
            <div className="promotion-container">
                <div className="promotion-navigator">
                    <Paper>
                        <div className="promotion-navigator-container">
                            <div id="all" onClick={this.handleChangeType}>
                                <img src="./image/list-icon.png"/><br/>TẤT CẢ
                            </div>
                            <div id="fashion" onClick={this.handleChangeType}>
                                <img src="./image/fashion-icon.png"/><br/>THỜI TRANG
                            </div>
                            <div id="tech" onClick={this.handleChangeType}>
                                <img src="./image/tech-icon.png"/><br/>CÔNG NGHỆ
                            </div>
                            <div id="household" onClick={this.handleChangeType}>
                                <img
                                    src="./image/household-icon.png"/><br/>GIA DỤNG
                            </div>
                            <div id="cosmetic" onClick={this.handleChangeType}>
                                <img
                                    src="./image/cosmetic-icon.png"/><br/>MỸ PHẨM
                            </div>
                            <div id="food" onClick={this.handleChangeType}>
                                <img src="./image/food-icon.png"/><br/>ĂN UỐNG
                            </div>
                            <div id="travel" onClick={this.handleChangeType}>
                                <img src="./image/travel-icon.png"/><br/>DU LỊCH
                            </div>
                            <div id="other" onClick={this.handleChangeType}>
                                <img src="./image/other-icon.png"/><br/>KHÁC
                            </div>
                        </div>
                    </Paper>
                </div>
                <div className="promotion-item-container">
                    {
                        this.state.offers.map(offer => {
                            return (
                                <PromotionItemComponent
                                    key={offer.offerid}
                                    promotionOwner={offer.offerowner}
                                    promotionTitle={offer.offertitle}
                                    promotionContent={offer.offercontent}
                                    promotionImage={offer.offerimage}
                                    promotionStartTime={offer.offerstarttime}
                                    promotionEndTime={offer.offerendtime}
                                    promotionLink={offer.offerlink}
                                />
                            );
                        })
                    }
                </div>
                <Button style={{
                    height: 70,
                    width: 300,
                    marginBottom: 20,
                    fontWeight: "bold",
                    fontSize: 30
                }}
                        onClick={this.handleShowMorePromotion}
                        raised
                        color="primary">XEM THÊM</Button>
            </div>
        );
    }
}