/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */

'use strice';

import React from 'react';
import ReactDOM from 'react-dom';
import img from '../images/img.jpeg';
import './search.less';
import '../../common/index';
import { a } from './tree-shaking';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Text: null,
    };
    this.loadComponent = this.loadComponent.bind(this);
  }

  loadComponent() {
        import('../text').then((text) => {
          // eslint-disable-next-line no-console
          console.log(text.default());
          this.setState({
            Text: text.default && text.default(),
          });
        });
  }

  render() {
    return (
      <div className="search-class">
        { this.state.Text }
            Search Text1111
        <img src={img} />
            123
        {a()}
        <button onClick={this.loadComponent}>button</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root'),
);
