import React, { useEffect } from 'react'
import Header from '../components/header/Header.component'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../Redux/actions/appActions';

function ProductPage() {
    const productLists = useSelector((state) => state.productLists);
    const { loading, error, results } = productLists;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    return (
        <>
            <Header></Header>
            <div id="list-products">
                <div className="container">
                    <div className="work-list">
                        {
                            loading ? (
                                <div>
                                    <h1>...</h1>
                                </div>
                            ) : error ? <h1>!!!</h1>
                                : (
                                    results.data.data.map((item) => (
                                        <div className="work" key={item._id}>
                                            <img src={item.img_intro} alt="" />
                                            <div className="layer">
                                                <h2>{item.name}</h2>
                                                <p>{item.content}</p>
                                                <span>...</span>
                                                <a href={`/${item.type}/${item.key}`}><i className="fas fa-external-link-alt"></i></a>
                                            </div>
                                        </div>
                                    )))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage