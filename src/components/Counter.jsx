import React, {useState} from 'react'
const styles = {
	padding:"50px 12px",
	fontSize:'2rem',
	backgroundColor:'#c0C',
	margin:'30px auto',
	display:'flex',
	textAlign:'center',
	justifyContent:'center',
	alignItems :'center',
	textTransform:'uppercase',
	width:'200px',
	height:'30px'																		
}
export default function Counter() {
	const [count, setCount] = useState(10)
	function incrCount (count){
 
count = count + 1 
 return count
	}
	return (
		<div>
			<button onClick={incrCount(count)} style={styles}>click</button>
			<p>{incrCount(count)}</p>
		</div>
	)
}