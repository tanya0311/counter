import React, { useState } from "react"
import "./App.css"
import { Score } from "./companents/score/Score"
import { Button } from "./companents/button/Button"
import { SetCount } from "./companents/setCount/SetCount"

export type TextType = `Enter count and press 'set'` | `Incorrect count!`

export const App: React.FC = () => {
	const [count, setCount] = useState<number>(0)
	const [text, setText] = useState<TextType>(`Enter count and press 'set'`)

	const [activeMaxCount, setActiveMaxCount] = useState<boolean>(true)
	const [activeMinCount, setActiveMinCount] = useState<boolean>(true)

	const start = localStorage.getItem("start")
	const end = localStorage.getItem("end")
	const [maxCount, setMaxCount] = useState<number>(Number(end))
	const [startCount, setStartCount] = useState<number>(Number(start))

	const setFunc = () => {
		setCount(startCount)
		setActiveMaxCount(false)
		setActiveMinCount(false)
	}

	const setToLocalStorage = (key: string, count: number) => {
		localStorage.setItem(key, count.toString())
	}
	const incFunc = () => {
		if (count >= startCount && count <= maxCount) {
			setCount(count + 1)
		}
	}
	const resFunc = () => {
		setCount(0)
	}

	// disabled
	const disabledSetButton = (count: number) => {
		if (
			maxCount &&
			startCount >= 0 &&
			maxCount > startCount &&
			maxCount !== startCount &&
			maxCount > 0 &&
			startCount >= 0
		) {
			return false
		} else {
			return true
		}
	}
	const disabledIncButton = (count: number) => {
		if (
			count >= 0 &&
			count < maxCount &&
			count >= startCount &&
			!activeMaxCount &&
			!activeMinCount
		) {
			return false
		} else {
			return true
		}
	}
	const disabledResButton = (count: number) => {
		return count <= 0
	}

	const setTxt = (text: string) => {
		(startCount === 0 && maxCount > 0) ||
		(maxCount > 0 && maxCount > startCount && startCount >= 0)
			? setText(`Enter count and press 'set'`)
			: setText("Incorrect count!")
	}

	return (
		<div className='App'>
			<div className='border-block'>
				<SetCount
					text={text}
					setText={setTxt}
					count={count}
					setFunc={setFunc}
					disabledSetButton={disabledSetButton}
					maxCount={maxCount}
					setMaxCount={setMaxCount}
					startCount={startCount}
					setStartCount={setStartCount}
					setActiveMinCount={setActiveMinCount}
					setActiveMaxCount={setActiveMaxCount}
					setToLocalStorage={setToLocalStorage}
				/>
			</div>
			<div className='border-block'>
				<Score
					count={count}
					text={text}
					maxCount={maxCount}
					startCount={startCount}
					activeMinCount={activeMinCount}
					activeMaxCount={activeMaxCount}
				/>
				<div className='btnBorder'>
					<Button
						title={"inc"}
						count={count}
						buttonFunction={incFunc}
						disabled={disabledIncButton}
					/>
					<Button
						title={"reset"}
						count={count}
						buttonFunction={resFunc}
						disabled={disabledResButton}
					/>
				</div>
			</div>
		</div>
	)
}
