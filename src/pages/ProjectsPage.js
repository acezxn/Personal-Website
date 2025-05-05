import { Navbar } from "../components/Navbar"
import { Helmet } from 'react-helmet';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import profile from "./../data/profile.json";
import { useEffect, useState } from "react";

export const ProjectsPage = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const renderImage = (item) => {
        return (
            <a href={item.original} target="_blank">
                <img src={item.original} alt={item.originalAlt} style={{ width: width > 800 ? "800px" : "100%" }} />
            </a>
        );
    };

    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return (
        <>
            <Helmet><title>Projects</title></Helmet>
            <Navbar />
            <div style={{ margin: 10 }}>
                <h3
                    className="monospace"
                    style={{
                        display: "inline-block",
                        color: "var(--primary-color)"
                    }}>Projects Gallery</h3>
                <h6 className="monospace link" style={{ display: "inline-block", paddingLeft: 40 }}>
                    <a href={`https://${profile.contact.github}`}>[From Github]</a>
                </h6>
                <hr />
                {
                    profile.projects.map((project, index) => {
                        const photos = project.images.map((image, idx) => {
                            return {
                                original: image,
                                thumbnail: image,
                            };
                        });
                        return (
                            <div key={index}>
                                <h6 className="monospace">{project.name}</h6>
                                <div style={{ margin: 32 }} />
                                <ImageGallery items={photos} showFullscreenButton={false} renderItem={renderImage} />
                                <br />
                                <label className="field monospace">{project.description}</label>
                                <br />
                                <br />
                                <label className="field_left monospace link"><a href={project.link}>[View on Github]</a></label>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}