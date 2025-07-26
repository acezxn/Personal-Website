import "./css/InfoCard.css"
import profile from "./../data/profile.json";
import DeckGL, { GeoJsonLayer, _GlobeView as GlobeView } from 'deck.gl';
import { IconLayer } from '@deck.gl/layers';
import { useEffect, useState } from "react";
import theme from "./../data/theme.json"
import Utils from "../objects/utils";
import { IoMdExpand } from "react-icons/io";
import { IconButton } from "./widgets/IconButton";
import { Modal } from "./Modal";

const dataUrl = {
    countries: "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson",
};

const MapDisplay = () => {
    const [mapColor, setMapColor] = useState(Utils.hexToRgbArray(theme.dark.primary_color));
    const initialViewState = {
        longitude: profile.basic_information.coordinate[1],
        latitude: profile.basic_information.coordinate[0],
        zoom: 0
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


    return <DeckGL
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
}

const CardContent = () => {
    return <>
        <label className="field_title monospace"><b>Hometown:</b></label>
        <div style={{ marginBottom: 2 }}></div>
        <label className="monospace">{profile.basic_information.hometown.address}</label>
        <div style={{ marginBottom: 2 }}></div>
        <hr />
        <label className="field_title monospace"><b>Timezone:</b></label>
        <label className="field_right monospace">{profile.basic_information.hometown.timezone}</label>
        <div style={{ marginBottom: 2 }}></div>
        <hr />
        <label className="field_title monospace"><b>Spoken Language:</b></label>
        <div style={{ marginBottom: 2 }}></div>
        <label className="monospace">{profile.basic_information.spoken_language.join(", ")}</label>
        <div style={{ marginBottom: 2 }}></div>
        <hr />
        <label className="field_title monospace"><b>Current Location:</b></label>
        <div style={{ marginBottom: 2 }}></div>
        <MapDisplay />
    </>
}

export const BasicInfoCard = ({ isModalOpen, onModalOpen, onModalClose }) => {
    return (
        <div className="info_card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h6
                    className="monospace"
                    style={{
                        color: "var(--primary-color)",
                        margin: 0,
                    }}
                >
                    Basic Information
                </h6>
                <IconButton onClick={onModalOpen}>
                    <IoMdExpand size={20} />
                </IconButton>
            </div>
            <CardContent />
            <Modal isOpen={isModalOpen} onClose={onModalClose}>
                <h6
                    className="monospace"
                    style={{
                        color: "var(--primary-color)",
                        margin: 0,
                    }}
                >
                    Basic Information
                </h6>
                <CardContent />
            </Modal>
        </div>
    )
}