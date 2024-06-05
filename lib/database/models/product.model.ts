import { Schema, model, models, Document } from "mongoose";

// // Define the Ticket interface
// export interface Modal {
//     modal: string;
//     price: number;
//     amount: number;
// }

// // Define the interface for Event, extending Mongoose's Document interface
// export interface IEvent extends Document {
//     _id:string
//     title: string;
//     description?: string;
//     location?: string;  // Ensure this matches the Mongoose schema definition
//     organizer?: string;
//     createdAt: Date;
//     imageUrl: string;
//     startDateTime: Date;
//     prices: Ticket[];
//     admin: { _id: string; firstName: string; lastName: string };
// }

// Define the priceSchema
const modalSchema = new Schema({
    modal: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

// Define the eventSchema
const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    },
    baseprice:{
        type:Number,
        required:true
    },
   
    
    images: [{
        type: String,
        required: true
    }],
    
    modals: [modalSchema],
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    brand:{
        type:Schema.Types.ObjectId,ref:'Brand'
    }

    
});

// Create the Event model
const Product = models.Product || model('Product', productSchema);

export default Product;
