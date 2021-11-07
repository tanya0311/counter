// сохраняем данные
export function saveState<T>(key: string, state: T) {
	const stateString = JSON.stringify(state)
	localStorage.setItem(key, stateString)
}

//получаем данные
export function restoreState<T>(key: string, defaultState: T) {
	const stateString = localStorage.getItem(key)
	if (stateString !== null) defaultState = JSON.parse(stateString) as T
	return defaultState
}

