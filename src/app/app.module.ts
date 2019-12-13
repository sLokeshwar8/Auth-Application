import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NormalEventComponent } from './normal-event/normal-event.component';
import { SpecialEventComponent } from './special-event/special-event.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './Guard/auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { CreateEventComponent } from './create-event/create-event.component';
import { SummaryPipe } from './pipe/summary.pipe';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NormalEventComponent,
    SpecialEventComponent,
    CreateEventComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    
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
