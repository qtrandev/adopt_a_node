'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Report Schema
 */
var ReportSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  event_name: {
    type: String,
    required: true,
    trim: true
  },
  event_date: {
    type: Date,
    default: Date.now
  },
  participants: {
    type: String,
    required: true,
    trim: true
  },
  hours_per_participant: {
    type: String,
    required: true,
    trim: true
  },
  trash_bags_collected: {
    type: String,
    required: true,
    trim: true
  },
  sign_waiver: {
    type: String,
    required: true,
    trim: true
  },
  review_safety_sheet: {
    type: String,
    required: true,
    trim: true
  },
  call_311: {
    type: String,
    required: true,
    trim: true
  },
  problems_unusual_items: {
    type: String,
    required: true,
    trim: true
  },
  problems_items_explain: {
    type: String,
    required: false,
    trim: true
  },
  comments: {
    type: String,
    required: false,
    trim: true
  },
  group_name: {
    type: String,
    required: true,
    trim: true
  },
  group_leader: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

/**
 * Validations
 */
ReportSchema.path('event_name').validate(function(event_name) {
  return !!event_name;
}, 'Event Name cannot be blank');

ReportSchema.path('event_date').validate(function(event_date) {
  return !!event_date;
}, 'Event Date cannot be blank');

ReportSchema.path('participants').validate(function(participants) {
  return !!participants;
}, 'Participants cannot be blank');

ReportSchema.path('hours_per_participant').validate(function(hours_per_participant) {
  return !!hours_per_participant;
}, 'Hours Per Participant cannot be blank');

ReportSchema.path('trash_bags_collected').validate(function(trash_bags_collected) {
  return !!trash_bags_collected;
}, 'Trash Bags Collected cannot be blank');

ReportSchema.path('sign_waiver').validate(function(sign_waiver) {
  return !!sign_waiver;
}, 'Sign Waiver cannot be blank');

ReportSchema.path('review_safety_sheet').validate(function(review_safety_sheet) {
  return !!review_safety_sheet;
}, 'Review Safety Sheet cannot be blank');

ReportSchema.path('call_311').validate(function(call_311) {
  return !!call_311;
}, 'Call 311 cannot be blank');

ReportSchema.path('problems_unusual_items').validate(function(problems_unusual_items) {
  return !!problems_unusual_items;
}, 'Problems Unusual Items cannot be blank');

ReportSchema.path('group_name').validate(function(group_name) {
  return !!group_name;
}, 'Group Name cannot be blank');

ReportSchema.path('group_leader').validate(function(group_leader) {
  return !!group_leader;
}, 'Group Leader cannot be blank');

/**
 * Statics
 */
ReportSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};

mongoose.model('Report', ReportSchema);
