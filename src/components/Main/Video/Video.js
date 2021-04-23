import React from 'react';
import './Video.css'

export class Video extends React.Component {

	render () {
		return (
			<li className={`video ${this.props.layout ? 'grid' : ''}`} onClick={()=>this.props.openVideo(this.props.id, this.props.title, this.props.desc)}>
				<a className='clearfix' href="#">
					<img src={this.props.image} />
					<div className='video-info'>
						<h3>{this.props.title}</h3>
						<p>{this.props.desc}</p>
					</div>
				</a>
			</li>
		)
	}
}