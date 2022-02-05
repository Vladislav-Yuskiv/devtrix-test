import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Input, FormGroup, Label , Button } from 'reactstrap'
import React  from "react"

function FirstTab({headerText ,setHeaderText , descriptionText , setDescription , status , setStatus , nextButton}) {
    
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
  
  const handleChangeStatus = (e) => {
    if (status === 'Off') {

       setStatus('On')
    }
    else {
       setStatus('Off')
    }
   
  }

    return (
         <Form >

      <FormGroup>
          <Label >
            Header
            <Input className="mb-3" bsSize="sm" type="text" value={headerText} name="header"  onChange={handleChange}/>
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
            <Input name='status' type="checkbox" onChange={handleChangeStatus}/>
            {status}
          </Label>
      </FormGroup>
      
             <Button color="primary" onClick={nextButton}>
                 Next
             </Button>
    </Form>
    )
}
export default FirstTab;