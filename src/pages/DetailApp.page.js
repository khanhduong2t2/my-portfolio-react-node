import React from 'react'
import Header from '../components/header/Header.component'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function DetailApp() {
    return (
        <>
            <Header bgColor="white"></Header>
            <div className="intro-detail-app">
                <img alt="" src="https://play-lh.googleusercontent.com/ciffdqPoOpUtYDc0BoLuFbQ2dtugBxtpDfGLirJEXXlP1L0-8t5ggNzBRTssk3AV56w=w240-h480-rw"></img>
                <div className="content-intro-app">
                    <p><strong style={{ color: "#00BD00" }}>Calibee</strong> - là ứng dụng chuyên cung cấp cung cấp giải pháp toàn diện cho cuộc sống bận rộn, từ dịch vụ vệ sinh, sửa chữa đến chăm sóc người thân, bạn sẽ thấy cuộc sống của bạn dễ dàng và thoải mái hơn bao giờ hết.</p>
                    <p>Tìm kiếm và kết nối với đội ngũ thợ lành nghề và người giúp việc giàu kinh nghiệm qua dịch vụ vệ sinh, sửa chữa chuyên nghiệp của Calibee - tất cả chỉ trong 60s.</p>
                </div>
            </div>
            <div className="feature-app">
                <h2>Một số tính năng nổi bật</h2>
                <h4>Dành cho khách hàng</h4>
                <div className="item-feature-app">
                    <Carousel>
                        <Carousel.Item>
                            <img className="img_app_1" alt="" src="https://firebasestorage.googleapis.com/v0/b/save-portfolio.appspot.com/o/portfolio%2Fcalibee_img.png?alt=media&token=9fa5ebcb-d8d6-4571-9d65-c507c2a628df" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="img_app_1" alt="" src="https://firebasestorage.googleapis.com/v0/b/save-portfolio.appspot.com/o/portfolio%2Fcalibee_img.png?alt=media&token=9fa5ebcb-d8d6-4571-9d65-c507c2a628df" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="img_app_1" alt="" src="https://firebasestorage.googleapis.com/v0/b/save-portfolio.appspot.com/o/portfolio%2Fcalibee_img.png?alt=media&token=9fa5ebcb-d8d6-4571-9d65-c507c2a628df" />
                        </Carousel.Item>
                    </Carousel>
                    <ol class="content-feature gradient-list">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Aenean tincidunt elit at ipsum cursus, vitae interdum nulla suscipit.</li>
                        <li>Curabitur in orci vel risus facilisis accumsan.</li>
                        <li>Morbi eleifend tortor lacinia sapien sagittis, quis pellentesque felis egestas.</li>
                        <li>Aenean viverra dui quis leo lacinia fringilla.</li>
                        <li>Sed varius lectus ac condimentum egestas.</li>
                        <li>Maecenas faucibus lorem nec lorem posuere, a rhoncus velit porttitor.</li>
                    </ol>
                </div>
                <h4>Dành cho khách hàng</h4>
                <div className="item-feature-app">
                    <Carousel>
                        <Carousel.Item>
                            <img className="img_app_1" alt="" src="https://firebasestorage.googleapis.com/v0/b/save-portfolio.appspot.com/o/portfolio%2Fcalibee_img.png?alt=media&token=9fa5ebcb-d8d6-4571-9d65-c507c2a628df" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="img_app_1" alt="" src="https://firebasestorage.googleapis.com/v0/b/save-portfolio.appspot.com/o/portfolio%2Fcalibee_img.png?alt=media&token=9fa5ebcb-d8d6-4571-9d65-c507c2a628df" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="img_app_1" alt="" src="https://firebasestorage.googleapis.com/v0/b/save-portfolio.appspot.com/o/portfolio%2Fcalibee_img.png?alt=media&token=9fa5ebcb-d8d6-4571-9d65-c507c2a628df" />
                        </Carousel.Item>
                    </Carousel>
                    <ol class="content-feature gradient-list">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Aenean tincidunt elit at ipsum cursus, vitae interdum nulla suscipit.</li>
                        <li>Curabitur in orci vel risus facilisis accumsan.</li>
                        <li>Morbi eleifend tortor lacinia sapien sagittis, quis pellentesque felis egestas.</li>
                        <li>Aenean viverra dui quis leo lacinia fringilla.</li>
                        <li>Sed varius lectus ac condimentum egestas.</li>
                        <li>Maecenas faucibus lorem nec lorem posuere, a rhoncus velit porttitor.</li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default DetailApp