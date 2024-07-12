/// <reference types="@types/google.maps" />
import { Company } from "./Company";
import { User } from "./User";

new google.maps.Map(document.getElementById("maps") as HTMLElement, {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
