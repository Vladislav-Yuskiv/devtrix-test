import 'bootstrap/dist/css/bootstrap.min.css';
import {  Input, FormGroup, Label, Button } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux';
import { getServices } from '../../redux/form/form-selectors'
import formActions from '../../redux/form/form-actions'
import React, { useEffect, useState } from "react";

function ForthTab({ prevButton  }) {

   const  services = [
       {id: 1 , name: "First Paid Service"},
       {id: 2 , name: "Second Paid Service" },
       {id: 3 , name: "Third Paid Service" },
       {id: 4 , name: "Forth Paid Service" },
       {id: 5 , name: "Fifth Paid Service" }
   ]



    const reduxServices = useSelector(getServices)

    const [paidServices , setServices] = useState(reduxServices)

    const dispatch = useDispatch();

    // const onlyUnique = (value, index, self) => { 
    //     return self.indexOf(value) === index;
    // }

    useEffect(()=>{
        paidServices.map(service => {
    
          const input =  document.querySelector(`input[name="${service}"`) 
          input.setAttribute('checked', true)
    
        })
      } , [])

    const onCheckInput =  (e) => {

    setServices([...paidServices, e.currentTarget.name])

    //const selectServises = paidServices.filter(onlyUnique)
    
    dispatch(formActions.paidServices(paidServices))
  }



    return (
        <>
        {services.map((service ) => {

            return (    <FormGroup key={service.id}>
                            <Label>
                                <Input type="checkbox" onChange={onCheckInput}  name={service.name} />
                                {service.name}
                            </Label>
                        </FormGroup>
            )
        })}
           

              <Button color="primary" onClick={prevButton}>
                 Prev
              </Button>
    
                
        </>
    )
}
export default ForthTab;