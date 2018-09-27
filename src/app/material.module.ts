import { NgModule } from "@angular/core";

import {   
    MatInputModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatDatepickerModule, 
    MatNativeDateModule,
    MatCheckboxModule
} from "@angular/material";

const modules = [
    MatInputModule,
    MatFormFieldModule, 
    MatButtonModule, 
    MatDatepickerModule, 
    MatNativeDateModule,
    MatCheckboxModule
];
@NgModule({
    imports : modules,
    exports : modules
})
export class MaterialModule{}