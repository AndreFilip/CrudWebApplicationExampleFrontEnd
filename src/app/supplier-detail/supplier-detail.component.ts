import { Component, OnInit } from '@angular/core';
import { Supplier } from '../supplier.model';
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from '../supplier.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.css']
})
export class SupplierDetailComponent implements OnInit {
  supplier: Supplier;

  constructor(  
    private route: ActivatedRoute,
    private supplierService: SupplierService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getSupplier();
  }

  getSupplier(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    
    this.supplierService.getSupplierById(id).subscribe(supplier => this.supplier = supplier);
    console.log(this.supplier);
    
  }

  updateSupplier(): void {    
    this.supplierService.updateSupplier(this.supplier).subscribe(x => { 
      console.log(x);
      
      if (x.id > 0) {
        alert("Supplier was successfully updated.");
      } else {
        alert("Supplier was not updated. Try again later.");
      }
  });    
  }

  deleteSupplier(): void {    
    this.supplierService.deleteSupplierById(this.supplier.id).subscribe(response => { 
      console.log(response);

      if (response != -1) {
        alert("Supplier was successfully deleted.");
      } else {
        alert("Supplier was not deleted. Try again later.");
      }
      this.goBack();

    });
  }


  goBack(): void {
    this.location.back();
  }

}
