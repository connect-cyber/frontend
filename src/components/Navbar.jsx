import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, LogOut, MenuIcon, X } from "lucide-react";
import { assest } from "@/assets/assets";
import useUserStore from "@/store/useUserStore";
import { Button } from "./ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "./ui/menubar";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Dropdown from "./Dropdown";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useUserStore();
  return (
    <nav className="h-[70px] lg:h-[80px] mb-[80px] bg-[#00274D] w-full flex items-center rounded-bl-[18px] rounded-br-[18px] lg:rounded-bl-[25px] lg:rounded-br-[25px] shadow-[0_6px_15px_rgba(0,0,0,0.5)] fixed left-0 right-0 z-50">
      <div className="max-w-[1500px] w-full mx-auto px-1 flex justify-between items-center">
        <div className="bg-transparent">
          <img
            src={assest.logo}
            className="h-[55px] w-[55px] lg:h-[70px] lg:w-[70px]"
          />
        </div>

        <div className="text-white text-[17px] md:text-[15px] hidden md:flex md:justify-center md:items-center lg:text-xl lg:gap-[10px] ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full px-2 py-1 rounded-full backdrop-blur-md transition duration-500 ${
                isActive ? "bg-white/15" : ""
              }`
            }
          >
            Home
          </NavLink>

          {user?.role === "SUPERADMIN" || user?.role === "ADMIN" ? (
            <Menubar className="p-0 m-0 rounded-full !border-none cursor-pointer ">
              <MenubarMenu>
                <MenubarTrigger className="!p-0 !m-0 !bg-transparent !shadow-none !border-none hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent">
                  <Avatar className="h-10 w-10 border border-gray-300 cursor-pointer">
                    <AvatarFallback className="bg-black text-white font-bold h-full w-full">
                      D
                    </AvatarFallback>
                  </Avatar>
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem className="text-xl cursor-pointer">
                    <Link to="/admin/createblog">Create Blog</Link>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem className="text-xl cursor-pointer">
                    <Link to="/admin/allblogs">All Blogs</Link>
                  </MenubarItem>
                  <MenubarSeparator />
                  {user.role === "SUPERADMIN" ? (
                    <MenubarItem className="text-xl cursor-pointer">
                      <Link to="/admin/alluser">All Users</Link>
                    </MenubarItem>
                  ) : (
                    ""
                  )}

                  <MenubarSeparator />
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          ) : (
            ""
          )}

          <Menubar className="p-0 m-0 rounded-full !border-none cursor-pointer bg-transparent">
            <MenubarMenu>
              <MenubarTrigger className="!m-0 !shadow-none !border-none hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent data-[state=open]:!text-white text-white text-[17px] md:text-[15px] lg:text-xl flex gap-1 justify-center items-center cursor-pointer data-[state=closed]:!text-white">
                Higher Education <ChevronDown />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem className="text-xl cursor-pointer">
                  <NavLink
                    to="/transforms-local-digital-outreach"
                    className={({ isActive }) =>
                      `relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full px-2 py-1 rounded-full backdrop-blur-md transition duration-500 text-[15px] md:text-[17px] lg:text-xl ${
                        isActive ? "bg-white/15" : ""
                      }`
                    }
                  >
                    Enrollments Service
                  </NavLink>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem className="text-xl cursor-pointer">
                  <NavLink
                    //  onClick={() => setOpen(false)}
                    to="/training-and-placements"
                    className={({ isActive }) =>
                      `relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full px-2 py-1 rounded-full backdrop-blur-md transition duration-500 text-[15px] md:text-[17px] lg:text-xl ${
                        isActive ? "bg-white/15" : ""
                      }`
                    }
                  >
                    Training & Placements
                  </NavLink>
                </MenubarItem>
                <MenubarSeparator />
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <Menubar className="p-0 m-0 rounded-full !border-none cursor-pointer bg-transparent">
            <MenubarMenu>
              <MenubarTrigger className="!m-0 !shadow-none !border-none hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent data-[state=open]:!text-white text-white text-[17px] md:text-[15px] lg:text-xl flex gap-1 justify-center items-center cursor-pointer data-[state=closed]:!text-white">
                Schools ( K-12 ) <ChevronDown />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem className="text-xl cursor-pointer">
                  <NavLink
                    to="/mindChamps"
                    className={({ isActive }) =>
                      `relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full px-2 py-1 rounded-full backdrop-blur-md transition duration-500 text-[15px] md:text-[17px] lg:text-xl ${
                        isActive ? "bg-white/15" : ""
                      }`
                    }
                  >
                    MindChamps
                  </NavLink>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem className="text-xl cursor-pointer">
                  <NavLink
                    to="/financial-literacy"
                    className={({ isActive }) =>
                      `relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full px-2 py-1 rounded-full backdrop-blur-md transition duration-500 text-[15px] md:text-[17px] lg:text-xl ${
                        isActive ? "bg-white/15" : ""
                      }`
                    }
                  >
                    Financial Literacy
                  </NavLink>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarSeparator />
                <MenubarItem className="text-xl cursor-pointer">
                  <NavLink
                    to="/public-speaking"
                    className={({ isActive }) =>
                      `relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full px-2 py-1 rounded-full backdrop-blur-md transition duration-500 text-[15px] md:text-[17px] lg:text-xl ${
                        isActive ? "bg-white/15" : ""
                      }`
                    }
                  >
                    Public Speaking
                  </NavLink>
                </MenubarItem>
                <MenubarSeparator />
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <NavLink
            to="https://preppminds.mindcruize.com/"
            className={({ isActive }) =>
              `relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full px-2 py-1 rounded-full backdrop-blur-md transition duration-500 ${
                isActive ? "bg-white/15" : ""
              }`
            }
          >
            PreppMinds
          </NavLink>

          <NavLink
            to="/latest-blogs"
            className={({ isActive }) =>
              `relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full px-2 py-1 rounded-full backdrop-blur-md transition duration-500 ${
                isActive ? "bg-white/15" : ""
              }`
            }
          >
            Blogs
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full px-2 py-1 rounded-full backdrop-blur-md transition duration-500 ${
                isActive ? "bg-white/15" : ""
              }`
            }
          >
            Contact
          </NavLink>

          {user ? (
            <Button
              onClick={() => {
                logout();
                navigate("/");
              }}
              className="bg-transparent cursor-pointer"
            >
              <LogOut size={50} strokeWidth={2.5} />
            </Button>
          ) : (
            ""
          )}
        </div>

        {/* Mobile View Navbar */}
        <Sheet className="relative overflow-hidden">
          <SheetTrigger className="block md:hidden">
            <MenuIcon className="cursor-pointer" color="white" size={28} />
          </SheetTrigger>
          <SheetContent className="bg-[#00274D]">
            <SheetHeader>
              <SheetTitle>
                <h1 className="text-2xl mt-3 text-white font-semibold">
                  MindCruize
                </h1>
              </SheetTitle>

              <SheetDescription className="mt-[35px] flex flex-col gap-[10px]">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-[16px] text-white font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full px-4 py-2 rounded-full backdrop-blur-md transition duration-500 ${
                      isActive ? "bg-white/15" : ""
                    }`
                  }
                >
                  Home
                </NavLink>

                <Dropdown
                  title={"Higher Education"}
                  items={[
                    {
                      label: "Enrollments Service",
                      link: "/transforms-local-digital-outreach",
                    },
                    {
                      label: "Training & Placements",
                      link: "/training-and-placements",
                    },
                  ]}
                />

                <Dropdown
                  title={"Schools ( K-12 )"}
                  items={[
                    { label: "MindChamps", link: "/mindChamps" },
                    {
                      label: "Financial Literacy",
                      link: "/financial-literacy",
                    },
                    {
                      label: "Public Speaking",
                      link: "/public-speaking",
                    },
                  ]}
                />

                <NavLink
                  to="https://preppminds.mindcruize.com/"
                  className={({ isActive }) =>
                    `relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full px-2 py-1 rounded-full backdrop-blur-md transition duration-500 text-white font-semibold ${
                      isActive ? "bg-white/15" : ""
                    }`
                  }
                >
                  PreppMinds
                </NavLink>

                <NavLink
                  to="/latest-blogs"
                  className={({ isActive }) =>
                    `text-[16px] text-white font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full px-4 py-2 rounded-full backdrop-blur-md transition duration-500 ${
                      isActive ? "bg-white/15" : ""
                    }`
                  }
                >
                  Blogs
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `text-[16px] text-white font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full px-4 py-2 rounded-full backdrop-blur-md transition duration-500 ${
                      isActive ? "bg-white/15" : ""
                    }`
                  }
                >
                  Contact
                </NavLink>

                 {user?.role === "SUPERADMIN" || user?.role === "ADMIN" ? (
                  <Dropdown
                    title={"Dashboard"}
                    items={[
                      {
                        label: "Create Blog",
                        link: "/admin/createblog",
                      },
                      {
                        label: "All Blogs",
                        link: "/admin/allblogs",
                      },
                      {
                        label: "All Users",
                        link: "/admin/alluser",
                      },
                    ]}
                  />
                ) : (
                  ""
                )}

                {user ? (
                  <Button
                    onClick={() => {
                      logout();
                      navigate("/");
                    }}
                  >
                    Logout
                  </Button>
                ) : (
                  ""
                )}
              </SheetDescription>
            </SheetHeader>
            <SheetClose asChild className="">
              <button className="absolute top-10 right-5">
                <X size={30} className="text-white font-bold cursor-pointer" />
              </button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;
