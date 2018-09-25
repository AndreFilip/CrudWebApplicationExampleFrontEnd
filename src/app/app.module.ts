import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { SupplierService } from './supplier.service';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';
import { SupplierResultsComponent } from './supplier-results/supplier-results.component';
import { AppRoutingModule } from './app-routing.module';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SupplierDetailComponent,
    SupplierResultsComponent,
    AddSupplierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SupplierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
