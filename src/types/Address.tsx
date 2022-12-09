import { Company } from "./Company";
import { Geo } from "./Geo";

export interface Address {
	street: string,
	suite: string,
	city: string,
	zipcode : string,
	geo : Geo,
	phone:string,
	website : string,
	company: Company
}