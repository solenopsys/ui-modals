import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from "./modal/modal.component";
//import {UtilsGlobalsModule} from "@hyperconverged/utils/globals";
// import {FuiFormsModule} from "@hyperconverged/fui-forms";

@NgModule({
  imports: [CommonModule,  ],//FuiFormsModule UtilsGlobalsModule
  exports: [
    ModalComponent
  ],
  declarations: [ModalComponent]
})
export class FuiModalsModule {
}
