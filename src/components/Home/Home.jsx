import {React,useEffect, useState} from 'react'
import "./home.scss"
import axios from 'axios'
import {BiPlay} from "react-icons/bi"
import {AiOutlinePlus} from 'react-icons/ai'

const apikey = "ab07f40ead404355b0793315c51dec78"
const url="https://api.themoviedb.org/3/movie/"
const upcoming = "upcoming"
const popular="popular"
const top="top_rated"
const now= "now_playing"
const imgurl = "https://image.tmdb.org/t/p/original/"
const Card=({src})=>(
 
    <img className='card' src={src} alt="" />
)
const Row =({title,array})=>(
  <div className='row'>
    <h2>{title}</h2>
    <div>
       {array.map((value,index)=>(<Card key={index}src={`${imgurl}${value.poster_path}`}/>))}
    </div>
  
  </div>
)
function Home() {
  const[upcomingmovies,setUpcomingmovies]=useState([])
  const [popularmovie,setPopularmovie]=useState([])
  const [toprated,setToprated]=useState([])
  const [nowpalyign,setNowpalying]=useState([])
  useEffect(() => {
    const fetchupcoming = async ()=>{
      const {data:{results}} = await axios.get(`${url}${upcoming}?api_key=${apikey}`)
      setUpcomingmovies(results)
    }
    const fetchpopular = async ()=>{
      const {data:{results}} = await axios.get(`${url}${popular}?api_key=${apikey}`)
      setPopularmovie(results)
    }
    const fetchtoprated = async ()=>{
      const {data:{results}} = await axios.get(`${url}${top}?api_key=${apikey}`)
      setToprated(results)
    }
    const fetchnowplay = async ()=>{
      const {data:{results}} = await axios.get(`${url}${now}?api_key=${apikey}`)
      setNowpalying(results)

    }
    fetchpopular()
    fetchupcoming()
    fetchtoprated()
    fetchnowplay()
  }, [])
  
  return (
   <section>
    <div className='banner' style={{backgroundImage : upcomingmovies[0] ? `url(${`${imgurl}${upcomingmovies[0].poster_path}`})` : "black"}}>
      {
        upcomingmovies[0]&&( <h1>{upcomingmovies[0].original_title}</h1>)
      }
      {
         upcomingmovies[0]&&( <p>{upcomingmovies[0].overview}</p>)
      }
      <div>
        <button>Play <BiPlay/></button>
        <button className='list'>My list<AiOutlinePlus/></button>
      </div>
     
    </div>
    <Row title={"HANNAN DA FAVLIST"} array={upcomingmovies}/>
    <Row title={"The Popular Movies"} array={popularmovie}/>
    <Row title={"The Top-Rated Movies"} array={toprated}/>
    <Row title={"Playing Now"} array={nowpalyign}/>
   </section>
  )
}

export default Home