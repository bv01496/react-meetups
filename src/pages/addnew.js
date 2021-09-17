import React,{useRef} from 'react'
import Card from '../components/card'
import Layout from '../components/layout'
import classes from "../css/addnew.module.css"
import {useHistory} from "react-router-dom"
const Addnew = () => {
  const inputTitleRef = useRef()
  const inputImageRef = useRef()
  const inputAddressRef = useRef()
  const inputDiscriptionRef = useRef()

  const history = useHistory()
  const handleSubmit=(e)=>{
    e.preventDefault()
    const dataEntred ={
      title : inputTitleRef.current.value,
      image : inputImageRef.current.value,
      address : inputAddressRef.current.value,
      description : inputDiscriptionRef.current.value
    }
    fetch("https://react-meetup-62145-default-rtdb.firebaseio.com/meetup.json",
    {
      method: "POST",
      body : JSON.stringify(dataEntred),
      headers : {
        "Content-Type": "application/json"
      }
    }
    ).then(
      history.replace("/")
    )
  }
  return (
    <Layout>
    <div className={classes.addnewform}>  
    <Card> 
      <h1>Add New MeetUps </h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.input}>
          <label htmlFor="title">title </label>
          <input ref={inputTitleRef} required type="text"placeholder="enter title" type="text" id="title" />
        </div>
        <div className={classes.input}>
        <label htmlFor="image">image </label>
        <input ref={inputImageRef} required type="url" placeholder="enter image link" type="text" id="image" />
        </div>
        <div className={classes.input}>
          <label htmlFor="address">address </label>
          <input ref={inputAddressRef} required type="text" placeholder="enter address" id="address"/>
        </div>
        <div className={classes.input}>
          <label htmlFor="description">description </label>
          <textarea ref={inputDiscriptionRef} required placeholder="enter description" id="description"></textarea>
        </div>
        <button className={classes.submit}>submit</button>
      </form>
      </Card> 
      </div>  
    </Layout>
  )
}

export default Addnew
