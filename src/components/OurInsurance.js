import React from 'react'
import '../index.css'
const OurInsurance = () => {
    return (
        <div>
           
            <div className="container p-5">
                <h2 className="section-title">Our insurance offer</h2>
                <small className="section-subtitle">Phasellus vel felis in nulla mollis posuere eget rutrum eros</small>

                <div className="row">
                    <div className="col-md-3">
                        <div className="offer caption-top">
                            <img src="dummy/offer-tall.jpg" alt="offer 1" style={{ "transform": "matrix(1, 0, 0, 1, 0, 0)" }} />
                            <div className="caption">
                                <h3 className="offer-title">Massa augue</h3>
                                <small>Conubia nostra per inceptos</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="offer caption-bottom">
                                    <img src="dummy/offer-1.jpg" alt="offer 2" style={{ "transform": " matrix(1, 0, 0, 1, 0, 0)" }} />
                                    <div className="caption">
                                        <h3 className="offer-title">Curabitur vehicula</h3>
                                        <small>Conubia nostra per inceptos</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="offer caption-bottom">
                                    <img src="dummy/offer-wide.jpg" alt="offer 3" />
                                    <div className="caption">
                                        <h3 className="offer-title">Vivamus rhoncus porttitor</h3>
                                        <small>Conubia nostra per inceptos</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="offer caption-bottom">
                                    <img src="dummy/offer-2.jpg" alt="offer 2" />
                                    <div className="caption">
                                        <h3 className="offer-title">Curabitur vehicula</h3>
                                        <small>Conubia nostra per inceptos</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="offer caption-bottom">
                                    <img src="dummy/offer-3.jpg" alt="offer 2" style={{ "transform": "matrix(1, 0, 0, 1, 0, 0)" }} />
                                    <div className="caption">
                                        <h3 className="offer-title">Curabitur vehicula</h3>
                                        <small>Conubia nostra per inceptos</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="offer caption-bottom">
                                    <img src="dummy/offer-4.jpg" alt="offer 2" style={{ "transform": "matrix(1, 0, 0, 1, 0, 0)" }} />
                                    <div className="caption">
                                        <h3 className="offer-title">Curabitur vehicula</h3>
                                        <small>Conubia nostra per inceptos</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OurInsurance