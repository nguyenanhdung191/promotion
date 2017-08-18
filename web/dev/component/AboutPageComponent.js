import React from "react";
import Paper from "material-ui/Paper";

export default class AboutPageComponent extends React.Component {
    constructor(props) {
        super(props);
    };


    render() {
        return (
            <Paper>
                <img src="./image/logo/logo.jpg"/><br/>
                <div className="about-container">
                    <div><img src="./image/about-icon.png"/></div>
                    <div>
                        Là kênh thông tin tổng hợp chiến dịch khuyến mãi từ các trang thương mại điện tử
                        nổi
                        tiếng với đủ các loại ngành hàng như điện thoại di động, laptop, thời trang, ăn uống, du lịch...
                    </div>
                    <div><img src="./image/mission-icon.png"/></div>
                    <div>
                        Sứ mệnh của chúng tôi là lập ra một cổng thông tin hoàn toàn miễn phí cho cả doanh nghiệp lẫn
                        người
                        tiêu dùng về thông tin khuyến mãi, giảm giá, ưu đãi. Cổng thông tin đáp ứng nhu cầu thiết thực
                        của
                        mọi người mọi nhà, đó chính là mua sắm, đặc biệt trong thời kì vật giá leo thang.
                    </div>
                    <div><img src="./image/star-icon.png"/></div>
                    <div>
                        Đây là nơi sẽ thay đổi cách mọi người mua sắm trong thời buổi công nghệ 4.0, khi mà mua hàng
                        trực
                        tuyến đã và đang trở thành một xu thế. Mỗi khi bạn có nhu cầu mua bất cứ thứ gì, hãy đến với
                        chúng
                        tôi để có thế tìm được món hàng bạn ưa thích với giá rẻ hơn nhiều. Bạn chỉ việc ngồi trước máy
                        tính
                        hoặc cầm điện thoại lên và đặt hàng trực tuyến với giá rẻ hơn nhiều, giúp bạn tiết kiệm tối đa
                        chi
                        phí, và hàng hóa sẽ được gửi đến tận cửa nhà bạn.
                    </div>
                    <div><img src="./image/look-icon.png"/></div>
                    <div>
                        Chỉ cần đi một vòng sanhangkm.net vài phút mỗi ngày là bạn đã có thể nắm được toàn bộ các đợt
                        khuyến
                        mãi, ưu đãi, giảm giá... phục vụ nhu cầu mua sắm của chính mình. Chúc các bạn mua sắm vui vẻ!!
                    </div>
                </div>
            </Paper>
        );
    }
}