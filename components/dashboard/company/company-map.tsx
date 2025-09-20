'use client';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import {
  MapContainer,
  Marker,
  TileLayer,
  Tooltip,
  useMapEvent,
} from 'react-leaflet';
import L from 'leaflet';
export default function CompanyMap({
  setValue,
  getValues,
}: {
  setValue: any;
  getValues: any;
}) {
  const lat = getValues('address_latitude');
  const lng = getValues('address_longitude');
  const [coords, setCoords] = useState<[number, number]>([
    lat ? lat : 42.3266842,
    lng ? lng : 42.5920067,
  ]);

  const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl:
      'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    shadowSize: [41, 41],
  });

  function LocationMarker({
    onSelect,
  }: {
    onSelect: (coords: [number, number]) => void;
  }) {
    useMapEvent('click', (e) => {
      setValue('address_latitude', e.latlng.lat.toString());
      setValue('address_longitude', e.latlng.lng.toString());
      onSelect([e.latlng.lat, e.latlng.lng]);
    });
    return null;
  }
  return (
    <MapContainer
      style={{
        height: '400px',
        width: '100%',
      }}
      center={coords}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker onSelect={setCoords} />
      <Marker position={coords} icon={customIcon}>
        <Tooltip>
          {coords[0]}, {coords[1]}
        </Tooltip>
      </Marker>
    </MapContainer>
  );
}
