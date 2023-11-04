import Link from "next/link";
import React from "react";

function About() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(tech1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content ">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold">Dear visitor</h1>
            <p className="mb-5 text-xl text-justify ">
              This app is developed by{" "}
              <span className="text-yellow-500">Enger Yaser Hoseini</span> and{" "}
              <span className="text-yellow-500">Enger Reza Hadipour</span> in
              fact front-end is developed by Yaser Hosein and back-end is
              developed by Reza Hadipour , in home page you are able to add task
              or todos and after add the todo will be added to mongodb database
              and the data is added to state after that data will be shared in
              list with context Provider duo to react context every thing can
              add , delete and update without any delay and page don&apos;t need
              to refresh for showing new entries
            </p>
            <Link href={"/"}>
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
