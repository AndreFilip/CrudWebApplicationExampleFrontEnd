import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Supplier } from './supplier.model';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SupplierService {
  private basicURL: string = "http://localhost:8080/suppliers";

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAllSuppliers(): Observable<Supplier[]>{ 
    return this.http.get<Supplier[]>(this.basicURL);
  }

  searchSuppliers(term: string): Observable<Supplier[]> {
    if (!term.trim()) {
      return of([]);
    }    
    let term2 = term.trim();    
    return this.http.get<Supplier[]>(`${this.basicURL}/bystring/${term2}`).pipe(
      tap( () => console.log("ok - searchSuppliers") )
    );
  }

  getSupplierById(id:number): Observable<Supplier> {
    const url = `${this.basicURL}/${id}`;
    return this.http.get<Supplier>(url).pipe(
      tap( () => console.log("ok - getSupplierById: " + id) )
    );
  }

  updateSupplier(supplier: Supplier): Observable<Supplier> {    
    return this.http.put<Supplier>(this.basicURL, supplier, this.httpOptions).pipe (
      tap(() => console.log("ok - updateSupplier: " + supplier)),
      catchError ( (): Observable<Supplier> =>  of({id: -1} as Supplier))
    );
  }

  saveSupplier (supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.basicURL, supplier, this.httpOptions).pipe(
      tap( () => console.log("ok - addSupplier: " + supplier) ),
      catchError ( ():Observable<Supplier> =>  of({id: -1} as Supplier))
    );
  }

  deleteSupplierById (id:number ): Observable<any> {
    const url = `${this.basicURL}/${id}`;
    return this.http.delete(url).pipe(
      tap( () => console.log("ok - deletedSupplier with id: " + id)),
      catchError ( ():Observable<Supplier> =>  of({id: -1}))
    );
  }

  deleteAllSuppliers(): void { 
    this.http.delete(this.basicURL).pipe(
      tap( () => console.log("ok - deleteAllSuppliers")
      )
    );
  }









}
