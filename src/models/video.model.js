import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = mongoose.Schema({
    videoFile: {
        type: String,
        required: [true, "Video is Required"]
    },

    thumbnail: {
        type: String,
        required: [true, "Thumbnail is Required"]
    },

    title: {
        type: String,
        required: [true, "Title is missing"],
    },
     
    description: {
        type: String,
        required: [true, "Description is Required"],
        maxLength: [255, "Enter in 255 words"]
    },
    
    duration: {
        type: Number,
        required: true,
    },

    views: {
        type: Number,
        default: 0
    },

    isPublish: {
        type: Boolean,
        default: true,
    },

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }


}, {timestamps: true});

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)