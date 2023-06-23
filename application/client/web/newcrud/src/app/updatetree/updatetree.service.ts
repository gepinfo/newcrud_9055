import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class UpdatetreeService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpUpdate(treeaccount:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.put(this.sharedService.WEB_API + '/treeaccount' + `?jwt_token=${jwt_token}`, treeaccount);
    }
    GpDelete(treeaccountId:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.delete(this.sharedService.WEB_API + '/treeaccount/' + treeaccountId + `?jwt_token=${jwt_token}`);
    }
    GpGetEntityById(treeaccountId:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.get(this.sharedService.WEB_API + '/treeaccount/' + treeaccountId + `?jwt_token=${jwt_token}`);
    }
}