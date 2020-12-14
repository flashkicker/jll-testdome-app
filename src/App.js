import React from "react"

const CommentList = (props) => {
	const [comments, setComments] = React.useState([])
	const [comment, setComment] = React.useState("")

	const onChangeHandler = (e) => {
		setComment(e.target.value)
	}

	const onPressHandler = (e) => {
		e.preventDefault()
		if (comment.length > 0) setComments([...comments, comment])
		setComment("")
	}

	return (
		<div>
			<form onSubmit={onPressHandler}>
				<input type="text" value={comment} onChange={onChangeHandler} />
				<input type="submit" value="Post" />
			</form>
			<ul>
				{comments.map((comment, idx) => {
					return <li key={idx}>{comment}</li>
				})}
			</ul>
		</div>
	)
}

function App() {
	return (
		<div className="App">
			<CommentList />
		</div>
	)
}

export default App
