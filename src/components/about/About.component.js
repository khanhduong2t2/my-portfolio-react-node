import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { contentIntro } from '../../Redux/actions/appActions';

function About() {
    const contentIntroList = useSelector((state) => state.contentIntroList);
    const { loading, error, results } = contentIntroList;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(contentIntro("about_me"));
    }, [dispatch]);
    return (
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="aboutMeImg">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/save-portfolio.appspot.com/o/portfolio%2Favatar_about.jpg?alt=media&token=235faecf-e294-4dac-a818-c358cb6170c5" alt="about me" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-me">
                                    {
                                        loading ? (
                                            <div>
                                                <h1>...</h1>
                                            </div>
                                        )
                                            : error ? <h1>!!!</h1>
                                                : (
                                                    results.data.data.map((item) => (
                                                        item.type === "title"
                                                            ?
                                                            <div key={item._id}>
                                                                <h5>{item.content}</h5>
                                                                <div className="aboutHorizontalLine"></div>
                                                            </div>
                                                            : <p key={item._id}>
                                                                {item.content}
                                                            </p>
                                                    ))
                                                )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default About