import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/UseAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar
        className="bg-info"
        //bg="light"
        variant="light"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <img
            style={{ width: "50px" }}
            src="https://i.ibb.co/X8zscn5/airplane.png"
            alt=""
          />

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
            About
            </Nav.Link>
            <Nav.Link as={Link} to="/createNewOffer">
              CreateNewOffer
            </Nav.Link>
            <Nav.Link as={Link} to="/manageOrder">
              Manage All Order
            </Nav.Link>

            {user?.email ? (
              <Nav.Link as={Link} to="/myOrder">
                MyOrder
              </Nav.Link>
            ) : (
              " "
            )}

            {user?.email ? (
              <Button onClick={logOut} variant="light">
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            <Navbar.Text>
              <a href="#login">{user.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
