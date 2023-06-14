
import React from 'react'
import '../index.css'

const LatestNews = () => {
    return (

        <div className="fullwidth-block">
            <div className="container">
                <h2 className="section-title">Latest news</h2>
                <div className="row news-list">
                    <div className="col-md-4">
                        <div className="news">
                            <figure><img src="dummy/featured-image-1.jpg" alt="" style={{"transform": "matrix(1, 0, 0, 1, 0, 0)"}}/></figure>
                            <div className="date"><img src="images/icon-calendar.png" alt="" />03/09/2014</div>
                            <h2 className="entry-title"><a href="#">Donec laoreet non nec aliquam pellentesque interdum</a></h2>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="news">
                            <figure><img src="dummy/featured-image-2.jpg" alt="" style={{"transform": "matrix(1, 0, 0, 1, 0, 0)"}} /></figure>
                            <div className="date"><img src="images/icon-calendar.png" alt="" />03/09/2014</div>
                            <h2 className="entry-title"><a href="#">Donec laoreet non nec aliquam pellentesque interdum</a></h2>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="news">
                            <figure><img src="dummy/featured-image-3.jpg" alt="" style={{"transform": "matrix(1, 0, 0, 1, 0, 0)"}}/></figure>
                            <div className="date"><img src="images/icon-calendar.png" alt="" />03/09/2014</div>
                            <h2 className="entry-title"><a href="#">Donec laoreet non nec aliquam pellentesque interdum</a></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestNews