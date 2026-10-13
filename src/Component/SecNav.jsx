import React, { Component } from 'react'
import News from "./News"

export default class Secnav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'all'
    };
  }

  handleTabClick = (tabName) => {
    this.setState({ activeTab: tabName });

  }

  render() {
    const { activeTab } = this.state;

    return (
      <div className="container ">

        <ul className="nav nav-underline justify-content-start border-bottom pb-1">
          
          <li className="nav-item">
            <span 
              className={`nav-link ${activeTab === 'all' ? 'active font-weight-bold' : ''}`}
              style={{ cursor: 'pointer', color: activeTab === 'all' ? '#0d6efd' : '#5f6368' }}
              onClick={() => this.handleTabClick('all')}
            >
              All
            </span>
          </li>

          <li className="nav-item">
            <span 
              className={`nav-link ${activeTab === 'images' ? 'active' : ''}`}
              style={{ cursor: 'pointer', color: activeTab === 'images' ? '#0d6efd' : '#5f6368' }}
              onClick={() => this.handleTabClick('images')}
            >
              Images
            </span>
          </li>

          <li className="nav-item">
            <span 
              className={`nav-link ${activeTab === 'videos' ? 'active' : ''}`}
              style={{ cursor: 'pointer', color: activeTab === 'videos' ? '#0d6efd' : '#5f6368' }}
              onClick={() => this.handleTabClick('videos')}
            >
              Videos
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
        </ul>
        <News/>
      </div>
    )
  }
}
