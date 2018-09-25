import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';
import { SearchComponent } from './search/search.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/search', pathMatch: 'full' },
  {path: 'add-supplier', component: AddSupplierComponent},
  {path: 'search', component: SearchComponent},
  {path: ':id', component: SupplierDetailComponent},
  {path: '**' , redirectTo: '/search', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)    
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
