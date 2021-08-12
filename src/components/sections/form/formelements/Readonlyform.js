import React, { Component } from 'react';

class Readonlyform extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Read Only Form Elements</h6>
                    </div>
                    <div className="ms-panel-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleEmail1" placeholder="example@example.com" defaultValue="example@example.com" readOnly />
                            </div>
                            <div className="form-group">
                                <label htmlFor="examplePassword2">Password</label>
                                <input type="password" className="form-control" id="examplePassword2" defaultValue="somepassword" placeholder="Password" readOnly />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleSelect1">Example select</label>
                                <select className="form-control" id="exampleSelect1" disabled>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleTextarea1">Example textarea</label>
                                <textarea className="form-control" id="exampleTextarea1" rows={3} readOnly defaultValue={"Some text to be displayed"} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Readonlyform;