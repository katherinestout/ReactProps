import React, { Component } from 'react';
//import PropTypes from 'prop-types';


class MoreProps extends Component {
  render() {
      const hello = "hello hello this is another way of how to use props";
  
    return (
      <div>
       <Hello hello = {hello} />
      </div>
    );
  }
}
const Hello = props => <h1>{props.hello}</h1>

export default MoreProps;
