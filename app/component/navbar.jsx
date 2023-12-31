"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useTodo } from "./TodoContext";
import { useSession } from "next-auth/react";

function Navbar() {
  // const { isLogin } = useTodo();
  const { data: session, status } = useSession();
  // const [isLogin, setIsLogin] = useState(status);

  // if (status === "authenticated") {
  //   setIsLogin(true);
  // }

  return (
    <div className="navbar bg-base-300 ">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li>
              <Link href={"/"}>home</Link>
            </li>

            <li>
              <Link href={"about"}>about</Link>
            </li>
            {/* {!isLogin && (
              <li>
                <Link href={"/api/auth/signin"}>login</Link>
              </li>
            )} */}
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost normal-case text-xl">
          todo
        </Link>
      </div>
      <div className="navbar-center hidden   lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>home</Link>
          </li>

          <li>
            <Link href={"about"}>about</Link>
          </li>
          {status !== "authenticated" && (
            <li>
              <Link href={"/api/auth/signin"}>login</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {status === "authenticated" && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/mypic.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={"/api/auth/signout"}>Logout</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
