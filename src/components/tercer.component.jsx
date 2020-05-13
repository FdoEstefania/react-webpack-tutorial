import React from 'react';

class TercerComponent extends React.Component{

    constructor() {
        super();
        this.state = {
            products: [
                {
                    id: 'p01',
                    name: 'name 1',
                    price: 2,
                    quantity: 3,
                    photo: './assets/images/thumb1.gif'
                },
                {
                    id: 'p02',
                    name: 'name 2',
                    price: 7,
                    quantity: 3,
                    photo: './assets/images/thumb2.gif'
                },
                {
                    id: 'p03',
                    name: 'name 3',
                    price: 9,
                    quantity: 6,
                    photo: './assets/images/thumb3.gif'
                }
            ]
        };
    }
    
    render(){

        return(
            <div>
                <h3>Tercer component</h3>

                <h4>Product List</h4>
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
                    {this.state.products.map(function (product, index) {
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
        );
    }
}

export default TercerComponent;