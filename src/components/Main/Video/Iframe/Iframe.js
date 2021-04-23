import React from 'react';
import './Iframe.css'

export class Iframe extends React.Component {

	render () {
		return (
			<div className='iframe clearfix'>
				<iframe title="video" id="video" src={this.props.src} width="560" height="315" frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
				allowFullScreen></iframe>
				<div className='infos'> 
					<h1>{this.props.title}</h1>
					<p>{this.props.desc}</p>
				</div>
			</div>
		)
	}
}