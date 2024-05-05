import { useEffect, useRef } from "react";

import { createPortal } from "react-dom";

export default function Modal ({children, open, className = ""}) {
  const modalRef = useRef();

  useEffect(() => {
    const modal = modalRef.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog
      className={`modal ${className}`}
      ref={modalRef}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}