
import './App.css'
import Box from './components/Box'
function App() {
  const divStyle = {
    display:'flex',
    flexDirection:'column',
    gap:'10px'
  }
  return (
    <div style={divStyle}>
    <Box title={'Jira softwere'} description={'Project and issue trancking.'} image={"https://media.istockphoto.com/id/2156690866/photo/unusual-sulphur-minerals-formation-with-volcanic-landscape-of-danakil-depression-desert-afar.jpg?s=1024x1024&w=is&k=20&c=-nVR4nXSnnYdYeKM22FGiJ5d6ubETBS_7la_Nk_B1JY="}/>  
    
    <Box title={'Jira service management'} description={'High velocity service delivery.'} image={"https://images.pexels.com/photos/3974036/pexels-photo-3974036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>

    <Box title={'Jira product descovery'} description={'Capture and priotize ideas.'} image={"https://images.pexels.com/photos/2907578/pexels-photo-2907578.jpeg?auto=compress&cs=tinysrgb&w=600"}/>  

    <Box title={'Guard'} description={'Enhance cloud security.'} image={"https://images.pexels.com/photos/15045798/pexels-photo-15045798/free-photo-of-man-in-snowy-scenery.jpeg?auto=compress&cs=tinysrgb&w=600"}/>  


    </div>
  )
}

export default App
