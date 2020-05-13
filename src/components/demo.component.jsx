import React from 'react';

import PrimerComponent from './primer.component.jsx';
import SegundoComponet from './segundo.component.jsx';
import TercerComponent from './tercer.component.jsx'; 

import styles from '../../assets/css/styles.css';

class DemoComponent extends React.Component {


    render() {
        return (
            <div>
                <h3>Demo Component</h3>
                <span className={styles.formatText}>Hola desde REACTjs</span>
                <div>
                    <img src="../../assets/images/20409451.jpg"></img>
                </div>
                <div className={styles.x}>
                    <PrimerComponent/>
                    <SegundoComponet/>
                    <TercerComponent/>
                </div>
                <div>
                    Edad: {this.props.edad}
                    <br/>
                    Nombre: {this.props.nombre}
                </div>
                <div>
                <h3>Product Info</h3>
                    <table cellPadding="5" cellSpacing="5">
                        <tr>
                            <td>Id</td>
                            <td>{this.props.product.id}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{this.props.product.name}</td>
                        </tr>
                        <tr>
                            <td>Photo</td>
                            <td>
                                <img src={this.props.product.photo} width="100" />
                            </td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{this.props.product.price}</td>
                        </tr>
                        <tr>
                            <td>Quantity</td>
                            <td>{this.props.product.quantity}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>{this.props.product.price * this.props.product.quantity}</td>
                        </tr>
                    </table>
                </div>
                <div>
                    <h3>Product List</h3>
                    <table cellPadding="5" cellSpacing="5">
                        <tr>
                            <th>No.</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Photo</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Sub Total</th>
                        </tr>
                        {this.props.products.map(function (product, index) {
                            return (
                                <tr>
                                    <td>{index}</td>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td><img src={product.photo} width="100" /></td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.price * product.quantity}</td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
                <div>
                    <hr/>
                </div>
            </div>
        );
    }

}

export default DemoComponent;