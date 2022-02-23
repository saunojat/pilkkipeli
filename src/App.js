import React, {useState} from 'react'
import logo from './eikalaa.gif'
import logo2 from './kalaa.gif'
import background1 from './tausta1.png'
import background2 from './tausta2.png'

const Question = (props) => {
return (<div><p className="note">Haluatko pilkkiä tovin?
<button onClick={() => props.setValue(1)}>Kyllä</button>
<button onClick={() => props.setValue(0)}>En</button></p></div>)
}

const Background1 = (props) => {
return(<div>
<img width="400px" src={background1} alt="loading..." />
</div>)
}

const Background2 = (props) => {
return(<div><img width="400px" src={background2} alt="loading..." /></div>)
}

const App = () => {

const [value, setValue] = useState(1)
let bodytemp = 36;

while (bodytemp > 25)
{
var randNum = Math.floor(Math.random()*5+1);
console.log("random-luku: ", randNum)

if (value === 1 && (randNum === 1 || randNum === 2 || randNum === 3)) {
console.log("ei tärppejä")
bodytemp--;
randNum = Math.floor(Math.random()*5+1);
console.log("uusi random-luku, ei tärppejä: ", randNum)
return(<div>
<Question setValue={setValue}/>
{console.log("value: ", value, "setValue: ", setValue)}
Ei tärppejä. Ruumiinlämpösi on {bodytemp} C. 
<Background1 />
<img width="400px" src={logo} alt="loading..." />
<Background2 />
</div>
)
} else if (value === 1 && (randNum === 4 || randNum === 5)) {
console.log("sait kalan")
bodytemp--;
randNum = Math.floor(Math.random()*5+1);
console.log("uusi random-luku, sai kalan: ", randNum)
return(<div>
<Question setValue={setValue} />
Sait kalan! Ruumiinlämpösi on {bodytemp} C.
<Background1 />
<img width="400px" src={logo2} alt="loading..." />
<Background2 />
</div>)
} else if (value === 0) {
return(<div>Mikä hätänä?</div>)
}
}
}

export default App;
