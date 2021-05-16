import React from 'react';
import './Main.css';
import { Video } from './Video/Video';
import { Iframe } from './Video/Iframe/Iframe';

//API key and base of URL
const key = "AIzaSyBfMzahwcdSsYmRI2n3h2H1IxeYV1-9QlE";
const baseURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${key}`;

export class Main extends React.Component {

	constructor(props) {
		super(props);

		this.state={
			users: [],
			video: '',
			title: '',
			description: '',
			layout: true
		}
	}

	componentDidUpdate(prevProps, prevState) {
	  if (prevProps.term !== this.props.term) {
	  	this.setState({video:this.props.video})
	    this.getData(this.props.term);
	  }
	}

	componentDidMount() {
		this.getData('&q=react-development');
	}

	openVideo = (id, title, desc) => this.setState({video: id, title:title, description:desc}, this.getData(`&type=video&relatedToVideoId=${id}`));

	showVideo = () => this.state.video ? <Iframe src={`https://www.youtube.com/embed/${this.state.video}`} title={this.state.title} desc={this.state.description}/> : null;

	showVideos = () => {
		if(this.state.users.length) {
			return this.state.users.map(user => user.snippet ? <Video key={user.id.videoId} id={user.id.videoId} image={user.snippet.thumbnails.default.url} title={user.snippet.title} desc={user.snippet.description} key={user.id.videoId} openVideo={this.openVideo} layout={this.state.layout}/> : null) 
		}
		return <p>X No matching results!</p>;
	}

	getData = (term) => {
		console.log(term)
		fetch(baseURL+term)
		.then(data => data.json())
		.then(results => term !== "&q=" ? this.setState({users:results.items}) : this.setState({users:[]}))
	}

	render() {
		return (
			<main className="wrapper ">
				{this.showVideo()}
				<div className='layouts clearfix'>
					<button className={`${this.state.layout?'selected':''}`} onClick={() => this.setState({layout:true})}>GRID</button>
					<button className={`${!this.state.layout?'selected':''}`} onClick={() => this.setState({layout:false})}>LIST</button>
				</div>
				<ul className="videos clearfix">
					{this.showVideos()}
				</ul>
			</main>
		)
	}
}