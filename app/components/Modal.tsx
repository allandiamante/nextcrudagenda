interface ModalProps {
    modalOpen: boolean
    setModalOpen: (open: boolean) => boolean | void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({modalOpen, setModalOpen, children}) => {
    return (
        <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
            <div className="modal-box relative">
                    <label onClick={() => setModalOpen(false)} className="btn btn-outline btn-sm absolute right-2 top-2  ">x</label>
                {children}
                <div className="modal-action">                    
                </div>
            </div>
        </div>
    )
}


export default Modal