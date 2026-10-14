import React, { Component } from 'react'

export default class NewsFeed extends Component {
     constructor() {
    super();

    this.state = {
      hidden: false,
    };
  }

  hiden = () => {
    this.setState({
      hidden: !this.state.hidden
    });
  };
   
  render() {

   let {author, title, description, url, urlToImage, publishedAt, content} = this.props
   
   return (
          
          <div className="row my-3">
            <div className="col-12 col-md-3">  
                <img
                src={urlToImage  || "/default-news.jpg"}
                alt={title || "News image"}
                loading="lazy"
                className="img-fluid w-100"
                style={{ height: "150px" , objectFit: "cover", backgroundColor:"black"}}
                onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/default-news.jpg";}}
                />
            </div>
            <div className="col-12 col-md-9">
                <h1 style={{fontSize:"2rem"}}>{title}</h1>
                <p>{description} 
                    <span
              style={{ color: 'blue', cursor: 'pointer' }}
              onClick={this.hiden}
            >
              {this.state.hidden ? ' Read less' : ' Read more'}
            </span>
          </p>

          {this.state.hidden && (
            <p>
              {content} <a href={url} target="_blank" rel="noreferrer">click here to read on website</a>
            </p>
          )}
            </div>
            <div className='d-flex justify-content-between'>
                <h6 className="my-1">Author {author}</h6>
                <p>{publishedAt}</p>
                

            </div>
            <hr />
        </div>

    )
  }
}
