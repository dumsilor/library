import { Routes } from '@angular/router';
import { FrontPageComponent } from './features/front-page/front-page.component';
import { BookComponent } from './features/book/book.component';

export const routes: Routes = [
    {path: "", component: FrontPageComponent},
    {path: ":id", component:BookComponent, pathMatch: "prefix"}
];
