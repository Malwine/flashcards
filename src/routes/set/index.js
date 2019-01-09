import { h, Component } from 'preact';
import style from './style';
import { start } from '../../lib/flashcards'
import { route } from 'preact-router'
import { reset, getProgressForSet } from '../../lib/flashcards'

export default class Set extends Component {

	handleStartClick = () => {
		console.log("start was clicked")
		let cardIndex = start(this.props.data, this.props.set)
		route(`/sets/${this.props.set}/cards/${cardIndex}`)
	}

	handleResetClick = () => {
		let currentSet = this.props.data.sets[this.props.set]
		reset(currentSet)
		this.forceUpdate()
	}

	render({ data, set: setIndex }) {
		const set = data.sets[setIndex];
		const progress = getProgressForSet(set);

		return (
			<div class={style.spacing}>
				<h2>{set.name}</h2>
				<p class={style.subline}>{set.description}</p>
				{ progress }
				{ progress >= 100 ? <div>Finished</div> : (
					<button 
					class={[style.button, style.buttonPrimary].join(' ')} 
					onClick={ this.handleStartClick }>
					Start
					</button> 
				) 
				}
				
        
        <p>Included words:</p>
        <ul class={style.list}>	
				{ set.cards.map((card, index) => {
					return (
            <li class={ style.cardWrap }>
              <div>{ card.front }</div>
              <div class={ style.left }>{ card.back }</div>
            </li>
					)
				})}
				</ul>

				<button 
					class={[style.button, style.resetButton].join(' ')} 
					onClick={ this.handleResetClick }>
					Reset progress
				</button>
			</div>
		);
	}
}
