To Do:
- [ ] Chores list is backbone view
- [ ] Can generate more chores.
- [ ] User can mark chore complete on the day it is due.
- [ ] Or also the day after it is due. Two days later it expires.
- [ ] Assign button for admin works.
- [ ] User names should be links to show pages.

Done:
- [x] Volunteer button for user assigns them chore.
- [x] Assign all chores only visible for admin.
- [x] Sign up/in share same form
- [x] Style log in and add link to sign up
- [x] All pages require log in
- [x] Need link in navbar for chores
- [x] Need link in navbar for users

**Admin**
- [ ] Admin can see what chores need to be done
- [ ] Not done chores alert admin
- [ ] Users need a name, cohort, and info on their moved in status
- [ ] Admin can change peoples residential status
- [ ] admin can generate user-chores with null user id based on freq

**Users**
- [ ] System emails user if they have a chore to do that day.
- [ ] People can 'move out' and be removed from the chore list
- [ ] People can mark chores done
- [ ] Add associations

**Chores**
- [ ] Chores can be saved without assignee
- [ ] Root page should show assigned chores with dates
- [ ] Admin can assign people chores, create chores
- [ ] Admin can remove chores from people
- [ ] Chores should have a frequency
- [ ] Show page of chore should show next scheduled occurences and assignee
- [ ] add validations
- [ ] add associations

ideas:
screens:
1. User screen shows currently assigned chores. Can also see past chores.
2. Chore screen shows all currently assigned and upcoming chores.
3. Admin screen allows them to randomly assign all chores
4. People can volunteer for unnassigned tasks.
5. Tasks not volunteered for within a week are randomly assigned.
6. All signed in users see the same hope page, upcoming chores and their
   assigned users. If the user is an admin, the button says 'assign', otherwise
   volunteer.
7. index has buttons for assign if admin, volunteer if user

simon:
twilio integration? could send a text
not random, want score to make sure it's fair

flarnie:
- [ ] Users have a name, cohort, and info on their moved in status
- [ ] Links to user show pages on 'peeps'
- [ ] Admin can make new chores
- [ ] Admin can assign chores
- [ ] Style with a orange theme and blue highlights 
