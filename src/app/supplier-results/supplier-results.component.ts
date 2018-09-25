import { Component, OnInit,Input, Output , EventEmitter} from '@angular/core';
import { Supplier } from '../supplier.model';
import { SupplierService } from '../supplier.service';


@Component({
  selector: 'app-supplier-results',
  templateUrl: './supplier-results.component.html',
  styleUrls: ['./supplier-results.component.css']
})
export class SupplierResultsComponent implements OnInit {
  @Input() foundSuppliers: Supplier[];  
  @Output() changeSuppliers = new EventEmitter;

  constructor( private supplierService: SupplierService ) { }

  ngOnInit() {
  }

  deleteSupplier(id: number): void {    
    this.supplierService.deleteSupplierById(id).subscribe(response => { 
      if (response != -1) {
        alert("Supplier was successfully deleted.");
        this.changeSuppliers.emit(id);
      } else {
        alert("Supplier was not deleted. Try again later.");
      }
    });
  }

}
