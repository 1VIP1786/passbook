import { CrossIcon } from "assets/icons";
import { useStateContext } from "context";
import Aadhar from "templates/aadhar";

interface ModalProps {}

export const Modal: React.FC<ModalProps> = () => {
  const closeModal = () => {
    setModaleOpen(false);
  };

  const { modaleOpen, setModaleOpen } = useStateContext();

  return modaleOpen ? (
    <div className={`document-preview ${modaleOpen && "open"}`}>
      <div className="modal-content px-5 pb-5">
        <button className="flex justify-end w-[105%] p-0" onClick={closeModal}>
          <CrossIcon />
        </button>
        <Aadhar />
      </div>
    </div>
  ) : null;
};
