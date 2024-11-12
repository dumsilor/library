import { Routes } from '@angular/router';
import { FrontPageComponent } from './features/front-page/front-page.component';
import { BookComponent } from './features/book/book.component';
import { UserAuthComponent } from './features/user-auth/user-auth.component';

export const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'book/:id', component: BookComponent },
  { path: 'auth', component: UserAuthComponent },
];
