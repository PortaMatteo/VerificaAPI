import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {path: 'search-guerre-stellari', component: SearchComponent}, 
  {path: '',   redirectTo: '/search-guerre-stellari', pathMatch: 'full' },
  {path: 'item/:id', component: ItemComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
