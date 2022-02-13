import 'bootstrap/dist/css/bootstrap.min.css';
import {  Input, FormGroup ,Label, Button } from 'reactstrap'
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getPhotos } from '../../redux/form/form-selectors'
import formActions from '../../redux/form/form-actions'

function ThirdTab({ nextButton, prevButton }) {

  const reduxPhotos = useSelector(getPhotos)

  const [photos, setPhotos] = useState(reduxPhotos) 
 
  const dispatch = useDispatch();
    
    const onChangeInput = (e) => {
        setPhotos([...photos , e.target.value])
    }

    const onButtonNextCkick = (e) => {

      dispatch(formActions.photos(photos))

      nextButton()
    }

    return (
        <>
    
          <FormGroup>
            <Label >
                Photo 1
                 <Input
                        name="file1"
                        type="file"
                        onChange={onChangeInput}
 
                />
            </Label>
        </FormGroup>
          <FormGroup>
            <Label >
                Photo 2
                 <Input
                        name="file2"
                        type="file"
                        onChange={onChangeInput}
                        
                />
            </Label>
        </FormGroup>
          <FormGroup>
            <Label >
                Photo 3
                 <Input
                        name="file3"
                        type="file"
                        onChange={onChangeInput}
                       
                />
            </Label>
        </FormGroup>
          <FormGroup>
            <Label >
                Photo 4
                 <Input
                        name="file4"
                        type="file"
                        onChange={onChangeInput}    
                       
                />
            </Label>
        </FormGroup>
          <FormGroup>
            <Label >
                Photo 5
                 <Input
                        name="file5"
                        type="file"
                        onChange={onChangeInput}
                        
                />
            </Label>
            </FormGroup>
            
             <Button color="primary" onClick={prevButton}>
                 Prev
            </Button>
            
             <Button color="primary" onClick={onButtonNextCkick}>
                 Next
            </Button>
          </>
 
    )
}
export default ThirdTab;