import React from 'react';
import Header from '../../components/Header';
import {connect} from 'react-redux';


const Home = (props) => {
  return (
    <div>
      <Header />
      <h1>This is {props.name}</h1>
      <div>react ssr demo</div>
      <button onClick={() => {alert('click')}}>click</button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: state.name
});

export default connect(mapStateToProps, null)(Home);


