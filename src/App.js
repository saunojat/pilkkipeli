import React, {useState} from 'react'

const OnJaEi = (props) => {
  return (<div><p className="note">Onko Pekka isompi kuin Pätkä?
  <button onClick={() => props.setValue(1)}>On</button>
  <button onClick={() => props.setValue(0)}>Ei</button></p></div>)
}

const Alkuun = (props) => {
  return (<div><p className="note"><button onClick={'/'}>Alkuun</button></p></div>)
}

const App = () => {

  const [value, setValue] = useState(0)
  

if (value === 1) {
  return(<div>
    <OnJaEi setValue={setValue}/>
    Pekka on isompi kuin Pätkä. 
    <Alkuun />
    </div>
  )
} else if (value === 0) {
  return(<div>
    <OnJaEi setValue={setValue} />
    Pätkä on isompi kuin Pekka.
    <Alkuun />
  </div>)
}
}

export default App;
