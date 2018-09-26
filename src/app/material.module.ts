import { NgModule } from "@angular/core";

import {MatInputModule, MatFormFieldModule} from "@angular/material";
const modules = [MatInputModule, MatFormFieldModule]
@NgModule({
    imports : modules,
    exports : modules
})
export class MaterialModule{}