import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Collapse from 'react-bootstrap/Collapse';
import logo from "../img/logo.png";
import items from '../data/menuLinks';
import { Fragment, useState } from "react";

const menuLinks = items;
const arrCollapse = menuLinks.map(item => item.navs.map(nav => nav.index)).flat().filter(item => item !== undefined);

function Dashboard() {

  const [open, setOpen] = useState(arrCollapse.map(() => false));
  const [toggled, setToggled] = useState(false);

  const openHandleChange = (index) => {
    setOpen(open.map((item, idx) => (idx === index && item === false)? true : false));
  }

  const navsLinks = menuLinks.map((menu) => {
    return (
      <Fragment key={menu.headMenu}>
        <div className="sidenav-menu-head">{menu.headMenu}</div>
        {menu.navs.map(nav => {
          return (
            <Fragment key={(nav.index !== undefined)? nav.index : nav.title}>
              <Nav.Link href={nav.to} className={(nav.links.length > 0 ) && (!open.at(nav.index) && "collapsed") } onClick={() => (nav.index !== undefined)? openHandleChange(nav.index) : {}}>
                <div className="nav-link-icon">{nav.icon}</div>
                {nav.title}
                {(nav.links.length > 0 ) && <div className="sidenav-collapse-arrow"><i className="fa-regular fa-angle-down"></i></div>}
              </Nav.Link>
              {(nav.links.length > 0) && 
              <Collapse in={open.at(nav.index)}><nav className="sidenav-menu-nested nav">
                { nav.links.map(link => <Nav.Link key={link.to} href={link.to}>{link.action}</Nav.Link> )}
              </nav></Collapse>}
            </Fragment>
          )
        })}
      </Fragment>
    )
  })

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" className="px-1 ps-3 pe-0">
          <img
            alt="logo"
            src={logo}
            className="d-inline-block align-top img-fluid"
          />
        </Navbar.Brand>

        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          href="#!"
          onClick={() => setToggled(!toggled)}
        >
          <i className="fa-regular fa-bars"></i>
        </button>

        <Nav className="ms-auto me-3 me-lg-4">
          <NavDropdown
            title={<i className="fa-solid fa-user"></i>}
            align="end"
          >
            <NavDropdown.Item>Perfil</NavDropdown.Item>
            <NavDropdown.Item>Configuración</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Cerrar Sesión</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>

      <div className="layoutsidenav d-flex">
        <div className={(!toggled)? "layoutsidenav-nav" : "layoutsidenav-nav sidenav-toggled"}>
          <nav className="sidenav">
            <div className="sidenav-menu">
              <Nav>

                {navsLinks}

              </Nav>

            </div>
            <div className="sidenav-footer">
              <div className="small pb-2">Logged in as:</div>
              <div className="d-flex sidenav-footer-info">
                <div className="sidenav-footer-img">
                  <img src="https://api.dicebear.com/5.x/thumbs/svg?seed=1" alt="avatar" className="rounded-circle" />
                </div>
                <div className="sidenav-footer-data ps-2">
                  <p>Anderson Leonardo Orellana Espiritu</p>
                  <span>&#60;Administrador&#62;</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className={(!toggled)? "layoutsidenav-content" : "layoutsidenav-content sidenav-toggled"}>
          Alv
        </div>
      </div>

    </>
  );
}

export default Dashboard;