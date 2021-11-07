import React from "react"

type ScorePropsType = {
	count: number
	text: string
	maxCount: number 
	startCount: number
	activeMaxCount: boolean
	activeMinCount: boolean
}

export const Score: React.FC<ScorePropsType> = (props) => {
	return (
		<div>
			{props.startCount < 0 ||
			props.maxCount < 0 ||
			props.activeMaxCount ||
			props.activeMinCount ? (
				<div
					className={props.text === "Incorrect count!" ? "countEnd" : "count"}
				>
					{" "}
					{props.text}
				</div>
			) : (
				<div className={props.count === props.maxCount ? "countEnd" : "count"}>
					{props.count}
				</div>
			)}
		</div>
	)
}
