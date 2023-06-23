
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const treeaccountSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   isExpanded: { type: Boolean },
   isSelected: { type: Boolean },
   isLeaf: { type: Boolean },
   parent_id: { type: String },
   id: { type: String },
   category: { type: String }
})

const treeaccountModel = mongoose.model('treeaccount', treeaccountSchema, 'treeaccount');
export default treeaccountModel;
