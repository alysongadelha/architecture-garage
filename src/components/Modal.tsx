"use client";

type ModalProps = {
  isShowModal: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
  title?: string;
};

const Modal = ({
  isShowModal,
  onRequestClose,
  children,
  title,
}: ModalProps) => {
  return isShowModal ? (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-hidden bg-logoColor-neutralMutedAG/40">
      <div
        className="w-3/4 rounded-lg bg-logoColor-surfaceMuted p-5"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <header className="my-2">
          <button
            className="float-right text-xl font-bold uppercase"
            onClick={onRequestClose}
          >
            x
          </button>
          {title ? <h2 className="text-2xl font-bold">{title}</h2> : null}
        </header>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
