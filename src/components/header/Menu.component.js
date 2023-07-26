import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { listMenu } from '../../Redux/actions/appActions';

function Menu(props) {
    const menuLists = useSelector((state) => state.menuLists);
    const { loading, error, apps } = menuLists;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listMenu());
    }, [dispatch]);
    return (
        loading ? (
            <div>
                <h1>...</h1>
            </div>
        )
            : error ? <h1>!!!</h1>
                :
                apps.data.data.map((item) => (
                    item.key.includes('#')
                        ?
                        <div key={item._id} className={`menu w-${props.bgColor || "white"}`}><HashLink to={`/${item.key}`} >{item.name}</HashLink></div>
                        :
                        <div key={item._id} className={`menu w-${props.bgColor || "white"}`}><Link to={`/${item.key}`} >{item.name}</Link></div>
                ))
    )
}

export default Menu;
