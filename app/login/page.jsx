"use client";
import React, { useState } from "react";
import { useTodo } from "../component/TodoContext";
import { redirect } from "next/navigation";

function Login() {
  const { isLogin, setIsLogin } = useTodo();
  const [signIn, setSignIn] = useState({
    username: "",
    password: "",
  });
  const [input, setInput] = useState({
    userInput: "",
    passInput: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setSignIn({ username: input.userInput, password: input.passInput });
  }
  function handleSignOut(e) {
    e.preventDefault();
    setIsLogin(false);
  }
  if (signIn.username === "test" && signIn.password === "test") {
    setIsLogin(true);
    redirect("/");
  }
  
  let content;
  if (!isLogin) {
    content = (
      <div class="relative flex flex-col justify-center h-screen overflow-hidden">
        <div class="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
          <h1 class="text-3xl font-semibold text-center text-gray-700">
            login
          </h1>
          <form class="space-y-4">
            <div>
              <label class="label">
                <span class="text-base label-text">username</span>
              </label>
              <input
                type="text"
                placeholder="user name"
                class="w-full input input-bordered"
                onChange={(e) =>
                  setInput({ ...input, userInput: e.target.value })
                }
              />
            </div>
            <div>
              <label class="label">
                <span class="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                class="w-full input input-bordered"
                onChange={(e) =>
                  setInput({ ...input, passInput: e.target.value })
                }
              />
            </div>
            <a
              href="#"
              class="text-xs text-gray-600 hover:underline hover:text-blue-600"
            >
              Forget Password?
            </a>
            <div>
              <button class="btn btn-block" onClick={handleSubmit}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    content = (
      <div class="relative flex flex-col justify-center h-screen overflow-hidden">
        <div class="w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
          <h1 class="text-3xl font-semibold text-center text-gray-700">
            you already signed in
          </h1>
          <form class="space-y-4">
            <div>
              <label class="label ">
                <span class="text-base label-text ">username</span>
              </label>
              <input
                type="text"
                placeholder="user name"
                class="w-full input input-bordered "
                disabled
              />
            </div>
            <div>
              <label class="label">
                <span class="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                class="w-full input input-bordered "
                disabled
              />
            </div>
            <a
              href="#"
              class="text-xs text-gray-600 hover:underline hover:text-blue-600"
            >
              Forget Password?
            </a>
            <div>
              <button class="btn btn-block" onClick={handleSignOut}>
                sign out
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return <>{content}</>;
}

export default Login;
