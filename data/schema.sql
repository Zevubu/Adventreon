DROP DATABASE IF EXISTS Shtiker_iso;
CREATE DATABASE Shtiker_iso;

USE Shtiker_iso;


DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS spect;
DROP TABLE IF EXISTS shows;

CREATE TABLE users(
	id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	user_name varchar(50) NOT NULL,
    user_type varchar(50) NOT NULL,
	dob date NOT NULL,
    email varchar(50) NOT NULL,
    password varchar(35) NOT NULL,
    about varchar(3000) NOT NULL,
    shows varchar(2000) NUll,
    payment varchar(1000) NULL,
    patreon varchar(1000) NULL,
    wp_title varchar(100) NOT NULL,
    webpage varchar(1000) NULL,
    video_channel varchar(2000) NUll,
    rsvp_attend varchar(2000) NUll,
    rsvp_perform varchar(2000) NUll,
    time_stamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	INDEX idx_events_userId (id)
);



CREATE TABLE spect(
	id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	name varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    password varchar(35) NOT NULL,
    rsvps varchar(3000) NUll,
    time_stamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	INDEX idx_events_userId (id)
);

CREATE TABLE shows(
	id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	event_name varchar(50) NOT NULL,
    host_name varchar(50) NOT NULL,
    host_id varchar(100) NOT NULL,
	provider_info varchar(3000) NULL,
    payment varchar(1000) NUll,
    patreon varchar(1000) NUll,
    wpTitle varchar(80) NUll,
    webpage varchar(1000) NUll,
    video_links varchar(3000) NUll,
	show_date date NOT NULL,
    start_time time(0) NULL,
    end_time time(0) NULL,
    time_stamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	INDEX idx_events_userId (id)
);

SELECT * FROM users;
SELECT * FROM spect;
SELECT * FROM shows;