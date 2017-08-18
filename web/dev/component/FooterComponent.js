import React from "react";
import Paper from "material-ui/Paper";

export default class FooterComponent extends React.Component {
    constructor() {
        super();
    };


    render() {
        return (
            <div className="footer-container">
                <div><img src="./image/footer-logo.png"/></div>
                <div className="copyright">
                    &#169; 2017 SĂN HÀNG KHUYẾN MÃI
                </div>
                <div className="fb-page"
                     data-href="https://www.facebook.com/S&#x103;n-H&#xe0;ng-Khuy&#x1ebf;n-M&#xe3;i-1661583797208146/"
                     data-width="400" data-small-header="false" data-adapt-container-width="true"
                     data-hide-cover="false" data-show-facepile="true">
                    <blockquote
                        cite="https://www.facebook.com/S&#x103;n-H&#xe0;ng-Khuy&#x1ebf;n-M&#xe3;i-1661583797208146/"
                        className="fb-xfbml-parse-ignore"><a
                        href="https://www.facebook.com/S&#x103;n-H&#xe0;ng-Khuy&#x1ebf;n-M&#xe3;i-1661583797208146/">Săn
                        Hàng Khuyến Mãi</a>
                    </blockquote>
                </div>
            </div>
        );
    }
}