import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UpdateComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
