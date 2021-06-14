import React from 'react';

interface MarkerProps {
  text: String;
  lat: number;
  lng: number;
}

function CurrentLocationMarker({ text }: MarkerProps) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

export default CurrentLocationMarker;
