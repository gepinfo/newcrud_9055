import { Request, Response } from 'express';
import {treeaccountDao} from '../dao/treeaccountDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let treeaccount = new treeaccountDao();

export class treeaccountService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into treeaccountService.ts: GpDelete')
     let  treeaccountId = req.params.id;
     treeaccount.GpDelete(treeaccountId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from treeaccountService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into treeaccountService.ts: GpSearch')
     let  treeaccountData = req.query;
     treeaccount.GpSearch(treeaccountData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from treeaccountService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into treeaccountService.ts: GpSearchForUpdate')
     let  treeaccountData = req.body;
     treeaccount.GpSearchForUpdate(treeaccountData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from treeaccountService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into treeaccountService.ts: GpUpdate')
     let  treeaccountData = req.body;
     treeaccount.GpUpdate(treeaccountData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from treeaccountService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into treeaccountService.ts: GpGetEntityById')
     let  treeaccountId = req.params.id;
     treeaccount.GpGetEntityById(treeaccountId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from treeaccountService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into treeaccountService.ts: GpGetAllValues')
     
     treeaccount.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from treeaccountService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into treeaccountService.ts: GpCreate')
     let  treeaccountData = req.body;
     treeaccount.GpCreate(treeaccountData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from treeaccountService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into treeaccountService.ts: GpGetNounCreatedBy')
     let  treeaccountData = { created_by: req.query.createdby };
     treeaccount.GpGetNounCreatedBy(treeaccountData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from treeaccountService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
public  GpGetAllTree(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into treeaccountService.ts: GpGetAllTree')
     
     treeaccount.GpGetAllTree((response)=>{
             new CustomLogger().showLogger('info', 'Exit from treeaccountService.ts: GpGetAllTree')
         callback(response);
         });
    }
    
    
    
    
}