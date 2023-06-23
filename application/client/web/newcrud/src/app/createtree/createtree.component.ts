import { Component, OnInit, ViewChild } from '@angular/core';
import { CreatetreeService } from './createtree.service';
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-createtree',
  templateUrl: './createtree.component.html',
  styleUrls: ['./createtree.component.scss'],
})

export class CreatetreeComponent implements OnInit {
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
        private createtreeService: CreatetreeService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.treeaccount.created_by = sessionStorage.getItem('email') || ''; 
        
            this.activatedRoute.queryParams.subscribe((params:any) => { 
                this.treeaccount.parent_id = params['parent_id']
            });


    
    }
    GpCreate() {
        this.createtreeService.GpCreate(this.treeaccount).subscribe((data:any) => {
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


}