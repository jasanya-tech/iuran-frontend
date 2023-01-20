import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';


function NavbarUser() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const clickLogout = () =>{
    Axios.post('https://iuran.jasanya.tech/api/logout')
      .then(() => navigate('/'))
      .catch(err => console.log(err.message));
  }

  return(
    <Navbar expand="lg" color="light" light container="fluid">
      <NavbarBrand href="/warga/dashboard">Dasbor Pengguna</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/warga/rumahku">Rumahku</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Iuran</NavLink>
          </NavItem>
        </Nav>
        <Nav navbar>
          <NavItem>
            <NavLink href="#"><i className="bi bi-person-circle"></i> Nama Pengguna</NavLink>
          </NavItem>
          <NavItem>
            <Button type="button" onClick={clickLogout} className="btn btn-dark ms-3">Logout</Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default NavbarUser;