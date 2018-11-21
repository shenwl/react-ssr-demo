import React, {Component} from 'react';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import {getHomeList} from "./store/actions";


class Home extends Component {
  getList() {
    const {list} = this.props;
    return list.map(news => (
      <div key={news.id}>{news.title}</div>
    ));
  }

  render() {
    return (
      <div>
        <Header/>
        {this.getList()}
        <div>react ssr demo</div>
        <button onClick={() => {
          alert('click');
        }}>click
        </button>
      </div>
    );
  }

  // componentDidMount 在服务器端不执行
  componentDidMount() {
    this.props.getHomeList();
  }
}

const mapStateToProps = state => ({
  list: state.home.newsList,
});

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);


