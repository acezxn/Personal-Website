import "./css/InfoCard.css"
import profile from "./../data/profile.json";
import DeckGL, { FlyToInterpolator, GeoJsonLayer, _GlobeView as GlobeView } from 'deck.gl';
import { useEffect, useState } from "react";


const dataUrl = {
    countries: "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson",
};

export const BasicInfoCard = () => {
    const [mapColor, setMapColor] = useState([104, 11, 217]);
    const initialViewState = {
        longitude: profile.basic_information.coordinate[1],
        latitude: profile.basic_information.coordinate[0],
        zoom: 1
    };

    useEffect(() => {
        const handleStorage = () => {
            setMapColor(localStorage.getItem("theme") === "dark" ? [142, 231, 41] : [104, 11, 217]);
        };
        window.addEventListener("storage", handleStorage);
    }, []);

    return (
        <div className="info_card">
            <h6
                className="monospace"
                style={{
                    color: "var(--primary-color)"
                }}>Basic Information</h6>
            <label className="field_left monospace"><b>Hometown:</b></label>
            <br />
            <label className="field monospace">{profile.basic_information.hometown.address}</label>
            <br />
            <label className="field_left monospace"><b>Timezone:</b></label>
            <label className="field_right monospace">{profile.basic_information.hometown.timezone}</label>
            <br />
            <label className="field_left monospace"><b>Spoken Language:</b></label>
            <br />
            <label className="field monospace">{profile.basic_information.spoken_language.join(", ")}</label>
            <br />
            <DeckGL views={new GlobeView()} style={{ position: "relative", height: 220 }} controller={true} initialViewState={initialViewState}>
                <GeoJsonLayer
                    id="base-map-stroke"
                    data={dataUrl.countries}
                    stroked={true}
                    filled={false}
                    lineWidthMinPixels={1}
                    opacity={1}
                    getLineColor={mapColor} />
                <GeoJsonLayer
                    id="base-map-fill"
                    data={dataUrl.countries}
                    stroked={false}
                    filled={true}
                    opacity={0.01}
                    getFillColor={mapColor} />
            </DeckGL>
        </div>
    )
}