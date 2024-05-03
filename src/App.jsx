import React from "react";
import "./index.css";
import blogImg from "../assets/images/illustration-article.svg";
import profileAvatar from "../assets/images/image-avatar.webp";
function App() {
  return (
    <section className=" bg-yellow-300 justify-center h-screen flex items-center">
      <div className="group bg-white p-6 space-y-[24px] rounded-[20px] w-[327px] md:w-[384px] md:cursor-pointer">
        <div>
          <img src={blogImg} alt="img" className="rounded-xl" />
        </div>
        <div className="space-y-[12px]">
          <span className="px-3 py-1 bg-yellow-300 rounded text-xs font-extrabold">
            Learning
          </span>
          <p className="text-xs font-medium">Published 21 Dec 2023</p>
          <p className="font-extrabold text-xl md:group-active:text-yellow-300">
            HTML & CSS foundations
          </p>
          <p className=" text-sm font-medium text-gray-500">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className="flex items-center gap-[12px]">
          <div>
            <img
              src={profileAvatar}
              alt=""
              className=" w-[32px] aspect-square"
            />
          </div>

          <p className="text-sm font-extrabold">Greg Hooper</p>
        </div>
      </div>
    </section>
  );
}

export default App;
