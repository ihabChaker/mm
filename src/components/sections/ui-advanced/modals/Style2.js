import React, { Component } from 'react';
import { Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';

class Style2 extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleShow1 = this.handleShow1.bind(this);
        this.handleShow2 = this.handleShow2.bind(this);
        this.handleShow3 = this.handleShow3.bind(this);
        this.handleShow4 = this.handleShow4.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show1: false,
        };
    }
    handleShow1() {
        this.setState({ show1: true });
    }
    handleShow2() {
        this.setState({ show2: true });
    }
    handleShow3() {
        this.setState({ show3: true });
    }
    handleShow4() {
        this.setState({ show4: true });
    }
    handleClose() {
        this.setState({ show1: false });
        this.setState({ show2: false });
        this.setState({ show3: false });
        this.setState({ show4: false });
    }
    render() {
        return (
            <div className="ms-panel">
            <div className="ms-panel-header">
                <h6>Modals Style 2</h6>
            </div>
            <div className="ms-panel-body">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h6 className="section-title">Important Notice</h6>
                        <button className="btn btn-primary" onClick={this.handleShow1}> Click Me </button>
                    </div>
                    <Modal show={this.state.show1} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <Modal.Header className="bg-primary">
                            <h3 className="modal-title has-icon text-white"><i className="flaticon-alert-1 bg-primary text-white" /> Important Notice!</h3>
                            <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Lorem ipsum is simply Dummy text of the printing and typing industry. Lorem ipsum has been the industry's standard for dummy text.</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="modal-notice">
                                <label className="ms-checkbox-wrap">
                                    <input type="checkbox" defaultValue />
                                    <i className="ms-checkbox-check" />
                                </label>
                                <span> Don't Show me Again </span>
                            </div>
                            <button type="button" className="btn btn-light" onClick={this.handleClose}>Close</button>
                            <button type="button" className="btn btn-primary shadow-none">Accept</button>
                        </Modal.Footer>
                    </Modal>
                    <div className="col-md-3 col-sm-6">
                        <h6 className="section-title">User Concent</h6>
                        <button className="btn btn-primary" onClick={this.handleShow2}> Click Me </button>
                    </div>
                    <Modal show={this.state.show2} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <Modal.Header className="bg-primary">
                            <h3 className="modal-title has-icon text-white"><i className="flaticon-placeholder bg-primary text-white" /> Allow Location Tracking?</h3>
                            <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Lorem ipsum is simply Dummy text of the printing and typing industry. Lorem ipsum has been the industry's standard for dummy text.</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="modal-notice">
                                <Link to="#" className="btn-link"> Learn More </Link>
                            </div>
                            <button type="button" className="btn btn-light" onClick={this.handleClose}>Don't Allow</button>
                            <button type="button" className="btn btn-primary shadow-none">Allow</button>
                        </Modal.Footer>
                    </Modal>
                    <div className="col-md-3 col-sm-6">
                        <h6 className="section-title">Opt-in Form</h6>
                        <button className="btn btn-primary" onClick={this.handleShow3}> Click Me </button>
                    </div>
                    <Modal show={this.state.show3} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <Modal.Header className="bg-primary">
                            <h3 className="modal-title has-icon text-white"><i className="flaticon-share bg-primary text-white" /> Subscribe to our Newsletter</h3>
                            <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                        </Modal.Header>
                        <Modal.Body>
                            <form method="post">
                                <div className="ms-form-group has-icon">
                                    <label>Get our latest updates</label>
                                    <input type="text" placeholder="Email Address" className="form-control" name="news-letter" />
                                    <i className="material-icons">email</i>
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <button type="button" className="btn btn-light" onClick={this.handleClose}>Cancel</button>
                            <button type="button" className="btn btn-primary shadow-none">Submit</button>
                        </Modal.Footer>
                    </Modal>
                    <div className="col-md-3 col-sm-6">
                        <h6 className="section-title">Terms and Agreements</h6>
                        <button className="btn btn-primary" onClick={this.handleShow4}> Click Me </button>
                    </div>
                    <Modal show={this.state.show4} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <Modal.Header className="bg-primary">
                            <h3 className="modal-title has-icon text-white"><i className="flaticon-alert bg-primary text-white" /> Terms and Agreements </h3>
                            <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                        </Modal.Header>
                        <Modal.Body>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae ultrices massa, non consectetur nunc. Nullam erat magna, aliquet sed nibh non, pellentesque fermentum justo. Integer sed imperdiet sapien, vel pulvinar tellus. Donec sed justo ac urna volutpat malesuada eget vestibulum libero. Morbi gravida auctor diam. Nunc varius, nibh vel pharetra viverra, urna odio mattis ligula, id fringilla elit ante non erat. Vivamus suscipit blandit ipsum, non maximus augue hendrerit ac.
                                Maecenas et vulputate purus, consequat fermentum ante. Pellentesque ac dolor enim. Nam nec pulvinar purus. Nulla ut sollicitudin arcu, non hendrerit dui. Ut non massa lorem. Nunc tincidunt, tellus vel fringilla finibus, ligula tellus ultrices velit, consequat maximus velit sapien sit amet nisl. Morbi ac tincidunt arcu. Integer et consectetur diam, non finibus tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam laoreet velit tempor malesuada finibus. Duis tristique malesuada velit vitae consequat. Praesent elementum ullamcorper luctus. Morbi a hendrerit tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed pellentesque luctus eros eu malesuada. Mauris sed rhoncus augue.
                                Sed blandit commodo ex eget suscipit. Maecenas elit massa, faucibus et viverra eget, rutrum id dolor. Proin vel purus varius, facilisis libero vitae, venenatis sapien. Integer fermentum interdum felis, et sagittis lectus consequat id. Curabitur accumsan arcu maximus placerat blandit. Cras rhoncus, sapien id mollis accumsan, turpis libero pharetra enim, at hendrerit neque libero ut massa. Ut tincidunt sapien ac lacinia aliquam. Nullam tincidunt erat ex, eu sagittis turpis maximus in. Donec quis porttitor odio. Aliquam id neque sapien. Suspendisse ultricies nibh dictum felis viverra, nec suscipit lectus blandit. Maecenas condimentum justo justo, sed mollis arcu rhoncus in. Curabitur eget scelerisque diam. Etiam sit amet euismod est. Integer ut massa in nulla lacinia hendrerit. Proin eu justo ut ligula tempus vulputate consequat eget odio.
                                Integer lobortis libero libero, nec pulvinar libero porta non. Mauris eget bibendum lectus. Maecenas et vestibulum libero, quis suscipit odio. Aenean nec orci vitae nibh pellentesque venenatis vel vitae mi. Quisque dapibus risus eu massa venenatis porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor interdum purus et varius. Praesent lobortis pharetra dolor ac facilisis. Sed at sem ullamcorper, efficitur diam fermentum, egestas nunc. Cras commodo dictum tellus sit amet convallis. Integer interdum velit sed mauris volutpat, vel tincidunt diam interdum. Fusce cursus nunc in tellus convallis, sit amet tincidunt neque molestie. Fusce a metus augue. Nunc id urna pretium, porta turpis ut, molestie felis. Donec a lorem quis ligula consectetur pulvinar. Cras a diam magna.
                                        </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="modal-notice">
                                <label className="ms-checkbox-wrap">
                                    <input type="checkbox" defaultValue />
                                    <i className="ms-checkbox-check" />
                                </label>
                                <span> I Agree to the Terms </span>
                            </div>
                            <button type="button" className="btn btn-light" onClick={this.handleClose}>Close</button>
                            <button type="button" className="btn btn-primary shadow-none">Continue</button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
        );
    }
}

export default Style2;