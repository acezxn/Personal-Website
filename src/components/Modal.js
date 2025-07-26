import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IconButton } from "./widgets/IconButton";

export const Modal = ({ isOpen, onClose, children }) => {
    const [modalHeight, setModalHeight] = useState("70vh");
    const [modalWidth, setModalWidth] = useState("60vw");

    useEffect(() => {
        const updateModalDimensions = () => {
            if (window.innerWidth > 1200) {
                setModalWidth("60vw");
            } else if (window.innerWidth > 800) {
                setModalWidth("80vw");
            } else {
                setModalWidth("90vw");
            }
            if (window.innerHeight > 500) {
                setModalHeight("70vh");
            } else if (window.innerHeight > 300) {
                setModalHeight("80vh");
            } else {
                setModalHeight("90vh");
            }
            console.log(window.innerHeight);
        }

        window.addEventListener("resize", updateModalDimensions);
        return () => window.removeEventListener("resize", updateModalDimensions);
    }, []);

    if (!isOpen) return null;

    return (
        <div style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000
        }}>
            <div style={{
                backgroundColor: "var(--widget-color)",
                width: modalWidth,
                maxHeight: modalHeight,
                padding: 24,
                borderRadius: 4,
                boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
                position: "relative",
                overflow: "scroll"
            }}>
                <div style={{
                    color: "inherit",
                    position: "absolute",
                    top: 8,
                    right: 8,
                    background: "none",
                    border: "none",
                    fontSize: 20,
                    cursor: "pointer"
                }}>
                    <IconButton onClick={onClose}>
                        <IoCloseSharp size={24} />
                    </IconButton>
                </div>

                {children}
            </div>
        </div>
    );
}