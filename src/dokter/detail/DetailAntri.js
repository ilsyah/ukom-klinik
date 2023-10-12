import React from "react";
import { Link } from "react-router-dom";
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";

const DetailAntrian = () => {
    return (
        <div className="wrapper">
            <Topnav />
            <Sidenav />
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Nama : </label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">NIK :</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                                    <select multiple className="form-control" id="exampleFormControlSelect2">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                                </div>
                            </form>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DetailAntrian;
