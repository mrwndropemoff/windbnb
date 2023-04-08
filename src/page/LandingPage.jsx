import React from "react";
import Content from "../components/Content";
import Header from "../components/Header";

export default function LandingPage() {
  return (
    <div className="flex flex-col h-screen max-tablet:mx-4 desktop:mx-1 ">
      <Header />
      <Content />
    </div>
  );
}
