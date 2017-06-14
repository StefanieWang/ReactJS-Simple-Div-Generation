import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
	render(){
		const randRGB = () => {
			const rand = () => { return Math.floor(Math.random()*255)};
			return 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')';
		};
		return <div className="square" style={{background: randRGB()}}></div>
	}
}

class DivGeneration extends React.Component {
	render(){
		let squareList = [];
		const count = this.props.count;
		for(let i=0; i<count; i++){			
			const listItem = <li key={i}><Square /></li>;
            squareList.push(listItem);
		};
		return <ul className="list">{squareList}</ul>
	}
} 

class DivContainer extends React.Component {
	constructor(){
		super();
		this.state = {
			count: 0,
			add: true
		};
		this.changeSquares = this.changeSquares.bind(this);
	}

	changeSquares(){
		let count = this.state.count;
		let add = this.state.add;
		if(add){
			if(count < 75){
				count++;
			}else{
                add = false;
                count--;
			}
		}else{
			if(count > 0){
              count--;
			}else{
				add = true;
				count++;
			}
		};
		this.setState({
			count: count,
			add: add
		})
	}

	componentDidMount(){
		setInterval(this.changeSquares, 100);
	}

	render(){		
		return <DivGeneration count={this.state.count} />
	}
}

ReactDOM.render(
	<DivContainer />, 
	document.getElementById('app'));

