import { Component, OnInit, ViewChild } from '@angular/core';
import { UpdatetreeService } from './updatetree.service';
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-updatetree',
  templateUrl: './updatetree.component.html',
  styleUrls: ['./updatetree.component.scss'],
})

export class UpdatetreeComponent implements OnInit {
    queryId: any;
    public treeaccount:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        isExpanded: '',
        isSelected: '',
        isLeaf: '',
        parent_id: '',
        id: '',
        category: '',
    }




    constructor (
        private updatetreeService: UpdatetreeService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.treeaccount.created_by = sessionStorage.getItem('email') || ''; 
        
            this.activatedRoute.queryParams.subscribe((params:any) => { 
 this.queryId = params['id'];
            });


        this.GpGetEntityById();
    
    }
    GpUpdate() {
        this.updatetreeService.GpUpdate(this.treeaccount).subscribe((data:any) => {
            this.treeaccount.name = ''
 	 	this.treeaccount.isExpanded = ''
 	 	this.treeaccount.isSelected = ''
 	 	this.treeaccount.isLeaf = ''
 	 	this.treeaccount.parent_id = ''
 	 	this.treeaccount.id = ''
 	 	this.treeaccount.category = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpDelete() {
        this.updatetreeService.GpDelete(this.queryId).subscribe((data:any) => {
            this.GpGetEntityById();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpGetEntityById() {
        this.updatetreeService.GpGetEntityById(this.queryId).subscribe((data:any) => {
            this.treeaccount = data
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}