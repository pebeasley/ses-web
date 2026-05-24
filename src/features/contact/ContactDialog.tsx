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
        <div className="modal-box max-w-6xl bg-transparent p-0 shadow-none">
          <ContactForm />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
