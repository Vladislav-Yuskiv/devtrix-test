import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Input, FormGroup ,Label, Button } from 'reactstrap'

function ThirdTab({ photos, setPhotos, nextButton, prevButton }) {
    
    const onChangeInput = (e) => {
        setPhotos([...photos , e.target.value])
    }

    return (
        <Form>
    
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
            
             <Button color="primary" onClick={nextButton}>
                 Next
            </Button>
          </Form>
 
    )
}
export default ThirdTab;