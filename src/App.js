import React from 'react';
import { css } from '@emotion/core';
// First way to import
import { RingLoader as Loader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='sweet-loading'>
        <Loader
          css={override}
          sizeUnit={"px"}
          size={300}
          color={'#36D7B7'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}
export default App;
