import { useState } from "react";

export default function useModal() {
  const [isOpen, setisOpen] = useState(false);

  const openModal = () => {
    setisOpen(true);
  };
	const closeModal = () => {
    setisOpen(false);
  };

  return {
    isOpen,
    openModal,
		closeModal
  };
}
