import { Template } from 'meteor/templating';

import { Friend } from '../api/tasks.js';

import './friend.html';

Template.friend_list.helpers({
  friends() {
	return Friend.find({id: Session.get("id")});
  }, 
}); 

Template.friend_list.events({
  'submit .remfriend'(event){
  
  event.preventDefault();
  
  var target = event.target;
  var fid = target.remf.value;

  Meteor.call('friend.remove', Session.get("id"), fid);
  },
});