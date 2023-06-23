import { Request, Response, NextFunction } from "express";
import { treeaccountController } from '../controller/treeaccountController';


export class Routes {
    private treeaccount: treeaccountController = new treeaccountController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/treeaccount/:id').delete(this.treeaccount.GpDelete);
app.route('/treeaccount/get/search').get(this.treeaccount.GpSearch);
app.route('/treeaccount/get/update').put(this.treeaccount.GpSearchForUpdate);
app.route('/treeaccount').put(this.treeaccount.GpUpdate);
app.route('/treeaccount/:id').get(this.treeaccount.GpGetEntityById);
app.route('/treeaccount').get(this.treeaccount.GpGetAllValues);
app.route('/treeaccount').post(this.treeaccount.GpCreate);
app.route('/treeaccount/userid/created_by').get(this.treeaccount.GpGetNounCreatedBy);
app.route('/treeaccount/get/tree').get(this.treeaccount.GpGetAllTree);
     }

}