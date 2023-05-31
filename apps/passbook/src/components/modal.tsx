import { useStateContext } from "context";
import Aadhar from "templates/aadhar";

interface ModalProps {}

export const Modal: React.FC<ModalProps> = () => {
  const closeModal = () => {
    setModaleOpen(false);
  };

  const { modaleOpen, setModaleOpen } = useStateContext();

  return modaleOpen ? (
    <div className="document-preview">
      <div className="modal-content">
        <Aadhar />

        {/* <button className="modal-close" onClick={closeModal}>
          Close
        </button> */}
      </div>
    </div>
  ) : null;
};
