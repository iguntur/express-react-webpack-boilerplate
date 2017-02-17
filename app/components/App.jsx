import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			likes: 0
		};

		this.addLike = this.addLike.bind(this);
	}

	addLike(e) {
		const likes = this.state.likes + 1;

		this.setState({ likes });
	}

	render() {
		return (
			<div className="flex h-100vh">
				<h1 className="likes">Like : {this.state.likes}</h1>

				<button onClick={this.addLike}
						style={{
							margin: '2rem',
							padding: '6px 12px'
						}}> Like
				</button>

			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));

if (module.hot) {
	module.hot.accept();
}
