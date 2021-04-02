import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TinhCbbComponent } from './tinh-cbb/tinh-cbb.component';
import { HaiHeaderComponent } from './hai-header/hai-header.component';
import { RouterModule } from '@angular/router';
import { ListDataComponent } from './list-data/list-data.component';
import { EditHuyenComponent } from './edit-huyen/edit-huyen.component';
import { EditTinhComponent } from './edit-tinh/edit-tinh.component';

@NgModule({
  declarations: [TinhCbbComponent, HaiHeaderComponent, ListDataComponent, EditHuyenComponent, EditTinhComponent],
  exports:[
    TinhCbbComponent,
    HaiHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: 'list-data', component: ListDataComponent},
      {path: 'edit-tinh', component: EditTinhComponent},
      {path: 'edit-huyen', component: EditHuyenComponent},

    ]),
  ]
})
export class TinhHuyenModule { }
