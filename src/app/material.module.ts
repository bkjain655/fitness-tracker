import { NgModule } from "@angular/core";

import {   
    MatInputModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatDatepickerModule, 
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule
} from "@angular/material";

const modules = [
    MatInputModule,
    MatFormFieldModule, 
    MatButtonModule, 
    MatDatepickerModule, 
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule
];
@NgModule({
    imports : modules,
    exports : modules
})
export class MaterialModule{}