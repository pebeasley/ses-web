"use client";

import { useRef } from "react";
import ContactForm from "./ContactForm";

export default function ContactDialog() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const handleClick = () => dialogRef.current?.showModal();

  return (
    <>
      <button className="btn btn-primary btn-xl" onClick={handleClick}>
        Contact Us
      </button>
      <dialog id="my_modal_2" ref={dialogRef} className="modal">
        <div className="modal-box">
          <div className="flex flex-1 flex-col w-full justify-center items-center">
            <ContactForm />
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
