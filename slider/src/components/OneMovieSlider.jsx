import './OneMovieSlider.css'
import data from '../data'
import {useState} from 'react'
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";


const OneMovieSlider = () =>{

   const [index, setIndex] = useState(0)
   const {image, title,description} = data[index]

   const checkMovieNumber = (movieIndex) =>{
      if(movieIndex<0){
         return data.length-1
      } else if(movieIndex>data.length-1){
         return 0
      } else{
         return movieIndex
      }
   }

   const nextMovie = () =>{
      setIndex ((index) => {
         const newIndex =index+1
         return checkMovieNumber(newIndex)
      })
   }

   const previousMovie = () => {
      setIndex ((index) =>{
         const newIndex2 = index-1
         return checkMovieNumber(newIndex2)
      })
   }


   return <div className='oneMovie'>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="btns">
         <button onClick={previousMovie}><FaCircleArrowLeft/></button>
         <button onClick={nextMovie}><FaCircleArrowRight/></button>
      </div>
   </div>
}

export default OneMovieSlider