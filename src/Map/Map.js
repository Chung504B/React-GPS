import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import { cities } from "../data/cities";
import { cars } from "../data/cars";

import { MarkerLayer } from "../layers/marker_layer";
import { MarkerLayerWithTooltip } from "../layers/marker_layer_with_tooltip";
import { test } from "../data/test";
import { test2 } from "../data/test2";

export const Map = () => {
  const position = [23.6, 120.9];

  return (
    <MapContainer center={position} zoom={8} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerLayerWithTooltip data={test} />
    </MapContainer>
  );
};
