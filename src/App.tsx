import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './common/header';
import Footer from './common/footer';
import Panel from './common/panel';
import Container from './common/container';

function App() {
  return (
    <div className="">
      <div className="row">
      <div className="col-lg-12 col-12 col-md-8">
        <Header />
      </div>
      </div>
      <div className="row">        
        {/* <div className="col-lg-12 col-12 col-md-8"> */}
          <div className="col-lg-2">
            <Panel />
          </div>
          <div className="col-lg-8">
            <Container />
          </div>
          <div className="col-lg-2">
          
          </div>

        {/* </div> */}
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
