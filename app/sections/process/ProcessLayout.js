"use client";

import ProcessForm from "./ProcessForm";
import BackgroundShape from "/public/cta-background-shape-image-two.png";

import { Suspense } from "react";

export default function ProcessLayout() {
  return (
    <>
      <h2 className="heading-style font-medium py-12 text-center">
        Register Here
      </h2>
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BackgroundShape.src})` }}
      >
        <div className="lg:margin-bottom-large sm:margin-bottom-small pt-16 pb-8">
          <p className="text-[20px] -text-jungle-black leading-[27.4px] font-medium mb-10 text-center">
            Personal Information
          </p>
          <Suspense fallback={<div>Loading...</div>}>
            <ProcessForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
