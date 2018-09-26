import { NgModule } from "@angular/core";

import {MatInputModule, MatFormFieldModule, MatButtonModule} from "@angular/material";
const modules = [MatInputModule, MatFormFieldModule, MatButtonModule]
@NgModule({
    imports : modules,
    exports : modules
})
export class MaterialModule{}