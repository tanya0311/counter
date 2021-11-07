import React from "react"

type ButtonPropsType = {
	title: string	
	count: number
	buttonFunction: () => void
	disabled: (count: number) => boolean
}

export const Button: React.FC <ButtonPropsType>=(props)=> {
	return (
		<div>
			<button
				className="button"
				onClick={props.buttonFunction}
				disabled={props.disabled(props.count)}
			>
				{props.title}
			</button>
		</div>
	)
}
