import React from "react";

interface ModalPopUpProps {
  header?: JSX.Element;
  body?: JSX.Element;
  footer?: JSX.Element;
  handleToggleModal: (action: boolean) => void;
}

const ModalPopUp: React.FC<ModalPopUpProps> = ({
  header,
  body,
  footer,
  handleToggleModal,
}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="header">
          {header ? (
            header
          ) : (
            <div>
              <p>Header Section</p>
            </div>
          )}
          <div className="close" onClick={() => handleToggleModal(false)}>
            &times;
          </div>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>Body Section</p>
            </div>
          )}
        </div>
        <div className="footer">
          {footer ? (
            footer
          ) : (
            <div>
              <p>Footer Section</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalPopUp;
