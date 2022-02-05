import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Input, FormGroup, Label , Button } from 'reactstrap'
import React from "react"


function SecondTab({ email, setEmail, phone, setPhone, nextButton, prevButton }) {
    
  const handleButtonClick = () => {

    if (phone.trim() === '') {
      return alert('Phone is requied')
    }

    nextButton()
  }

     const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);  
        break;
      case 'phone':
         setPhone(value);
        break;
  
      default:
        return;
    }

  }

    return (
        <Form>
            <FormGroup>
                <Label>
                    Email
                     <Input
                        name="email"
                        placeholder="yuskiv280478@icloud.com"
                        type="email"
                        bsSize="sm"
                        value={email}
                        onChange={handleChange}
                        />
                </Label>
               
            </FormGroup>

            <FormGroup>
                <Label>
                    Phone
                     <Input
                        bsSize="sm"
                        placeholder="+380631801020"
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={handleChange}
                    />
                </Label>
            </FormGroup>
            

            <Button color="primary" onClick={prevButton}>
                 Prev
            </Button>
            
             <Button color="primary" onClick={handleButtonClick}>
                 Next
            </Button>
            
        </Form>
    )
}
export default SecondTab;