/* Genre mongoose model */
const mongoose = require('mongoose')

const Review = require('./Review')

// Reviews will be embedded in the Playlist model
const PlaylistSchema = new mongoose.Schema({
	listname: {
		type: String,
		required: true,
        trim: true,
		maxlegth: 50,
        unique: true
	},
	username: {
		type: String,
		required: true,
        trim: true,
		maxlegth: 50,
        unique: true
	},
    userid: {
		type: String,
		required: true
    },
	visible: {
        type: String, // 1 can be seen, 0 cannot
        required: true,
        default: 0
    },
    tracks: {
        type: Array,
        required: true
    },
    lastModifiedTime: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
        maxlegth: 200
    },
    reviews: {
        type: Array,
        required: false,
        default: [Review]
    },
    rating: {
        type: String,
        required: false
    },
    numberOfRatings: {
        type: String,
        required: false
    },
    totalPlaytime: {
        type: String,
        required: false
    }
})
const Playlist = mongoose.model('Playlist', PlaylistSchema);
module.exports = { Playlist }