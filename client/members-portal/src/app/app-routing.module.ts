import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberSearchComponent } from './member/member-search.component';
import { MenuComponent } from './menu/menu.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'members', component: MemberSearchComponent, pathMatch: 'full'},
  { path: 'search-result', component: SearchResultComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
