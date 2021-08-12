import React, { Component } from 'react';

class Basicform extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="ms-panel">
                    <div className="ms-panel-header">
                        <h6>Basic Form Elements</h6>
                    </div>
                    <div className="ms-panel-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleEmail">Email address</label>
                                <input type="email" className="form-control" id="exampleEmail" placeholder="example@example.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="examplePassword">Password</label>
                                <input type="password" className="form-control" id="examplePassword" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleSelect">Example select</label>
                                <select className="form-control" id="exampleSelect">
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleTextarea">Example textarea</label>
                                <textarea className="form-control" id="exampleTextarea" rows={3} defaultValue={""} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Basicform;