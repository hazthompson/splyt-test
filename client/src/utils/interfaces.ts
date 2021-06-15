interface centerInterface {
  lat: number;
  lng: number;
}

interface driverInterface {
  driver_id: string;
  location: {
    latitude: number;
    longitude: number;
    bearing: number;
  };
}

interface taxiLocationsInterface {
  pickup_eta: number;
  drivers: driverInterface[];
}

export type { centerInterface, taxiLocationsInterface };
