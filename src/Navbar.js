import React, {Component} from 'react';
import M from 'materialize-css';

export default class Navbar extends Component {

	/*componentDidMount() {
		let elems = document.querySelectorAll('.dropdown-trigger');
		M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
	}*/

	render() {
		return(
			  <nav>
			    <div class="nav-wrapper">
			      <a href="#!" class="brand-logo">Logo</a>
			      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
			      <ul class="right hide-on-med-and-down">
			        <li><a href="sass.html">Sass</a></li>
			        <li><a href="badges.html">Components</a></li>
			        <li><a href="collapsible.html">Javascript</a></li>
			        <li><a href="mobile.html">Mobile</a></li>
			      </ul>
			    </div>
			  	<ul class="sidenav" id="mobile-demo">
				    <li><a href="sass.html">Sass</a></li>
				    <li><a href="badges.html">Components</a></li>
				    <li><a href="collapsible.html">Javascript</a></li>
				    <li><a href="mobile.html">Mobile</a></li>
			 	</ul>
			  </nav>

			/* <div className='input-field col s12'>
				<a className='dropdown-button btn' data-activates='dropdown1'>Drop Me!</a>
				<ul id='dropdown1' className
				='dropdown-content'>
					<li><a href='#!'>one</a></li>
					<li><a href='#!'>two</a></li>
					<li className='divider'></li>
					<li><a href='#!'>three</a></li>
					<li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
                 	<li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
				</ul>
			</div>*/
			)
	}
}