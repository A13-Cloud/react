import { useRef } from "react";

import Input from "./Input.jsx";
import Modal from "./Modal.jsx";


export default function NewProject ({ onAdd, onCancel}) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef();

  function handleSave () {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modalRef.current.open();

      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueData: enteredDueDate
    })
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops ... looks like you forgot to enter a value.</p>
        <p className="text-stone-600 mb-4">Please make sure provide a valid value for every input filed.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} label="Title" type="text"/>
          <Input ref={descriptionRef} label="Description" textarea/>
          <Input ref={dueDateRef} label="Due Date" type="date"/>
        </div>
      </div>
    </>
  )
}