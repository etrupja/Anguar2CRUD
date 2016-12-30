import { RouterModule, Routes } from '@angular/router';


import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';

//main components
import {HomeComponent} from './home/home.component'
import {EmployeesComponent} from './employees/employees.component'
import {DepartmentsComponent} from './departments/departments.component'
import {ContractsComponent} from './contracts/contracts.component'


import {MdCardModule} from '@angular2-material/card'
import {MdButtonModule} from '@angular2-material/button'
import {MdIconModule} from '@angular2-material/icon'
import {MdMenuModule} from '@angular2-material/menu'
import {MdButtonToggleModule} from '@angular2-material/button-toggle'
import {MdCheckboxModule} from '@angular2-material/checkbox'
import {MdGridListModule} from '@angular2-material/grid-list';
import {MdInputModule} from '@angular2-material/input';
import {MdListModule} from '@angular2-material/list';
import {MdProgressBarModule} from '@angular2-material/progress-bar';
import {MdProgressCircleModule} from '@angular2-material/progress-circle';
import {MdRadioModule} from '@angular2-material/radio';
import {MdSidenavModule} from '@angular2-material/sidenav';
import {MdSliderModule} from '@angular2-material/slider';
import {MdSlideToggleModule} from '@angular2-material/slide-toggle';
import {MdTabsModule} from '@angular2-material/tabs';
import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdTooltipModule} from '@angular2-material/tooltip';


import {MdIconRegistry} from '@angular2-material/icon'

//routing
import {routing} from './app.routes';

@NgModule({
  imports:      [ 
    BrowserModule, 
    MdCardModule, MdButtonModule, MdIconModule,MdMenuModule,MdButtonToggleModule,MdCheckboxModule,MdGridListModule,MdInputModule,MdListModule,MdProgressBarModule,
    MdProgressCircleModule,MdRadioModule,MdSidenavModule,MdSliderModule,MdSlideToggleModule,MdTabsModule,MdToolbarModule,MdTooltipModule,
    FormsModule,
    HttpModule,
    routing
   ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    DepartmentsComponent,
    ContractsComponent
    ],
  bootstrap:    [ AppComponent ],
  providers:[MdIconRegistry]
})

export class AppModule { }
