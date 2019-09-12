import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecepiesComponent } from './recepies/recepies.component';
import { RecepeiStartComponent } from './recepies/recepie-start/recepei-start.component';
import { RecepieDetailsComponent } from './recepies/recepie-details/recepie-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
    {path: '', redirectTo: '/recepie', pathMatch: 'full'},
    {path: 'recepie', component: RecepiesComponent, children: [
        {path: '', component: RecepeiStartComponent, pathMatch: 'full'},
        {path: ':id', component: RecepieDetailsComponent}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
