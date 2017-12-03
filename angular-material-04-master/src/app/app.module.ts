import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { AppComponent } from './app.component';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule, MatSidenavModule,
  MatProgressSpinnerModule, MatDialogModule, MatMenuModule, MatTabsModule, MatSlideToggleModule, MatTableModule  } from '@angular/material';
import { UsertableComponent } from './components/usertable/usertable.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
// import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AppComponent,
    UsertableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatMenuModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatTableModule,
    HttpClientModule,
//    DataTablesModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
