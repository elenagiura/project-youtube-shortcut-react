import React from 'react';
import './Header.css';
import logo from '../../images/logo.jpg';
import { SearchSection } from './SearchSection/SearchSection';

export class Header extends React.Component {
	constructor(props) {
		super();
	}

	render () {
		return (
			<header>
				<div className="wrapper">
					<img src={logo} alt='YouTube logo'/>
					<SearchSection search={this.props.search}/>
				</div>
			</header>
		)
	}
}
