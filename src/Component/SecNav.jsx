import React, { Component } from 'react'
import News from "./News"

export default class Secnav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'all',
      newsarea: false,
      secondNav: "all",
    };
  };

  handleTabClick = (tabName) => {
    this.setState({ activeTab: tabName });
    this.setState({ secondNav: tabName })

  };
  handleNewsArea = () => {
    this.setState({ newsarea: true });
    
  };
  handleAll = () => {
    this.setState({ newsarea: false });
  };

  render() {
    const { activeTab } = this.state;
    

    return (
      <div className="container ">

        <ul className="nav nav-underline justify-content-start border-bottom pb-1">
          
          <li className="nav-item">
            <span 
              className={`nav-link ${activeTab === 'all' ? 'active font-weight-bold' : ''}`}
              style={{ cursor: 'pointer', color: activeTab === 'all' ? '#0d6efd' : '#5f6368' }}
              onClick={() => {this.handleTabClick('all'); this.handleAll()}}
            >
              All
            </span>
          </li>

          <li className="nav-item">
            <span 
              className={`nav-link ${activeTab === 'pakistan' ? 'active' : ''}`}
              style={{ cursor: 'pointer', color: activeTab === 'pakistan' ? '#0d6efd' : '#5f6368' }}
              onClick={() => {this.handleTabClick('pakistan'); this.handleAll()}}
            >
              Pakistan
            </span>
          </li>

          <li className="nav-item">
            <span 
              className={`nav-link ${activeTab === 'sports' ? 'active' : ''}`}
              style={{ cursor: 'pointer', color: activeTab === 'sports' ? '#0d6efd' : '#5f6368' }}
              onClick={() => {this.handleTabClick('sports'); this.handleAll()}}
            >
              Sports
            </span>
          </li>

          <li className="nav-item">
            <span 
              className={`nav-link ${activeTab === 'news' ? 'active' : ''}`}
              style={{ cursor: 'pointer', color: activeTab === 'news' ? '#0d6efd' : '#5f6368' }}
              onClick={() => this.handleTabClick('news')}
            >
              News
            </span>
          </li>
          <li className="nav-item">
            <span 
              className={`nav-link ${activeTab === 'newsarea' ? 'active' : ''}`}
              style={{ cursor: 'pointer', color: activeTab === 'newsarea' ? '#0d6efd' : '#5f6368' }}
              onClick={() => {
                this.handleTabClick('newsarea');
                this.handleNewsArea();
            }}>
              News Area
            </span>
          </li>
        </ul>
        <News newsarea={this.state.newsarea} secondNav={this.state.secondNav}  newsList={this.props.newsList} scr={this.props.scr}/>
      </div>
    )
  }
}
