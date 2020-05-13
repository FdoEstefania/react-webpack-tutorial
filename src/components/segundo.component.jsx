import React from 'react';

class SegundoComponent extends React.Component{
    
    constructor() {
        super();
        this.state = {
            product: {
                id: 'p01',
                name: 'name 1',
                price: 2,
                quantity: 3,
                photo: './assets/images/thumb1.gif'
            }
        };
    }

    render(){

        return(
            <div>
                <h3>Segundo component</h3>

                <h4>Product Info</h4>
                <table cellPadding="5" cellSpacing="5">
                    <tr>
                        <td>Id</td>
                        <td>{this.state.product.id}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{this.state.product.name}</td>
                    </tr>
                    <tr>
                        <td>Photo</td>
                        <td>
                            <img src={this.state.product.photo} width="100" />
                        </td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>{this.state.product.price}</td>
                    </tr>
                    <tr>
                        <td>Quantity</td>
                        <td>{this.state.product.quantity}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>{this.state.product.price * this.state.product.quantity}</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default SegundoComponent;