import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import Title from './components/Title'
import Media from "./components/Media";
import Explanation from "./components/Explanation"
// import Date from "./components/Date"
// import ReactPlayer from 'react-player'

export default function App() {

  let today = new Date();
  let dateEl = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate());
  console.log(dateEl)

const [newData, setNewData] = useState([])
// const [date, setDate] = useState()


useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod?date=${dateEl}&api_key=bNNrfpIwi4Fk8Jt28AUa72B4jTgBf5J8f9b6V7s2`)
  .then(res => {
    console.log(res.data)
    setNewData(res.data)
    
    return () => console.log('Cleanup');
  })
  .catch(err => console.log(err))
 }, [])


  return (
    <div className="App">
      <h1>
        Nasa Photo of the Day, {dateEl} <span role="img" aria-label='go!'>🚀</span>!
      </h1>
      <Title title={newData.title}/>
      <Media url={newData.url}/>
      {/* <Date date={newData.date}/> */}
      <Explanation explanation={newData.explanation}/>
    </div>
  );


}