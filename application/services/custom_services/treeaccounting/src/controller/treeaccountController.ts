import { Request, Response } from 'express';
import { treeaccountService } from '../service/treeaccountService';
import { CustomLogger } from '../config/Logger'
let treeaccount = new treeaccountService();

export class treeaccountController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    treeaccount.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into treeaccountController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from treeaccountController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    treeaccount.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into treeaccountController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from treeaccountController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    treeaccount.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into treeaccountController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from treeaccountController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    treeaccount.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into treeaccountController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from treeaccountController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    treeaccount.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into treeaccountController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from treeaccountController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    treeaccount.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into treeaccountController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from treeaccountController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    treeaccount.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into treeaccountController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from treeaccountController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    treeaccount.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into treeaccountController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from treeaccountController.ts: GpGetNounCreatedBy');
    })}
public GpGetAllTree(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    treeaccount.GpGetAllTree(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into treeaccountController.ts: GpGetAllTree');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from treeaccountController.ts: GpGetAllTree');
    })}


}