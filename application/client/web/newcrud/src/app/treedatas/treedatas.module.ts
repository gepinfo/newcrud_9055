import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreedatasComponent } from './treedatas.component';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgSelectModule,
        FormsModule, ReactiveFormsModule,
        NzTreeModule,
        NzIconModule,
        RouterModule.forChild([
            { path: '', component: TreedatasComponent },
        ])
    ],
    declarations: [
        TreedatasComponent,
    ]
})
export class TreedatasModule { }