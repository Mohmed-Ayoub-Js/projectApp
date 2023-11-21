import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { NavbarMenuToggle } from '@nextui-org/react';
import { NavbarMenu } from '@nextui-org/react';
import { NavbarMenuItem } from '@nextui-org/react';
import { NavLink } from 'react-router-dom';
const Appbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
       {
        href:'/',
        link:"المنزل"
       },
       {
        href:'/about',
        link:"عن التطبيق"
       },
      ];

      const handelClick = () => {

      }
  return (
    <div>
 <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">تذكير النفس</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
        </NavbarItem>
        <NavbarItem isActive>

        </NavbarItem>
        <NavbarItem>

        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
        </NavbarItem>
        <NavbarItem>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className='p-5'>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NavLink
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              to={item.href}

            >
              {item.link}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    
    </div>
  )
}

export default Appbar