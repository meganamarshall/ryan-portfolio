import React, { Component } from 'react';
import WidgetStyled from '../styles/WidgetStyled';

class Widget extends Component {


  render() {
    return (
      <WidgetStyled>
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe src="//lightwidget.com/widgets/a536fca959235ba9adc09df61c7df60d.html" scrolling="yes" width="700px" height="700px" className="lightwidget-widget"></iframe>
      </WidgetStyled>
    );
  }
}

export default Widget;
