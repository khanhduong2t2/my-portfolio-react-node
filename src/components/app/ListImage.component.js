import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function ListImage(props) {
    let { arr_img } = props;

    let items = [];

    arr_img.forEach((item, index) => {
        items.push(
            <Carousel.Item key={index}>
                <img className="img_app_1" alt="" src={item} />
            </Carousel.Item>
        )
    })

    return (
        <Carousel>
            {items}
        </Carousel>
    )
}

export default ListImage