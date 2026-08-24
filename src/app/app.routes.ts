import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { LikesComponent } from './likes/likes.component';
import { CertificatesComponent } from './certificates/certificates.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'likes', component: LikesComponent },
    { path: 'certificates', component: CertificatesComponent }
];
