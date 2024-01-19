import { createPortal } from "react-dom"

export default function Modal({ children, onClose }) {
  return createPortal(
    <>
      <div
        className="backdrop"
        onClick={onClose}
      ></div>
      <div className="dialogContainer">
        <dialog
          open
          className="customModal"
        >
          {children}
        </dialog>
      </div>
    </>,
    document.getElementById("modal")
  )
}
