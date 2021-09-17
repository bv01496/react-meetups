import React,{useState,useEffect} from 'react'
import Card from '../components/card'
import Layout from '../components/layout'
import Meetup from '../components/meetup'
import classes from "../css/allmeetups.module.css"


const Allmeetups = () => {
  const[meetupData, setMeetupData] = useState([])
  const[isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
    fetch("https://react-meetup-62145-default-rtdb.firebaseio.com/meetup.json")
    .then(resp => resp.json())
    .then(data => {
      setIsLoading(false)
      const Meetup_Data = []
      for(let item in data){
        Meetup_Data.push({id:item, ...data[item] })
      }
      setMeetupData(Meetup_Data)
    })
  },[])

  if(isLoading){
    return(
      <>
      <h1>still loading</h1>
      </>
    )
  }else{
    return (
      <Layout>
        <div className={classes.allmeetups}>
        {meetupData.map((meetup)=>{
          return <Card><Meetup key={meetup.id} id={meetup.id} title={meetup.title} image={meetup.image} address={meetup.address} discription={meetup.description}/></Card>
        })}
        </div>
      </Layout>
    )
  }
}

export default Allmeetups
