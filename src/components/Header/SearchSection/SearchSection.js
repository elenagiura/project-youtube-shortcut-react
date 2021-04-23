import React, {setState} from 'react';
import './SearchSection.css';

export class SearchSection extends React.Component {
	constructor (props) {
		super();

		this.state = {
			term:''
		}
	}

	setTerm = (e) => this.setState({term: e.target.value})

	render () {
		return (
			<div className="search-section">
				<input type='text' name='search' placeholder='Search' onChange={this.setTerm} value={this.state.term}/>
				<button onClick={() => this.props.search(this.state.term)}>SEARCH</button>
			</div>
		)
	}
}