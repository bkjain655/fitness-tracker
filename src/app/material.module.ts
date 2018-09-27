import { NgModule } from "@angular/core";

import {   
    MatInputModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatDatepickerModule, 
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule
} from "@angular/material";

const modules = [
    MatInputModule,
    MatFormFieldModule, 
    MatButtonModule, 
    MatDatepickerModule, 
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule
];
@NgModule({
    imports : modules,
    exports : modules
})
export class MaterialModule{}