import { Component, OnInit } from '@angular/core';
import { Supplier } from '../supplier.model';
import { Address } from '../address';
import { SupplierService } from '../supplier.service';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {

  constructor(   
    private supplierService: SupplierService,
    private location: Location
    ) { }

  ngOnInit() { }

  saveSupplier(f: NgForm): void {    
    let address = new Address (f.value.addressUnumbered, f.value.number);
    let supplier = new Supplier (f.value.companyname,f.value.vat,f.value.firstname,f.value.lastname,f.value.irs,f.value.city,f.value.country,address);
    console.log(supplier);
    
    this.supplierService.saveSupplier(supplier).subscribe(x => { 
      console.log(x);
      
      if (x.id > 0) {
        alert("Supplier was successfully saved.");
      } else {
        alert("Supplier was not saved. Try again later.");
      }
  });    

  }

  goBack(): void {
    this.location.back();
  }

}
