import React, {setState} from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main'

class App extends React.Component {
	constructor() {
		super();

		this.state= {
			term:''
		}
	}

	search = (term) => this.setState({term:'&q='+term});

	render () {
		return (
	    	<>
	      	<Header search={this.search}/>
	      	<Main term={this.state.term} video={false}/>
	    	</>
	  	)
	}

}

export default App;
