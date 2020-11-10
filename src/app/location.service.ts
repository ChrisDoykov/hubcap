import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LocationService {
  constructor() {}

  private DIH: string;
  private locationUpdated = new Subject<{ DIH: string }>();

  dihList = [
    {
      name: "Austria",
      lat: 47.06973,
      lon: 15.43826,
    },
    {
      name: "Denmark",
      lat: 56.17449,
      lon: 10.21298,
    },
    {
      name: "Germany",
      lat: 48.248829,
      lon: 11.65112,
    },
    {
      name: "Sweden",
      lat: 59.35037,
      lon: 18.0735,
    },
    {
      name: "Italy",
      lat: 45.47289276123047,
      lon: 9.229923248291016,
    },
    {
      name: "Romania",
      lat: 46.1691535,
      lon: 24.4267997,
    },
    {
      name: "United Kingdom",
      lat: 54.9721975,
      lon: -1.6023193,
    },
  ];

  getLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.calculateClosest({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getLocationUpdatedListener() {
    return this.locationUpdated.asObservable();
  }

  calculateClosest(coords) {
    const haversine = (
        { longitude: lonA, latitude: latA },
        { longitude: lonB, latitude: latB }
      ) => {
        const { PI, sin, cos, atan2 } = Math,
          r = PI / 180,
          R = 6371,
          deltaLat = (latB - latA) * r,
          deltaLon = (lonB - lonA) * r,
          a =
            sin(deltaLat / 2) ** 2 +
            cos(cos(latB * r) * latA * r) * sin(deltaLon / 2) ** 2,
          c = 2 * atan2(a ** 0.5, (1 - a) ** 0.5),
          d = R * c;
        return d;
      },
      currentLoc = { latitude: coords.lat, longitude: coords.lon },
      arr = this.dihList.map((dih) => {
        return { latitude: dih.lat, longitude: dih.lon };
      });
    let minDist = Number.MAX_VALUE;
    let closestCoords: { longitude: number; latitude: number } = {
      longitude: 0,
      latitude: 0,
    };

    arr.forEach((loc) => {
      let dist = haversine(
        { longitude: currentLoc.longitude, latitude: currentLoc.latitude },
        { longitude: loc.longitude, latitude: loc.latitude }
      );
      if (dist < minDist) {
        minDist = dist;
        closestCoords = loc;
      }
    });

    this.dihList.forEach((dih) => {
      if (
        dih.lat === closestCoords.latitude &&
        dih.lon === closestCoords.longitude
      ) {
        this.DIH = dih.name;
        this.locationUpdated.next({
          DIH: this.DIH,
        });
        localStorage.setItem("DIH", dih.name);
      }
    });
  }
}
