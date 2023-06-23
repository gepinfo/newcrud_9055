import * as mongoose from 'mongoose';
import treeaccountModel from '../models/daomodels/treeaccount';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class treeaccountDao {
    private treeaccount = treeaccountModel;
    constructor() { }
    
    public async GpDelete(treeaccountId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into treeaccountDao.ts: GpDelete');

    

    
    
    
    this.treeaccount.findByIdAndRemove(treeaccountId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from treeaccountDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(treeaccountData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into treeaccountDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(treeaccountData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.treeaccount.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from treeaccountDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(treeaccountData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into treeaccountDao.ts: GpSearchForUpdate');

    

    
    
    
    this.treeaccount.findOneAndUpdate({ _id: treeaccountData._id }, treeaccountData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from treeaccountDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(treeaccountData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into treeaccountDao.ts: GpUpdate');

    

    
    
    
    this.treeaccount.findOneAndUpdate({ _id: treeaccountData._id }, treeaccountData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from treeaccountDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(treeaccountId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into treeaccountDao.ts: GpGetEntityById');

    

    
    
    
    this.treeaccount.findById(treeaccountId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from treeaccountDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into treeaccountDao.ts: GpGetAllValues');

    

    
    
    
    this.treeaccount.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from treeaccountDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(treeaccountData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into treeaccountDao.ts: GpCreate');

    
                        if(treeaccountData.id == null || treeaccountData.id == undefined || treeaccountData.id == ''){
                            treeaccountData['id'] = Math.random().toString(36).slice(-6);
                        }let temp = new treeaccountModel(treeaccountData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from treeaccountDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(treeaccountData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into treeaccountDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.treeaccount.aggregate(([
                        { $match: { $and: [{ created_by: treeaccountData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from treeaccountDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllTree(callback){
    
    new CustomLogger().showLogger('info', 'Enter into treeaccountDao.ts: GpGetAllTree');

    

    
    
    
    this.treeaccount.aggregate(([ 
                    {
                        $match: {
                            parent_id: null
                        }
                    },
                    {
                        $graphLookup: {
                            from: "treeaccount",
                            startWith: "$id",
                            connectFromField: "id",
                            connectToField: "parent_id",
                            depthField: "level",
                            as: "children"
                        }
                    },
                    {
                        $unwind: {
                            path: "$children",
                            preserveNullAndEmptyArrays: true
                        }
                    },
                    {
                        $sort: {
                            "children.level": -1
                        }
                    },
                    {
                        $group: {"_id":"$_id","parent_id":{"$first":"$parent_id"},"category":{"$first":"$category"},"children":{"$push":"$children"},"name":{"$first":"$name"},"isExpanded":{"$first":"$isExpanded"},"isSelected":{"$first":"$isSelected"},"isLeaf":{"$first":"$isLeaf"},"id":{"$first":"$id"}}
                    },
                    {
                        $addFields: {
                            children: {
                                $reduce: {
                                    input: "$children",
                                    initialValue: {
                                        level: -1,
                                        presentChild: [],
                                        prevChild: []
                                    },
                                    in: {
                                        $let: {
                                            vars: {
                                                prev: {
                                                    $cond: [
                                                        {
                                                            $eq: [
                                                                "$$value.level",
                                                                "$$this.level"
                                                            ]
                                                        },
                                                        "$$value.prevChild",
                                                        "$$value.presentChild"
                                                    ]
                                                },
                                                current: {
                                                    $cond: [
                                                        {
                                                            $eq: [
                                                                "$$value.level",
                                                                "$$this.level"
                                                            ]
                                                        },
                                                        "$$value.presentChild",
                                                        []
                                                    ]
                                                }
                                            },
                                            in: {
                                                level: "$$this.level",
                                                prevChild: "$$prev",
                                                presentChild: {
                                                    $concatArrays: [
                                                        "$$current",
                                                        [
                                                            {
                                                                $mergeObjects: [
                                                                    "$$this",
                                                                    {
                                                                        children: {
                                                                            $filter: {
                                                                                input: "$$prev",
                                                                                as: "e",
                                                                                cond: {
                                                                                    $eq: [
                                                                                        "$$e.parent_id",
                                                                                        "$$this.id"
                                                                                    ]
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    {
                        $addFields: {
                            children: "$children.presentChild"
                        }
                    }
                ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from treeaccountDao.ts: GpGetAllTree');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}