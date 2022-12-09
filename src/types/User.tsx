import { Address } from "./Address";
import { Company } from "./Company";

export interface User{
	id: number,
	name : string,
	username: string,
	address: Address,
	phone:string,
	website : string,
	company: Company,
	logo: string
}