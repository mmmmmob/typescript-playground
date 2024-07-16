/// <reference types="@types/google.maps" />

// instruction for another class to comply with the interface in order to use with addMarker() and display content inside marker with markerContent()
interface Mappable {
  markerContent(): string;
  location: {
    lat: number;
    lng: number;
  };
}

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

  addMarker(toMarker: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: toMarker.location.lat,
        lng: toMarker.location.lng,
      },
    });
    // add a marker at clicked time
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: toMarker.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
