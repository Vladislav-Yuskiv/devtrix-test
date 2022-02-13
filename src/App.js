
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import FirstTab from './Components/FirstTab'
import { Form , Button } from 'reactstrap'
import SecondTab from './Components/SecondTab'
import ThirdTab from './Components/ThirdTab'
import ForthTab from './Components/ForthTab'
import {  useDispatch } from 'react-redux';
import formActions from './redux/form/form-actions'
import store from './redux/store';


function App() {

  const [curretTab, setCurrentTab] = useState(1)

  const dispatch = useDispatch();

  const nextTab = () => {
     setCurrentTab(curretTab + 1)
  }

  const prevTab = () => {
    setCurrentTab(curretTab - 1)
  }

  const submitButton = (e) => {
    e.preventDefault()

    const res = store.getState() 

    console.log('FormData', res.FormData);

    reset()
    
  }

  const reset = () => {

    dispatch(formActions.headerText(''))
    dispatch(formActions.descriptionText(''))
    dispatch(formActions.status('Off'))

    dispatch(formActions.email(' '))
    dispatch(formActions.phone(''))

    dispatch(formActions.photos([]))

    dispatch(formActions.paidServices([]))

    setCurrentTab(1)

  };

  return(
    <Form onSubmit={submitButton}>
      { curretTab === 1 &&  <FirstTab  nextButton={nextTab} /> }
      {curretTab === 2 &&  <SecondTab nextButton={nextTab}  prevButton={prevTab} />}
      { curretTab === 3 &&  <ThirdTab  nextButton={nextTab} prevButton={prevTab}/> }
      { curretTab === 4 && <ForthTab prevButton={prevTab} /> }
      { curretTab === 4 && <Button color="info">Save</Button> }

    </Form>
  )
  
}

export default App;
