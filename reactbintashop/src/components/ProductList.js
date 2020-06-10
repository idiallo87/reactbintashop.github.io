import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../context';

export default class ProductList extends Component {
    state={
        products: storeProducts
    };

    render() {
        console.log(this.state.products);
        let {products} = this.state;
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="vos" title="products"/>
                        <div className="row">
                            
                                {products.map((product) => {
                                    return <Product key={product.id} product={product}/>;
                                })

                                }
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
           
        );
    }
}
