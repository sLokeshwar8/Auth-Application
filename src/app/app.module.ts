import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NormalEventComponent } from './events/events.component';
import { SpecialEventComponent } from './events/special-event/special-event.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { SummaryPipe } from './pipe/summary.pipe';
import { MyDatePickerModule } from 'mydatepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-alerts';
import { UpdateEventComponent } from './events/update-event/update-event.component';
import { EditEventComponent } from './events/update-event/edit-event/edit-event.component';
import { ToggleDropdownDirective } from './share/toggleDropdown.directive';
import { MainNavComponent } from './angular-material/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { DeleteEventModalComponent } from './share/delete-event-modal/delete-event-modal.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip'

@NgModule({
  entryComponents:[DeleteEventModalComponent],
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
    ToggleDropdownDirective,
    MainNavComponent,
    DeleteEventModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MyDatePickerModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 2000, position: 'right'}),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    FlexLayoutModule,
    MatMenuModule,
    MatCardModule,
    MatTooltipModule
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
