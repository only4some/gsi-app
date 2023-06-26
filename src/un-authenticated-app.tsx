import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './common/un-authenticated/header';
import Footer from './common/un-authenticated/footer';
import Container from './common/un-authenticated/container';

function App() {
  return (
 
    <div className="">
      <div className="row">
      <div className="col-lg-12 col-12 col-md-8">
        <Header />
      </div>
      </div>
      <div className="row">                
          <div className="col-lg-1">            
          </div>
          <div className="col-lg-9">
            <Container />
          </div>
          <div className="col-lg-2">          
          </div>
      </div>
      <div className="row">
      <div className="col-lg-12 col-12 col-md-8">
        <Footer />
      </div>
      </div>
    </div>
    
    
      
  );
}

export default App;
