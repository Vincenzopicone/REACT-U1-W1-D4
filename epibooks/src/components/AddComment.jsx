import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddComment() {
  return (
    <Form className='d-flex justify-content-between'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Inserisci il tuo commento" />
      </Form.Group>
      <Button variant="primary" type="submit">COMMENTA</Button>
    </Form>
  );
}

export default AddComment;