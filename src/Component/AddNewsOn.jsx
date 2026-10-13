
import React, { Component } from "react";


export default class AddNewsOn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author:"",
      title: "",
      description: "",
      url: "",
      urlToImage: "",
      content: "",
      Newsare : [],
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

 handleSubmit = (e) => {
  e.preventDefault();


  const news = {
    author: this.props.username || "Admin",
    title: this.state.title,
    description: this.state.description,
    url: this.state.url,
    urlToImage: this.state.urlToImage,
    publishedAt: new Date().toISOString(),
    content: this.state.content,
  };

  this.setState(
    (prevState) => ({
      Newsare: [...prevState.Newsare, news],
    }),
  
  );
  this.props.onPublish(news);
  this.props.closeLogin();
};

  render() {


    return (
      <div className="container py-5" style={{height: "500px"}}>
       
        <div className="row justify-content-center" style={{height: "500px"}}>
            
          <div className="col-lg-8 col-md-10">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-header bg-primary text-white p-4">
                 <span 
          style={{ position: "absolute", top: "5px", right: "15px", cursor: "pointer", fontSize: "20px", color: "white" }}
          onClick={this.props.closeLogin}
        >
          &times;
          </span>
                <h3 className="mb-1">Create News Article</h3>
                <p className="mb-0">
                  Enter all required news details.
                </p>
              </div>

              <div className="card-body p-4">
                <form onSubmit={this.handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      News Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      className="form-control form-control-lg"
                      placeholder="Enter news title"
                      value={this.state.title}
                      onChange={this.handleChange}
                      required
                      maxLength={"55"}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Description *
                    </label>
                    <textarea
                      name="description"
                      className="form-control"
                      rows="3"
                      placeholder="Write a short description"
                      value={this.state.description}
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      News URL *
                    </label>
                    <input
                      type="url"
                      name="url"
                      className="form-control"
                      placeholder="https://example.com/news"
                      value={this.state.url}
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Image URL *
                    </label>
                    <input
                      type="url"
                      name="urlToImage"
                      className="form-control"
                      placeholder="https://example.com/image.jpg"
                      value={this.state.urlToImage}
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      News Content *
                    </label>
                    <textarea
                      name="content"
                      className="form-control"
                      rows="6"
                      placeholder="Write full news content"
                      value={this.state.content}
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    //  onClick={this.props.closeLogin}
                    className="btn btn-primary btn-lg w-100"
                  >
                    Publish News
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
