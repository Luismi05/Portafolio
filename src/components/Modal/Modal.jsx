const Modal = ({ id = '', contenido = '', title = '', tamaño = '' }) => {
    return (
        <div
            className="modal fade"
            id={id}
            tabIndex="-1"
            aria-hidden="true"
        >
            <div className={`modal-dialog modal-${tamaño} modal-dialog-scrollable`}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 text-uppercase">{title}</h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>

                    <div className="modal-body">
                        {contenido}
                    </div>

                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-dark"
                            data-bs-dismiss="modal"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal