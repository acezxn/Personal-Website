import "./css/InfoCard.css"
import profile from "./../data/profile.json";
import DeckGL, { GeoJsonLayer, _GlobeView as GlobeView } from 'deck.gl';
import { IconLayer } from '@deck.gl/layers';
import { useEffect, useState } from "react";
import theme from "./../data/theme.json"
import Utils from "../objects/utils";


const dataUrl = {
    countries: "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson",
};

export const BasicInfoCard = () => {
    const [mapColor, setMapColor] = useState(Utils.hexToRgbArray(theme.dark.primary_color));
    const initialViewState = {
        longitude: profile.basic_information.coordinate[1],
        latitude: profile.basic_information.coordinate[0],
        zoom: 1.4
    };

    const iconLayer = new IconLayer({
        id: 'IconLayer',
        data: [{ "coordinates": [profile.basic_information.coordinate[1], profile.basic_information.coordinate[0]] }],
        getColor: () => mapColor,
        getIcon: () => 'marker',
        getPosition: (d) => d.coordinates,
        getSize: 30,
        iconAtlas: window.location.origin + "/assets/images/target.png",
        iconMapping: window.location.origin + "/assets/images/mappings/target_mapping.json",
        pickable: true
    });

    useEffect(() => {
        const handleStorage = () => {
            setMapColor(Utils.hexToRgbArray(localStorage.getItem("theme") === "light" ? theme.light.primary_color : theme.dark.primary_color));
        };
        window.addEventListener("storage", handleStorage);
        handleStorage();
    }, []);

    return (
        <div className="info_card">
            <h6
                className="monospace"
                style={{
                    color: "var(--primary-color)"
                }}>Basic Information</h6>
            <label className="field_title monospace"><b>Hometown:</b></label>
            <br />
            <label className="monospace">{profile.basic_information.hometown.address}</label>
            <br />
            <hr />
            <label className="field_title monospace"><b>Timezone:</b></label>
            <label className="field_right monospace">{profile.basic_information.hometown.timezone}</label>
            <br />
            <hr />
            <label className="field_title monospace"><b>Spoken Language:</b></label>
            <br />
            <label className="monospace">{profile.basic_information.spoken_language.join(", ")}</label>
            <br />
            <hr />
            <label className="field_title monospace"><b>Current Location:</b></label>
            <DeckGL
                views={new GlobeView()}
                style={{
                    position: "relative",
                    height: 140,
                    borderTop: `1px solid rgb(${mapColor.join(", ")}`,
                    borderBottom: `1px solid rgb(${mapColor.join(", ")}`
                }}
                controller={true}
                initialViewState={initialViewState}
                layers={[iconLayer]}>
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