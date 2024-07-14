/// <reference types="@types/google.maps" />
import { Company } from "./Company";
import { User } from "./User";
export class CustomMap {
  // to limit access of Google Maps method with /private/ syntax
  private googleMap: google.maps.Map;

  // to make it more reusable with any div's id
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addMarker(person: User | Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: person.location.lat,
        lng: person.location.lng,
      },
    });
  }
}
