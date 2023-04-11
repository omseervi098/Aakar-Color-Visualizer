import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="transparent box-shadow" expand="lg">
      <Container>
        <NavLink className="navbar-brand" to="/">
          AAkar
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="p-2">
            <NavLink className="nav-link m-2" aria-current="page"  to="/">
              HOME
            </NavLink>
            <NavLink className="nav-link m-2" to="/about">
              ABOUT
            </NavLink>
            <NavLink className="nav-link m-2" to="/contact">
              CONTACT US
            </NavLink>
            <NavLink className="nav-link m-2" to="/colorvisualiser">
              COLOR VISUALISER{" "}
            </NavLink>
            <NavLink className="nav-link m-2" to="/walldecor">
              WALL DECOR
            </NavLink>
            <NavLink className="nav-link m-2" to="/360view">
              360° View
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
//   return (
//     <Navbar bg="transparent" expand="lg">
//       <Container>
//         <NavLink className="navbar-brand" to="/">
//           InDesign
//         </NavLink>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
//           <Nav className="p-2">
//             <NavLink className="nav-link m-2" aria-current="page" exact to="/">
//               HOME
//             </NavLink>
//             <NavLink className="nav-link m-2" to="/about">
//               ABOUT
//             </NavLink>

//             <NavLink className="nav-link m-2" to="/contact">
//               CONTACT
//             </NavLink>

//             <NavLink className="nav-link m-2" to="/contact">
//               CONTACT US
//             </NavLink>
//             <NavLink className="nav-link m-2" to="/view">
//               360° View
//             </NavLink>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

export default NavBar;
