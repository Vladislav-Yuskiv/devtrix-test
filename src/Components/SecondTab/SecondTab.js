import 'bootstrap/dist/css/bootstrap.min.css';
import {  Input, FormGroup, Label , Button } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux';
import { getEmail , getPhone } from '../../redux/form/form-selectors'
import formActions from '../../redux/form/form-actions'
import React , {useState} from "react"


function SecondTab({  nextButton, prevButton }) {

  const reduxEmail = useSelector(getEmail)
  const reduxPhone = useSelector(getPhone)
 

  const [email, setEmail] = useState(reduxEmail)
  const [phone, setPhone] = useState(reduxPhone)


  const dispatch = useDispatch();
    
  const handleButtonClick = () => {

    if (phone.trim() === '') {
      return alert('Phone is requied')
    }

    dispatch(formActions.email(email))
    dispatch(formActions.phone(phone))

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
        <>
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
            
        </>
    )
}
export default SecondTab;