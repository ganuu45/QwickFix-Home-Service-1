import { services_appliance_repair, services_electrician, services_plumbing, services_painter } from "./ServicesData";

let appliance_repair = services_appliance_repair;
let electrician = services_electrician;
let plumbing = services_plumbing;
let painter = services_painter;
// let beauty_and_spa = services_beauty_and_spa;
// let business = services_business;
// let event_management = services_event_management;
// let house_cleaning = services_house_cleaning;
// let online_instructor = services_online_instructor;

const allServices = [...appliance_repair, ...electrician,  ...plumbing, ...painter];

export default allServices;
