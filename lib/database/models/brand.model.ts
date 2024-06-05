import { Document, Schema, model, models } from "mongoose";

// export interface ICategory extends Document {
//   _id: string;
//   name: string;
// }

const brandSchema = new Schema({
  name: { type: String, required: true, unique: true },
  category:{
    type:Schema.Types.ObjectId,ref:'Category'
  }

})

const Brand = models.Brand || model('Brand', brandSchema);

export default Brand;