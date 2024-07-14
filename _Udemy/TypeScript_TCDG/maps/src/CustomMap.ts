/// <reference types="@types/google.maps" />

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
}
