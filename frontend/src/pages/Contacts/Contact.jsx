import { Card, Container } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="my-5 d-flex justify-content-center">
      <Card style={{ width: '24rem' }} className="p-4 text-center">
        <h5>Contact Us</h5>
        <p><strong>Address:</strong> 123 React Street, UI City, CA 90210</p>
        <p><strong>Email:</strong> hello@prodmanage.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
      </Card>
    </Container>
  );
}

export default Contact;
