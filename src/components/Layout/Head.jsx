import React from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

const Header = ({ pageTitle }) => {
  return (
    <Navbar fluid className="rounded-xl bg-gray-100 border-b-5 border-violet-900 p-4 mb-5 ">
      <Navbar.Brand>
        <h1 className="py-3 text-4xl font-bold text-purple-600">{ pageTitle }</h1>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Fajie Bautista</span>
          </Dropdown.Header>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}

export default Header;