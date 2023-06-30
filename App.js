import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import "./component/style.css";
import  Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

function App(){
  return(
    <main>
     <div className="bg">
      
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>

      
    </Navbar>
    </div><div className="orange">
    <div class="container d-flex justify-content-around  colo">
     <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Easy To Customize</Card.Title>
        <Card.Text>
        All in all, iMessage is definitely the best messaging app on the market, from its clean interface to its safe and secure messaging and integration throughout Apple products making it an essential and the only messaging app you'll ever need.
        </Card.Text>
      
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Awesome Design</Card.Title>
     
        
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
     <Card.Body>
       <Card.Title>Easy To Use</Card.Title>
       <Card.Text>
       the word "Edited" appears under the message. You can edit a message up to five times within 15 minutes after you send it. After you edit a message, anyone can tap the word "Edited" to see the edit history.
       </Card.Text>
     
     </Card.Body>
   </Card>
   </div>
   </div>
   
   <Carousel><div className="orange">
    <h1>About Iphone App</h1>
      <Carousel.Item>
        <img
          className="d-block w-100"
           src="images.jpg"
          alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> 
        </Carousel.Caption>
      </Carousel.Item>
    
    <img
          className="d-block w-100"
          id="po"
          src= "images.jpg"
          alt="Third fuck slide"
          />
          </div>
    </Carousel>
  
    < div className="orange">
    <div className="colo">

      <h1>Best Feature</h1>

      <div class="container d-flex justify-content-around" colo>
     <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Notification viewing</Card.Title>
        <Card.Text>
        A14 Bionic chip, Super Retina XDR displays, Dolby Vision HDR video recording, water resistance up to 6 meters for 30 minutes and 5G mobile data chipsets..
        </Card.Text>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Creative Design</Card.Title>
        <Card.Text>
        Both the base and mini have a Super Retina XDR display and the same two-camera setup. They both have dual 12MP lenses with wide and ultra-wide capabilities. There is a 2x optical and 5x digital zoom on the dual camera system.
        </Card.Text>
        
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
     <Card.Body>
       <Card.Title>Clean Cache</Card.Title>
       <Card.Text>
       FaceTime won by a landslide with a whopping 52.17% of respondents who chose it as their favorite iPhone feature. AirPlay comes in second with 17.23%, followed by battery health check with 12.40%. Offloading apps was the second least-popular option at 9.82%, and lastly, drag and drop came in at 8.37
       </Card.Text>
     
     </Card.Body>
   </Card></div>
   <div class="container d-flex justify-content-around">
     <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Full Free Vedio Call</Card.Title>
        <Card.Text>
        All in all, iMessage is definitely the best messaging app on the market, from its clean interface to its safe and secure messaging and integration throughout Apple products making it an essential and the only messaging app you'll ever need
        </Card.Text>
       
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Great Support</Card.Title>
        <Card.Text>
       
        </Card.Text>
        
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
     <Card.Body>
       <Card.Title>Unlimated Feature</Card.Title>
       <Card.Text>
       FaceTime won by a landslide with a whopping 52.17% of respondents who chose it as their favorite iPhone feature. AirPlay comes in second with 17.23%, followed by battery health check with 12.40%. Offloading apps was the second least-popular option at 9.82%, and lastly, drag and drop came in at 8.37.
       </Card.Text>
    
     </Card.Body>
   </Card></div>
    
      </div>
      <div>
        <h1>Lovely Team Members</h1>
        <div class="container d-flex justify-content-around   colo"  >
     <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src="aya.jpg" />
     
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src="aya.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        All in all, iMessage is definitely the best messaging app on the market, from its clean interface to its safe and secure messaging and integration throughout Apple products making it an essential and the only messaging app you'll ever need
        </Card.Text>
  
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src="aya.jpg" />
     <Card.Body>
       <Card.Title>Card Title</Card.Title>
       <Card.Text>
         Some quick example text to build on the card title and make up the
         bulk of the card's content.
       </Card.Text>
  
       </Card.Body>
  
   </Card>
   <Card style={{ width: '18rem' }}>
   <Card.Img src="aya.jpg" />
   </Card>
   </div>
 
   
   </div>
    
      </div>

      <div className="orange">
        <h1>Contact US</h1>
        <Form>
      <Form.Group className="mb-3  colo" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 colo" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3 colo" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
     
    </Form> <img src="images.jpg" alt="p" />
        </div>
      

    
  
    </main>

  );
}
export default App;
