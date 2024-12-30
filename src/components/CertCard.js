import { PiCertificateFill } from "react-icons/pi";
import profile from "./../data/profile.json";
import Utils from "../objects/utils";
import "./css/InfoCard.css"
import { useEffect, useRef } from "react";

export const CertCard = () => {
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
            <h6
                className="monospace"
                style={{
                    color: "var(--primary-color)"
                }}>Certifications</h6>
            {
                Object.keys(profile.certifications).map((certification_type) => (
                    <>
                        <label className="field_title monospace"><b>{Utils.capitalize(certification_type) + ":"}</b></label>
                        <br />
                        <br />
                        <table className="monospace">
                            <tr>
                                <th>Name</th>
                                <th>Provider</th>
                                <th>Issued time</th>
                                <th>Expiry time</th>
                            </tr>
                            {
                                profile.certifications[certification_type].map((certification) => (
                                    <tr>

                                        <td>
                                            <PiCertificateFill style={{ verticalAlign: "middle", margin: 5, marginLeft: 0 }} size={20} />
                                            {certification.name}
                                        </td>
                                        <td>{certification.provider}</td>
                                        <td>{certification.issued_time}</td>
                                        <td>{certification.expiry_time}</td>
                                    </tr>
                                ))
                            }
                        </table>
                    </>
                ))
            }
            <div className="scroll_indicator" ref={scrollIndicator}></div>
        </div>
    )
}