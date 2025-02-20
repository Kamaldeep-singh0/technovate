const mongoose = require("mongoose");

// Comment sub-schema
const CommentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  replies: [{
    content: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: { type: [String], required: true },
  githubLink: { type: String },
  liveLink: { type: String },
  
  // Rating system
  rating: {
    average: { type: Number, default: 0 },
    votes: [{
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      value: { type: Number, min: 1, max: 5, required: true }
    }]
  },
  
  // Likes system
  likes: {
    count: { type: Number, default: 0 },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
  },
  
  // Comments system
  comments: [CommentSchema],
  
  // Media
  media: [{
    type: { type: String, enum: ['image', 'video'], required: true },
    url: { type: String, required: true },
    thumbnail: { type: String }, // Thumbnail for videos
    title: { type: String },
    description: { type: String }
  }],
  
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

// Virtual for calculating average rating
ProjectSchema.virtual('averageRating').get(function() {
  if (this.rating.votes.length === 0) return 0;
  return this.rating.votes.reduce((acc, vote) => acc + vote.value, 0) / this.rating.votes.length;
});

// Pre-save middleware to update average rating
ProjectSchema.pre('save', function(next) {
  if (this.rating.votes.length > 0) {
    this.rating.average = this.rating.votes.reduce((acc, vote) => acc + vote.value, 0) / this.rating.votes.length;
  }
  next();
});

module.exports = mongoose.model("Project", ProjectSchema);