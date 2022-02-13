import 'bootstrap/dist/css/bootstrap.min.css';
import {  Input, FormGroup, Label , Button } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux';
import { getHeader , getDescription , getStatus } from '../../redux/form/form-selectors'
import formActions from '../../redux/form/form-actions'
import React , { useEffect, useState } from "react"

function FirstTab({ nextButton}) {


  
  const header = useSelector(getHeader)
  const description = useSelector(getDescription)
  const reduxStatus = useSelector(getStatus)

  const [headerText, setHeaderText] = useState(header)
  const [descriptionText, setDescription] = useState(description)
  const [status, setStatus] = useState(reduxStatus)
  const [checked , setChecked] = useState(false)

  useEffect(()=>{

    if( status=== 'On'){
      setChecked(true)
    }
 
  }, [status])


  const dispatch = useDispatch();
    
   const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'header':
        setHeaderText(value);  
        break;
      case 'description':
         setDescription(value);
        
        break;
  
      default:
        return;
    }

  }

  const handleButtonClick = () => {

    if (headerText.trim() === '') {
      return alert('Header is requied')
    }

    dispatch(formActions.headerText(headerText))
    dispatch(formActions.descriptionText(descriptionText))
    dispatch(formActions.status(status))

    nextButton()
  }
  
  const handleChangeStatus = (e) => {
    if (status === 'Off') {

       setStatus('On')
       setChecked(true)
    }
    else {
       setStatus('Off')
       setChecked(false)
    }
   
  }

    return (
         <>

      <FormGroup>
          <Label >
            Header
            <Input className="mb-3" bsSize="sm" type="text" required value={headerText} name="header"  onChange={handleChange}/>
          </Label>
      </FormGroup>
        
      <FormGroup>
          <Label>
                Description
                  <Input  className="mb-3" bsSize="sm"
                          name="description"
                          type="textarea"
                          value={descriptionText}
                          onChange={handleChange}
                  />
          </Label>
      </FormGroup>

      <FormGroup check inline >
          <Label check>
            <Input name='status' type="checkbox" checked={checked} onChange={handleChangeStatus}/>
            {status}
          </Label>
      </FormGroup>
      
             <Button color="primary" onClick={handleButtonClick}>
                 Next
             </Button>
    </>
    )
}
export default FirstTab;