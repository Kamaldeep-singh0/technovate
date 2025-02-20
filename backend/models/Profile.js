const mongoose = require("mongoose");

// Education Schema
const EducationSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  expectedGraduation: {
    type: String,
  }
});

// Experience Schema
const ExperienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  description: String,
  startDate: Date,
  endDate: Date,
  current: {
    type: Boolean,
    default: false
  }
});

// Project Schema
const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  technologies: [String],
  githubLink: String,
  liveLink: String,
  image: String
});

// Main Profile Schema
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    city: String,
    state: String
  },
  aboutMe: {
    type: String,
    maxLength: 500
  },
  skills: [{
    type: String,
    enum: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'Python',
      'Machine Learning',
      'AWS',
      'Docker',
      'Git',
      'GraphQL'
    ]
  }],
  socialLinks: {
    email: String,
    github: String,
    linkedin: String
  },
  education: [EducationSchema],
  experience: [ExperienceSchema],
  projects: [ProjectSchema],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the timestamps whenever the document is modified
ProfileSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Profile', ProfileSchema);