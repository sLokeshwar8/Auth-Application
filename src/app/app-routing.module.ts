import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NormalEventComponent } from './normal-event/normal-event.component';
import { SpecialEventComponent } from './special-event/special-event.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { AuthGuard } from './Guard/auth.guard';

const routes : Routes = [
    {
        path:'',
        redirectTo : 'events',
        pathMatch: 'full'
    },
    {
        path: 'events',
        component: NormalEventComponent
    },
    {
        path: 'special-events',
        component: SpecialEventComponent,
        canActivate :  [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'create-event',
        component: CreateEventComponent
    }
]


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}