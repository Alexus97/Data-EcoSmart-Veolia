import mongoose from "mongoose";

const sensoresSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true, // agregar marcas de tiempo.
    }
);


export const Sens = mongoose.model('medicion', sensoresSchema);