import {useState} from 'react';
import {Alert, Button} from 'react-bootstrap';

const AlertBanner = () => {
    const [show, setShow] = useState(true);
  
    if (show) {
        return (
        <Alert variant="light" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Welcome to my Gif Search App!</Alert.Heading>
            <p>You can click on a gif to copy it!!!!</p>
        </Alert>
        );
    }
    return <Button variant='light' onClick={() => setShow(true)}>Show Banner</Button>;

  }

  export default AlertBanner