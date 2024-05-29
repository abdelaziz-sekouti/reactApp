import React from 'react'

const styles = {
	backgroundColor : 'red',
	color:'white',
	padding:'20px 0',
	textAlign:'center',
	textTransform:'uppercase'
}
const Home = (props)=> {
	console.log(props)
	return (
		<div>
			<h1 style={styles}>
				WELCOME Mr {props.name}  {props.lastname}
			</h1>
			
		</div>
	)
}

export default Home