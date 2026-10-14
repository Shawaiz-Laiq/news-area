import React, { Component } from 'react'

export default class NavBar extends Component {
     search = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggleDropdown = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }
    handlesubmit = (e) =>{
        e.preventDefault(); 
        const Searchon = this.search.current.value;
        this.props.onsearch(Searchon); 
    }

    render() {
        const username = this.props.username || ""; 
        const lastName = username.trim().split(" ").pop() || "User"; 

        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <div className="navbar-brand">News Area</div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>    
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav w-100 mb-2 mb-lg-0 d-flex align-items-center">           
                                <li className="nav-item">
                                    <span className="nav-link active" style={{ cursor: 'pointer' }}>About</span>
                                </li>
                                
                                {this.props.username === "" ?                                    
                                <li className="nav-item">
                                    <span className="nav-link active" style={{ cursor: 'pointer' }} onClick={this.props.onLoginClick}>Login</span> 
                                </li> : 
                                
                                <li className={`nav-item dropdown ${this.state.isOpen ? 'show' : ''}`} style={{ position: 'relative' }}>
                                      <span 
                                        className="nav-link dropdown-toggle" 
                                        role="button" 
                                        style={{ marginRight: "100px", width: "100px", overflow: "hidden", cursor: "pointer" }}
                                        onClick={this.toggleDropdown} 
                                      >
                                        {lastName}
                                      </span> 
                                        
                                        <ul className={`dropdown-menu ${this.state.isOpen ? 'show' : ''}`} style={{ position: 'absolute', zIndex: 1050 }}>
                                            <li><span className="dropdown-item" style={{ overflow: "hidden" }}>Name: {this.props.username}</span></li> 
                                            <li><span className="dropdown-item" style={{ overflow: "hidden" }}>Mail: {this.props.useremail}</span></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li>
                                                <span className="dropdown-item" onClick={() => {
                                                    this.setState({ isOpen: false }); 
                                                    this.props.onLogoutClick();
                                                }} style={{ cursor: 'pointer' }}>
                                                    LogOut
                                                </span>
                                            </li>
                                        </ul>                   
                                </li>}
                                
                                <li className="nav-item mx-auto" style={{ minWidth: '300px' }}>
                                    <form className="d-flex" role="search" onSubmit={this.handlesubmit}>
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" ref={this.search}/>
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </li>
                                {this.props.username === "" ?  " " :
                                <li>
                                    <span onClick={this.props.onNewsClick}  style={{ cursor: 'pointer' }}>Add News</span>
                                </li> }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
