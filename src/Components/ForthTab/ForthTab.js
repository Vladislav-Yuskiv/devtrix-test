import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Input, FormGroup, Label, Button } from 'reactstrap'


function ForthTab({ prevButton, paidServices, setServices, saveButton }) {


    const onCheckInput = (e) => {
   
        setServices([...paidServices, e.currentTarget.name])
        
  }

    return (
        <Form>
           
            <FormGroup>
                <Label>
                    <Input type="checkbox" onChange={onCheckInput} name=" First Paid Service " />
                    First Paid Service
                </Label>
            </FormGroup>

             <FormGroup>
                <Label>
                    <Input type="checkbox"  onChange={onCheckInput} name="Second Paid Service "/>
                    Second Paid Service
                </Label>
            </FormGroup>

             <FormGroup>
                <Label>
                    <Input type="checkbox"   onChange={onCheckInput}  name="Third Paid Service"/>
                    Third Paid Service
                </Label>
            </FormGroup>

             <FormGroup>
                <Label>
                    <Input type="checkbox"   onChange={onCheckInput}  name=" Forth Paid Service"/>
                   Forth Paid Service
                </Label>
            </FormGroup>

             <FormGroup>
                <Label>
                    <Input type="checkbox"   onChange={onCheckInput}  name="Fifth Paid Service"/>
                    Fifth Paid Service
                </Label>
            </FormGroup>

              <Button color="primary" onClick={prevButton}>
                 Prev
              </Button>
            
              <Button color="primary" onClick={saveButton}>
                 Save
              </Button>
           
            
        </Form>
    )
}
export default ForthTab;