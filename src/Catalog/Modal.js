import React from "react";
import ReactDom from "react-dom";
import "./modal.css";
import CloseIcon from "@material-ui/icons/Close";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  zIndex: 1000,
  width: 1163,
  height: 691,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

const Modal = ({ isOpen, children, onClose, product }) => {
  if (!isOpen) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div className="modal">
          <div className="left">
            <ul className="modal__price">
              <li className="modal__item">
                <strong>${product.price}</strong>
                <span className="modal__item--grey">RRP</span>
              </li>
              <li className="modal__item">
                <strong>${product.price}</strong>
                <span className="modal__item--grey">COST</span>
              </li>

              <li className="modal__item">
                <span className="modal__item--blue">${product.price}</span>
                <span className="modal__item--grey">PROFIT</span>
              </li>
            </ul>
            <div className="modal__image">
              <img src={product.imageUrl} alt="" />
            </div>
            <div className="modal__slideshow">
              <img src={product.imageUrl} alt="" />

              <img src={product.imageUrl} alt="" />
            </div>
          </div>
          <div className="right">
            <div className="close">
              <CloseIcon onClick={onClose} />
            </div>
            <div className="modal__description">
              <div>SKU# mat-153643 COPY</div>
              <div className="modal__description--supplier">
                <div>Supplier:</div>
                <div className="modal__description--blue">PL-Supplier149</div>
              </div>
            </div>
            <div className="modal__title">{product.title}</div>
            <div className="modal__button">
              <button className="btn--modal">Add To My Inventory</button>
            </div>
            <div className="tabs">
              <div className="tabs__item">Product Details</div>
              <div className="tabs__item">Shipping Rates</div>
            </div>
            <div className="modal__details">{product.description}</div>
          </div>
        </div>
      </div>
      {children}
    </>,
    document.getElementById("root")
  );
};

export default Modal;
