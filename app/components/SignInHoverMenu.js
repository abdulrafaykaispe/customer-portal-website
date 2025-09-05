"use client";

import Logo from "/public/images/KaispeLogo.png";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInHoverMenu() {
  const router = useRouter();
  const [companyName, setCompanyName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    router.push(
      `https://cpportal.kaispe.com/${encodeURIComponent(companyName)}`
    );
    setCompanyName("");
  };

  return (
    <section className="bg-white py-12 px-8 md:w-[500px] sm:w-[320px] rounded-[20px] flex flex-col justify-center items-center -text-jungle-green shadow-[0_7.41px_42.35px_0_rgba(0,0,0,0.12)] text-center">
      <Image src={Logo} alt="logo" width={160} className="mb-8" />
      <p className="md:text-[24px] sm:text-xl font-semibold mb-3">Welcome</p>
      <p className="md:text-[20px] sm:text-xl font-medium mb-8">
        Please enter company name
      </p>
      <form onSubmit={handleSubmit}>
        <label className="font-medium mr-3">cpportal.kaispe.com/</label>
        <input
          type="text"
          className="py-1 px-3 border-[1px] -border-dark-blue placeholder:text-[13px] lg:placeholder:text-left sm:placeholder:text-center placeholder:-text-dark-blue rounded-full"
          placeholder="Enter Company Name *"
          required
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="-bg-purply-blue text-white py-2.5 px-10 rounded-full text-center"
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </div>
      </form>

      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-85 z-10">
          <div className="loader"></div>
        </div>
      )}
    </section>
  );
}
