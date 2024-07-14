import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

const customMap = new CustomMap("maps");
const user = new User();
const company = new Company();

customMap.addMarker(user);
customMap.addMarker(company);
