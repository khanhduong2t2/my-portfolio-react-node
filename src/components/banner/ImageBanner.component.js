import React from 'react';
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { imgBanner } from '../../Redux/actions/appActions';

function ImageBanner() {
    // const imagesBanner = useSelector((state) => state.imagesBanner);
    // const { loading, error, results } = imagesBanner;

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(imgBanner("img_banner"));
    // }, [dispatch]);

    return (
        <div className="screenImage container-2">
            {/* {
                loading ? (
                    <div>
                        <h1>...</h1>
                    </div>
                )
                    : error ? <h1>!!!</h1>
                        :
                        results.data.data.map((item) => (
                            <img key={item.name} className={item.name} src={item.url} alt="image_banner" />
                        ))
            } */}

            <img className="banner_1" src="https://firebasestorage.googleapis.com/v0/b/save-portfolio.appspot.com/o/portfolio%2Fimage-banner-3.jpg?alt=media&token=b0c3b005-6878-420a-a070-c415402370fb" alt="irene blog" />
            <img className="banner_2" src="https://firebasestorage.googleapis.com/v0/b/save-portfolio.appspot.com/o/portfolio%2Fimage-banner-2.jpg?alt=media&token=7569e138-51b5-43d8-aa0b-3b21af4c070a" alt="irene blog" />
            <img className="banner_3" src="https://firebasestorage.googleapis.com/v0/b/save-portfolio.appspot.com/o/portfolio%2Fbanner_1.jpg?alt=media&token=26bbf340-ca9f-448c-bc07-98e8f3374103" alt="irene blog" />
        </div>
    )
}

export default ImageBanner