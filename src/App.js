import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './pages/homepage.component'
import DetailedProduct from './components/detailed-product/detailed-product.component'
import About from './pages/about.page'
import Contact from './pages/contact.page'

import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloClient, gql} from 'apollo-boost';

import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const httpLink = createHttpLink ({
  uri: 'http://127.0.0.1:8000/graphql/'
})
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


class App extends React.Component {

  componentDidMount() {
    client.query({
        query: gql`{
          products{name}}`})
            .then(response => this.setState({names:response.data.products.map((x) => x.name)}
                                          )
                  )
            .then(this.setState({loading:false})).catch();
}

  constructor(){
    super();
    this.state ={
      loading:true,
      names: []
    }
  }
  render(){
    if (!this.state.loading){
    return (
      <div>
        <Route exact path = '/' render={() => <HomePage names = {this.state.names} /> } />

        {this.state.names.map((name) =>
          <Route exact path = {'/'+name+'/'} render={(name) => <DetailedProduct name = {name}/>}/>
        )}

        <Route exact path = '/about/'  component = {About} />
        <Route exact path = '/contact/'  component = {Contact} />
        
      </div>
    );
    }
    else{
      return(
        <div>
            <div className="sweet-loading">
            <ClipLoader
              css={override}
              size={150}
              color={"#123abc"}
              loading={!this.state.loading}
            />
          </div>
          </div>
        )
    }
    
  }
}

export default App;
