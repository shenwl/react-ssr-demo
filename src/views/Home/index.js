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
    if(this.props.list.length > 0) return;
    this.props.getHomeList();
  }
}

Home.loadData = (store) => {
  // 在服务器端渲染之前把这个路由需要的数据提前加载好
  return store.dispatch(getHomeList());

};

const mapStateToProps = state => ({
  list: state.home.newsList,
});

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);


