import {Address} from "./address"

export class Supplier {
    companyname?: string;	
    vat?: string;
    firstname?: string;
    lastname?: string;
    irs?: string;
    city?: string;
    country?: string;
    id?: number;
    address?: Address;


    constructor (companyname?: string, vat?: string, firstname?: string, lastname?: string, irs?: string, city?: string, country?: string, address?: Address) 
    { 
        this.companyname = companyname;	
        this.vat = vat;	
        this.firstname = firstname;	
        this.lastname = lastname;	
        this.irs = irs;	
        this.city = city;	
        this.country = country;	
        this.address = address;

    }

}
