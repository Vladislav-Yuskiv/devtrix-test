
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

import FirstTab from './Components/FirstTab'
import SecondTab from './Components/SecondTab'
import ThirdTab from './Components/ThirdTab'
import ForthTab from './Components/ForthTab'

function App() {

   //FirstTab
   const [headerText, setHeaderText] = useState('')
   const [descriptionText, setDescription] = useState(' ')
   const [status, setStatus] = useState('Off')
  
  //SecondTab
   const [email, setEmail] = useState('')
   const [phone, setPhone] = useState('')
  
  //ThirdTab
  const [photos, setPhotos] = useState([])
  
  //ForthTab
  const [paidServices , setServices] = useState([])

  
  const [curretTab, setCurrentTab] = useState(1)

  const nextTab = () => {
     setCurrentTab(curretTab + 1)
  }

  const prevTab = () => {
    setCurrentTab(curretTab - 1)
  }

  const saveButton = (e) => {
    e.preventDefault()

    const FormData = {
      header: headerText,
      description: descriptionText,
      status,
      email,
      phone,
      photos,
      paidServices 
    }

    console.log('FormData', FormData);
    
    reset()
  }

  const reset = () => {
    setHeaderText('')
    setDescription('')
    setStatus('Off')
    setEmail('')
    setPhone('')
    setPhotos([])
    setServices([])
    setCurrentTab(1)

  };

   switch (curretTab) {
      case 1 :
       return <FirstTab headerText={headerText}
                        setHeaderText={setHeaderText}
                        descriptionText={descriptionText}
                        setDescription={setDescription}
                        status={status}
                        setStatus={setStatus}
                        nextButton={nextTab} />
       
      case 2 :
       return <SecondTab
                        email={email}
                        setEmail={setEmail}
                        phone={phone}
                        setPhone={setPhone}
                        nextButton={nextTab}
                        prevButton={prevTab} />
      
      case 3 :
       return <ThirdTab
                        photos={photos}
                        setPhotos={setPhotos}
                        nextButton={nextTab}
                        prevButton={prevTab}/>
                  
      case 4 :
       return <ForthTab
                      prevButton={prevTab}
                      paidServices={paidServices}
                      setServices={setServices}
                      saveButton={saveButton}
                              />
      default:
        return;
    }

}

export default App;
