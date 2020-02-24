import React from 'react';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloClient, gql} from 'apollo-boost';

import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import ColorPanel from '../color-panel/color-panel.component'
import './detailed-product.component.scss' 

import NavBar from '../navbar/navbar.component'
import Footer from '../footer/footer.component'
import { Query } from 'react-apollo';

const httpLink = createHttpLink ({
    uri: 'https://www.capua.rocks/graphql/'
}
)

const PRODUCT= gql`
 query prod ($name: String!){
            product(name: $name){
                id
                detailedName
                price
                tagline
                imgDetailed
                colors
                description
                edition
                link
                
            }
}
            
            `

const cache = new InMemoryCache ();

const client = new ApolloClient({
    link:httpLink,
    cache
});
const override = css`
  display: block;
  margin: auto;
  border-color: purple;
  top:50%;
  left:50%;
`;


class DetailedProduct extends React.Component {

    render (){
        return (
            <Query query={PRODUCT} client={client} variables = {{name: this.props.name.location.pathname}}>
            {({ loading, error, data }) => {
            if (loading) return (                
                <div>
                <div className="sweet-loading">
                <ClipLoader
                  css={override}
                  size={150}
                  color={"#123abc"}
                  loading={loading}
                  
                />
              </div>
              </div>);
            if (error) return `Error! ${error}`;
            if (data.product) {
                console.log(this.props.name.location.pathname)
            return(
            <WDetailedProduct product = {data.product}/>
            )
            }
          }}
        </Query>
        );
        }
}

 
class WDetailedProduct extends React.Component {

    constructor(product){
        super(product);
        this.state = {
            product : this.props.product,
            loading : true
        }
    }

    render(){
        return(
            

                <div>
                    <NavBar/>
                    <div className='body'>
                        <div className='header'>
                            <h1 id='name'>{this.state.product.detailedName}</h1>
                            <h4 id='tagline'>{this.state.product.tagline}</h4>
                        </div>
                        <div className='whole'>
                            <div className='pic'><img src={ "https://www.capua.rocks/media/"+this.state.product.imgDetailed}></img></div>
                            <div className='details'>
                                <div className='description'>
                                    <p>{this.state.product.description}</p>
                                </div>
                                <div className='first-floor'>
                                    <div className='price_detailed'>
                                        <p className='pink-text'>{'$'+this.state.product.price}</p>
                                    </div>
                                    <div className='edition'>
                                        <p>{this.state.product.edition}</p>
                                    </div>
                                </div>
                                <div className='second-floor'>
                                    <div className='color'>
                                        <p className='pink-text'>Colors</p>
                                    </div>
                                    <div className='colorP'>
                                        <ColorPanel colors = {this.state.product.colors}/>
                                    </div>
                                </div>
                                <form action={this.state.product.link} method="get" target="_blank">
                                    <button className='btn-amazon'>See on Amazon</button>
                                </form>
                                <form action="https://www.capua.store" method="get">
                                    <button className="btn-amazon back">Back to Shop</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                    </div>
        )
        }

    
}

export default DetailedProduct;