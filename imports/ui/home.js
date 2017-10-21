import { Template } from 'meteor/templating';

import './home.html';

import { Tweet } from '../api/tasks.js';
import { Friend } from '../api/tasks.js';
import { User } from '../api/tasks.js';

import './ftcard.js';


Template.home.helpers({
  uid() {
	return Session.get("id");
  }, 
  friend_count() {
	return Friend.find({id: Session.get("id")}).count();
  }, 
  post_count() {
	return Tweet.find({uid: Session.get("id")}).count();
  }, 
  loggedin() {
	return Session.get("login") == 'loggedin';
  }, 
});


Template.home.events({
  'submit .add_post'(event){
  
  event.preventDefault();
  
  const target = event.target;
  const title = target.title.value;
  const message = target.message.value;

	Tweet.insert({
      uid: Session.get("id"),
	  t_title: title,
	  t_message: message,
      createdAt: new Date(), 
    });

	target.title.value = '';
	target.message.value = '';
  },
  
  'submit .add_friend'(event) {
  
  event.preventDefault();
  
  const target = event.target;
  const f_id = target.fsearch.value;
 
  var exist = User.find({id : f_id}).count();
  var f_exist = Friend.find({id:Session.get("id"), u_friend: f_id}).count();
  if(exist!=0 && f_exist==0)
  {
  Friend.insert({
		  id: Session.get("id"),
		  u_friend: f_id, 
		});
	}
	target.fsearch.value = '';
  },
  
  'click .logout'(event) {
	Session.set('id', '');
	Session.set('login', 'loggedout');
  },
});
