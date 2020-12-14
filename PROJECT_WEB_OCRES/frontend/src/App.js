import React, {Component, useEffect} from 'react';
import './App.css';
import 'bootstrap-4-grid/css/grid.min.css';

import ReactDOM from 'react-dom';
import {Button} from '@progress/kendo-react-buttons';
import {savePDF} from '@progress/kendo-react-pdf';
import {Ripple} from '@progress/kendo-react-ripple';
import {Dialog, DialogActionsBar} from '@progress/kendo-react-dialogs';
import {Input} from '@progress/kendo-react-inputs';
import '@progress/kendo-theme-material/dist/all.css';
import {Graph1} from './composants/Graph1';
import {Graph2} from './composants/Graph2';
import {TableauGrille} from './composants/Grille1';
import {Users} from "./composants/Users";
import {useUsers} from "./hooks/users";

/*import admin from './admin';
import {Link } from "react-router-dom"; */

class App extends Component {
    constructor(props) {
        super(props);
        this.appContainer = React.createRef();
        this.state = {
            showDialog: false
        }
    }


    handlePDFExport = () => {
        savePDF(ReactDOM.findDOMNode(this.appContainer), {paperSize: 'auto'});
    }
    handleShare = () => {
        this.setState({
            showDialog: !this.state.showDialog
        }, () => console.log(this.state))
    }

    render() {
        return (
            <Ripple>
                <div className="bootstrap-wrapper">
                    <div className="app-container container" ref={(el) => this.appContainer = el}>
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                <h1>Ventes | Post-confinement 2020</h1>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 buttons-right">
                                <Button primary={true} onClick={this.handleShare}>Partager</Button>
                                <Button onClick={this.handlePDFExport}>Exporter en PDF</Button>
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                        <TableauGrille/>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">

                                        <Graph2/>

                                    </div>


                                    <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 col-xl-2">
                                        <div className="percentage-container">
                                            <span className="percentage-number">94</span>
                                            <span className="percentage-sign">%</span>
                                            <p>POURCENTAGE DE GALERE SUR LE PROJET</p>
                                        </div>
                                        <div className="percentage-container">
                                            <span className="percentage-number">89</span>
                                            <span className="percentage-sign">%</span>
                                            <p>ESTIMATION DE NOTE</p>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                        <Graph1/>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {this.state.showDialog &&
                        <Dialog title={"Share this report"} onClose={this.handleShare}>
                            <p>Entrez une adresse email</p>
                            <Input placeholder="exemple@projetOCRES.com"/>
                            <DialogActionsBar>
                                <Button primary={true} onClick={this.handleShare}>Partager</Button>
                                <Button onClick={this.handleShare}>Quiter</Button>
                            </DialogActionsBar>
                        </Dialog>
                        }
                        <div className="row">
                            <Users/>
                        </div>
                        <div className="row">

                        </div>
                    </div>
                </div>

            </Ripple>
        );
    }
}

export default App;
