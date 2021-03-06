import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HeaderComponent from '../sub_components/header/header-component';
import PromotionComponent from '../promotion/promotion-component';
import FeaturesComponent from '../features/features-component';
import FooterComponent from '../sub_components/footer/footer-component';

class HomeComponent extends Component {
  render() {
    return (
      <div>
        <div className="background-image"></div>
        <section className="hero is-fullheight is-default bg-black">
          <div className="hero-head">
            <HeaderComponent/>
          </div>
          <div className="hero-body">
            <Switch>
              <Route exact path='/' component={PromotionComponent}/>
              <Route exact path='/features' component={FeaturesComponent}/>
              <Route component={PromotionComponent}></Route>
            </Switch>
          </div>
          <FooterComponent/>
        </section>
      </div>
    );
  }
}

export default HomeComponent;
