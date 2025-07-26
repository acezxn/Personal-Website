import "./css/InfoCard.css"
import profile from "./../data/profile.json";
import { useEffect, useRef } from "react";
import { Modal } from "./Modal";
import { IconButton } from "./widgets/IconButton";
import { IoMdExpand } from "react-icons/io";

const CardContent = () => (
    <>
        <label className="field_title monospace"><b>Purdue University:</b></label>
        <div style={{ marginBottom: 2 }}></div>
        <div style={{ marginBottom: 2 }}></div>
        <label className="field_title monospace">GPA:</label>
        <label className="field_right monospace">{profile.grades.university.gpa}</label>
        <hr />
        <div style={{ marginBottom: 2 }}></div>
        <table className="monospace">
            <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Grade</th>
            </tr>
            {
                profile.grades.university.courses.map((course) => (
                    <tr>
                        <td><a className="link" href={course.link} target="_blank" rel="noopener noreferrer">{course.code}</a></td>
                        <td>{course.name}</td>
                        <td>{course.grade}</td>
                    </tr>
                ))
            }
        </table>
        <div style={{ marginBottom: 2 }}></div>
        <label className="field_title monospace"><b>High School:</b></label>
        <div style={{ marginBottom: 2 }}></div>
        <div style={{ marginBottom: 2 }}></div>
        <label className="field_title monospace">GPA:</label>
        <label className="field_right monospace">{profile.grades.high_school.gpa}</label>
        <hr />
        <label className="field_title monospace">SAT:</label>
        <label className="field_right monospace">{profile.grades.high_school.sat}</label>
        <hr />
        <div style={{ marginBottom: 2 }}></div>
        <table className="monospace">
            <tr>
                <th>Name</th>
                <th>Grade</th>
            </tr>
            {
                profile.grades.high_school.courses.map((course) => (
                    <tr>
                        <td>{course.name}</td>
                        <td>{course.grade}</td>
                    </tr>
                ))
            }
        </table>
    </>
);

export const GradesCard = ({ isModalOpen, onModalOpen, onModalClose }) => {
    const scrollableDiv = useRef(null);
    const scrollIndicator = useRef(null);
    const updateIndicator = () => {
        if (!scrollableDiv.current || !scrollIndicator.current) {
            return;
        }
        const isAtBottom = scrollableDiv.current.scrollHeight - scrollableDiv.current.scrollTop === scrollableDiv.current.clientHeight;
        scrollIndicator.current.style.opacity = isAtBottom ? 0 : 0.5;
    };

    const updateIndicatorPosition = () => {
        if (!scrollableDiv.current || !scrollIndicator.current) {
            return;
        }
        const rect = scrollableDiv.current.getBoundingClientRect();
        scrollIndicator.current.style.top = `${rect.top + scrollableDiv.current.clientHeight - 20}px`;
        scrollIndicator.current.style.left = `${rect.left + scrollableDiv.current.clientWidth / 2}px`;
    }

    useEffect(() => {
        updateIndicator();
        updateIndicatorPosition();
    }, []);

    useEffect(() => {
        if (!scrollableDiv.current) {
            return;
        }
        scrollableDiv.current.addEventListener("scroll", updateIndicator);
        window.addEventListener("scroll", updateIndicatorPosition);
        const localResizeObserver = new ResizeObserver(updateIndicatorPosition);
        const globalResizeObserver = new ResizeObserver(updateIndicatorPosition)
        localResizeObserver.observe(scrollableDiv.current);
        globalResizeObserver.observe(document.body);
    }, [scrollableDiv.current]);

    return (
        <div className="info_card" ref={scrollableDiv} style={{ height: 200 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h6
                    className="monospace"
                    style={{
                        color: "var(--primary-color)"
                    }}>Grades</h6>
                <IconButton onClick={onModalOpen}>
                    <IoMdExpand size={20} />
                </IconButton>
            </div>
            <CardContent />
            <Modal isOpen={isModalOpen} onClose={onModalClose}>
                <h6
                    className="monospace"
                    style={{
                        color: "var(--primary-color)"
                    }}>Grades</h6>
                <CardContent />
            </Modal>
            <div className="scroll_indicator" ref={scrollIndicator}></div>
        </div>
    )
}