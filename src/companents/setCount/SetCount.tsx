import React, { ChangeEvent } from "react"
import { Button } from "../button/Button"

type SetCountPropsType = {
	text: string
	setText: (text: string) => void
	count: number
	setFunc: () => void
	maxCount: number
	setMaxCount: (count: number) => void
	startCount: number
	setStartCount: (count: number) => void
	setActiveMaxCount: (count: boolean) => void
	setActiveMinCount: (count: boolean) => void
	disabledSetButton: (count: number) => boolean
	setToLocalStorage: (key: string, count: number) => void
}

export const SetCount: React.FC<SetCountPropsType> = (props) => {
	;(props.startCount === 0 && props.maxCount > 0) ||
	(props.maxCount > 0 &&
		props.maxCount > props.startCount &&
		props.startCount >= 0)
		? props.setText(`Enter count and press 'set'`)
		: props.setText("Incorrect count!")

	const onChangeStartCount = (e: ChangeEvent<HTMLInputElement>) => {
		props.setActiveMinCount(true)
		props.setStartCount(0)
		let startCurrentCount = Number(e.currentTarget.value)
		props.setToLocalStorage("start", startCurrentCount)
		props.setStartCount(startCurrentCount)
	}
	const onChangeMaxcount = (e: ChangeEvent<HTMLInputElement>) => {
		props.setActiveMaxCount(true)
		let maxCurrentCount: number = Number(e.currentTarget.value)
		props.setToLocalStorage("end", maxCurrentCount)
		props.setMaxCount(maxCurrentCount)
	}

	return (
		<div>
			<div className='startMaxValue'>
				<div className='start'>
					<span className='min'>
						<i>Start count:</i>
					</span>
					<input
						type='number'
						className={
							props.text === "Incorrect count!" ? `inputRed` : `endInput`
						}
						value={props.startCount}
						onChange={(e) => {
							onChangeStartCount(e)
						}}
						onFocus={() => {
							props.setActiveMinCount(true)
						}}
					/>
				</div>
				<div className='start'>
					<span className='max'>
						<i>Max count:</i>{" "}
					</span>
					<input
						type='number'
						className={
							props.text === "Incorrect count!" ? "inputRed" : `startInput`
						}
						value={props.maxCount}
						onChange={(e) => {
							onChangeMaxcount(e)
						}}
						onFocus={() => {
							props.setActiveMaxCount(true)
						}}
					/>
				</div>
			</div>
			<div>
				<Button
					title={"set"}
					count={props.count}
					buttonFunction={props.setFunc}
					disabled={props.disabledSetButton}
				/>
			</div>
		</div>
	)
}
