import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../supplier.service';
import { Supplier } from '../supplier.model';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  suppliers: Observable<Supplier[]>;
  foundSuppliersInSearch: Supplier[] = [];  
  private searchTerms = new Subject<string>();

  constructor(private supplierService:SupplierService) { }

  ngOnInit(): void {
    this.suppliers = this.searchTerms.pipe(
      debounceTime(300), 
      distinctUntilChanged(), 
      switchMap((term: string) => this.supplierService.searchSuppliers(term))
    );    
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  getAllFoundSuppliers(searchInput : HTMLInputElement): void {
    this.supplierService.searchSuppliers(searchInput.value.trim()).subscribe( 
      results => {this.foundSuppliersInSearch = results;
      console.log(results);}
      );
  }

  changeFoundSuppliers(id:number) {
    this.foundSuppliersInSearch = this.foundSuppliersInSearch.filter(item => item.id !== id);
  }

  getAll() {
    this.supplierService.getAllSuppliers().subscribe(results => this.foundSuppliersInSearch = results);
  }

}
