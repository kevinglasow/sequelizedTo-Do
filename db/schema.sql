-- Create the todo_db database --
CREATE DATABASE todo_db;
USE todo_db;

-- Create a checklist table with the required fields --
CREATE TABLE checklist
(
	id int NOT NULL AUTO_INCREMENT,
	task_name varchar(255) NOT NULL,
	completed BOOLEAN DEFAULT false,
  	PRIMARY KEY(id)
);
