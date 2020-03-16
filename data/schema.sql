DROP DATABASE IF EXISTS Shtiker_iso;
CREATE DATABASE Shtiker_iso;

USE Shtiker_iso;

DROP TABLE IF EXISTS providers;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS shows;

CREATE TABLE providers(
	id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	name varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    password varchar(35) NOT NULL,
    about varchar(2323) NOT NULL,
    payment varchar(1000) NULL,
    patreon varchar(1000) NULL,
    wp_title varchar(100) NOT NULL,
    webpage varchar(1000) NULL,
    video_channel varchar(3000) NUll,
    rsvp_attend varchar(3000) NUll,
    rsvp_perform varchar(3000) NUll,
    time_stamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	INDEX idx_events_userId (id)
);



CREATE TABLE Users(
	id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	name varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    password varchar(35) NOT NULL,
    rsvps varchar(6000) NUll,
    time_stamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	INDEX idx_events_userId (id)
);

CREATE TABLE shows(
	id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	event_name varchar(50) NOT NULL,
    host_name varchar(50) NOT NULL,
    host_id varchar(100) NOT NULL,
	provider_info varchar(3000) NULL,
    provider_payment varchar(3000) NUll,
    video_links varchar(3000) NUll,
	show_date date NOT NULL,
    start_time time(0) NULL,
    end_time time(0) NULL,
    time_stamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	INDEX idx_events_userId (id)
);

SELECT * FROM providers;
SELECT * FROM users;
SELECT * FROM shows;
