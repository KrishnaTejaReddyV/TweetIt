import { Template } from 'meteor/templating';

import { Tweet } from '../api/tasks.js';

import './utcard.html'; 
import './friend.js'; 

Template.utcard.helpers({
  u_posts() {
	return Tweet.find({uid : Session.get("id")});
  },
});

Template.utcard.events({
  'submit .remtitle'(event){
  
  event.preventDefault();
  
  var target = event.target;
  var title = target.rem.value;

  Meteor.call('tweet.remove', Session.get("id"), title);
  },
});
