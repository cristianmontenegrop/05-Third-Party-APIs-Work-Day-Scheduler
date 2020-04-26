# 05 Third-Party APIs: Work Day Scheduler

Git hub Repo: https://github.com/cristianmontenegrop/05-Third-Party-APIs-Work-Day-Scheduler
Deployed project: https://cristianmontenegrop.github.io/05-Third-Party-APIs-Work-Day-Scheduler/

In this Work day scheduler several features have been added.

A local time and date has been added to the header using moment's API to provide us with the current date and time.

A set of time-blocks have been created for the office hours 9:00AM - 5:00PM
On each block, the user can write a note regarding pending tasks for the given time slot. 

All blocks are dinamically color coded, so they change depending on the hour of day the calendar is visited, gray for past blocks, red for present block, and green for future blocks.

On the right side of the blocs, there are blue colored buttons that save the information entered and stores it in the browser's memory storage, so regardless of refreshing or closing the window, that data will be stored safely.

If the calendar has been used, and after revisiting the user desires to clear the whole calendar, a prompt window will appear, and all data will be erased and window reloaded.