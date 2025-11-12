import './App.css';
import { useState,useEffect} from 'react';

function App() {
  let colors=['red','black','green']
     let [changeColor, setChangeColor]=useState(colors)
     let [image,setImage]=useState(null);
     let [video,setVideo]=useState(null);
     let [audio,setAudio]=useState(null);
// change color
    let file=new FileReader();

 function handleColor(data){
colors.forEach((color)=>{
  if(color==data)
    setChangeColor(color);
})
 }
 // uplodImage
 const uplodImage=(event)=>{
   
  
    file.readAsDataURL(event.target.files[0]);

    file.onload=function(){
       setImage(file.result);
    }

}
// uplodVideo
const uplodVideo=(event)=>{
    file.readAsDataURL(event.target.files[0]);
    file.onload=function(){

       setVideo(file.result);
    }
}
// uplodAudio
const uplodAudio=(event)=>{
  file.readAsDataURL(event.target.files[0]);
  file.onload=function(){
setAudio(file.result);
  }
}
let showImage=image==null?'none':'block';
let showVideo=video==null?'none':'block';
let showAudio=audio==null?'none':'block'

  return (
 <div div className='main' style={{background:`${changeColor}`}}>
     <div className='uploding'>
     <input onChange={uplodImage} id='img' type='file' accept='image/*' style={{display:'none'}}/>
          <label className='button' htmlFor='img' >
            Uplod Image
            </label> 
            

             <input onChange={uplodVideo}  id='video' type='file' accept='video/*' style={{display:'none'}}/>
          <label className='button' htmlFor='video' >
            Uplod Video
            </label> 
           
             <input onChange={uplodAudio} id='audio' type='file' accept='audio/*' style={{display:'none'}}/>
          <label className='button' htmlFor='audio' >
            Uplod Audio
            </label> 

   
     

     </div>
<div className='changeColor'>
  <button onClick={()=>{
handleColor('red')

  }}className='button'>Red</button>
  <button    onClick={()=>{
handleColor('black')
  }} className='button'>Black</button>
  <button  onClick={()=>{
handleColor('green')
  }}  className='button'>green</button>
  </div>
  <div className='media'>
                  <img style={{display:`${showImage}`}} src={image} alt="not found"/>
              <video  style={{display:`${showVideo}`}} src={video} controls>
              </video>
              <audio style={{display:`${showAudio}`}} src={audio} controls >
              </audio>

  </div>
</div> 
 );
}

export default App;
