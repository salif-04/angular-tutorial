import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepieDetailsComponent } from './recepies/recepie-details/recepie-details.component';
import { RecepieListComponent } from './recepies/recepie-list/recepie-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecepeiStartComponent } from './recepies/recepie-start/recepei-start.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { IngredientsServices } from './shared/services/ingredients.service';


const routes: Routes = [
  {path: '', redirectTo: '/recepie', pathMatch: 'full'},
  {path: 'recepie', component: RecepiesComponent, children: [
    {path: '', component: RecepeiStartComponent, pathMatch: 'full'},
    {path: ':id', component: RecepieDetailsComponent}
  ]},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepiesComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecepieDetailsComponent,
    RecepieListComponent,
    DropdownDirective,
    RecepeiStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [IngredientsServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
