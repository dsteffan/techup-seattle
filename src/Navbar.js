import React, {Component} from 'react';
import M from 'materialize-css';

export default class Navbar extends Component {

	render() {
		return(
			  <nav>
			    <div className="nav-wrapper">
			      <a href="#!" className="brand-logo"> <img src="" alt=""/> Gathering Spot</a>
			      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
			      <ul className="right hide-on-med-and-down">
			        <li><a href="https://www.meetup.com/">Meetup</a></li>
			        <li><a onClick={this.props.clickHandler}>Events Today</a></li>
			        <li><a onClick={this.props.clickHandler}>Events Tomorrow</a></li>
			      </ul>
			    </div>
			  	<ul className="sidenav" id="mobile-demo">
				    <li><a href="https://www.meetup.com/">Meetup</a></li>
				    <li><a onClick={this.props.clickHandler}>Events Today</a></li>
				    <li><a onClick={this.props.clickHandler}>Events Tomorrow</a></li>
			 	</ul>
			  </nav>
			)
	}
}
