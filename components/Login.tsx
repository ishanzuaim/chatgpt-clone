"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#343541] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://i.imgur.com/CWIPZ82.png"
        alt="logo"
        width="100"
        height="100"
      />
      <button
        className="bg-[#10a37f] hover:bg-[#1a7f64] text-white  py-2 px-4 rounded mt-4"
        onClick={() => signIn("google")}
      >
        Sign In
      </button>
    </div>
  );
}

export default Login;
