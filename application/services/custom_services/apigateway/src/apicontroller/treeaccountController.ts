import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdapter }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class treeaccountController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.delete('/treeaccount/:id', this.GpDelete);
this.router.get('/treeaccount/get/search', this.GpSearch);
this.router.put('/treeaccount/get/update', this.GpSearchForUpdate);
this.router.put('/treeaccount', this.GpUpdate);
this.router.get('/treeaccount/:id', this.GpGetEntityById);
this.router.get('/treeaccount', this.GpGetAllValues);
this.router.post('/treeaccount', this.GpCreate);
this.router.get('/treeaccount/userid/created_by', this.GpGetNounCreatedBy);
this.router.get('/treeaccount/get/tree', this.GpGetAllTree);
        //#@gepdelimeterone@#
        //#@ssofacebookapiroute@#
        //#@ssogithubapiroute@#
        //#@gepbankingapiroute@#
    }

public GpDelete(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into treeaccountController.ts: GpDelete');
        new ApiAdapter().delete(Constant.TREEACCOUNTINGURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from treeaccountController.ts: GpDelete');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into treeaccountController.ts: GpSearch');
        new ApiAdapter().get(Constant.TREEACCOUNTINGURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from treeaccountController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearchForUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into treeaccountController.ts: GpSearchForUpdate');
        new ApiAdapter().put(Constant.TREEACCOUNTINGURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from treeaccountController.ts: GpSearchForUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into treeaccountController.ts: GpUpdate');
        new ApiAdapter().put(Constant.TREEACCOUNTINGURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from treeaccountController.ts: GpUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetEntityById(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into treeaccountController.ts: GpGetEntityById');
        new ApiAdapter().get(Constant.TREEACCOUNTINGURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from treeaccountController.ts: GpGetEntityById');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into treeaccountController.ts: GpGetAllValues');
        new ApiAdapter().get(Constant.TREEACCOUNTINGURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from treeaccountController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into treeaccountController.ts: GpCreate');
        new ApiAdapter().post(Constant.TREEACCOUNTINGURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from treeaccountController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounCreatedBy(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into treeaccountController.ts: GpGetNounCreatedBy');
        new ApiAdapter().get(Constant.TREEACCOUNTINGURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from treeaccountController.ts: GpGetNounCreatedBy');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllTree(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into treeaccountController.ts: GpGetAllTree');
        new ApiAdapter().get(Constant.TREEACCOUNTINGURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from treeaccountController.ts: GpGetAllTree');
        }).catch(err => {
            res.send(err);
        });
    }

    //#@gepdelimeter@#

    //#@apifacebooklogin@#

    //#@apigithublogin@#

    //#@gepbankinglogin@#








}

