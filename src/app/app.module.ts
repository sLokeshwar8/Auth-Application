import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NormalEventComponent } from './events/normal-event.component';
import { SpecialEventComponent } from './special-event/special-event.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CreateEventComponent } from './create-event/create-event.component';
import { SummaryPipe } from './pipe/summary.pipe';
import { MyDatePickerModule } from 'mydatepicker';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AlertModule } from 'ngx-alerts';
import { UpdateEventComponent } from './update-event/update-event.component';
import { EditEventComponent } from './update-event/edit-event/edit-event.component';
import { ToggleDropdownDirective } from './share/toggleDropdown.directive';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NormalEventComponent,
    SpecialEventComponent,
    CreateEventComponent,
    SummaryPipe,
    UpdateEventComponent,
    EditEventComponent,
    ToggleDropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MyDatePickerModule,
    BrowserAnimationsModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 2000, position: 'right'})
  ],
  providers: [AuthService,AuthGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
