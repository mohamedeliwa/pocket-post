import {
  Container,
  Card,
  InputGroup,
  FormControl,
  Button,
  Row,
  Col
} from "react-bootstrap";

const SidebarWidgets = (props) => {
  return (
    <Container>
      <Card className=" my-4">
        <Card.Header className="card-header">Search</Card.Header>
        <Card.Body className="card-body">
          <InputGroup className="input-group">
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup>
              <Button
                variant="outline-secondary"
                style={{ width: "100%", marginTop: "0.3rem" }}
              >
                Search!
              </Button>
            </InputGroup>
          </InputGroup>
        </Card.Body>
      </Card>

      <Card className=" my-4">
        <Card.Header>Categories</Card.Header>
        <Card.Body>
          <Row>
            <Col lg={6}>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">HTML</a>
                </li>
                <li>
                  <a href="#">Freebies</a>
                </li>
              </ul>
            </Col>
            <Col lg={6}>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#">JavaScript</a>
                </li>
                <li>
                  <a href="#">CSS</a>
                </li>
                <li>
                  <a href="#">Tutorials</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="my-4">
        <Card.Header className="card-header">Side Widget</Card.Header>
        <Card.Body className="card-body">
          You can put anything you want inside of these side widgets. They are
          easy to use, and feature the new Bootstrap 4 card containers!
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SidebarWidgets;
