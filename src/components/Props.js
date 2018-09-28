import React, { Component } from 'react';
//import PropTypes from 'prop-types';


class Props extends Component {
  render() {
      const Headline = () => {
          return <h1 className="title">Welcome to React</h1>
      }
      const Greeting =(props) => {
        const {name, age} = props;
        return <p>
            You will love it {name} ({age})! 
        </p>
      }
    return (
      <div>
       <Headline/>
       <Greeting name = "Kate" age = {23} />
      </div>
    );
  }
}
/*
Greeting.propTypes ={
    name: PropTypes.string,
    age: PropTypes.number
}*/

export default Props;
