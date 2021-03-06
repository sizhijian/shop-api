/**
 * Created by dell on 2017/6/26.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var articlesSchema = new Schema({
    title: String,
    author: String,
    type: String,
    summary: {
      body: String,
      more: Boolean
    },
    body: String,
    comments: [{
        reviewer: String,
        body: String,
        date: { type: Date, default: Date.now },
        avatarUrl: String,
        isAuthor: Boolean
    }],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    isAuthor: Boolean,
    avatarUrl: String
    // hidden: Boolean,
    // meta: {
    //   votes: Number,
    //   favs: Number
    // }
}, {
    versionKey: false,
    timestamps: { createdAt: 'created_at'}
});
module.exports = articlesSchema;
