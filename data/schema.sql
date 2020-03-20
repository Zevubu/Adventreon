DROP DATABASE IF EXISTS Shtiker_iso;
CREATE DATABASE Shtiker_iso;

USE Shtiker_iso;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS shows;
DROP TABLE IF EXISTS episodes;

CREATE TABLE users(
	id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	user_name varchar(50) NOT NULL,
    user_type varchar(50) NOT NULL,
	dob date NOT NULL,
    email varchar(50) NOT NULL,
    password varchar(35) NOT NULL,
    title varchar(100) NOT NULL,
    about varchar(3000) NOT NULL,
    p_img varchar(500) NOT NULL,
	b_img varchar(500) NOT NULL,
    shows varchar(2000) NUll,
    payment varchar(1000) NULL,
    patreon varchar(1000) NULL,
    wp_title varchar(100) NOT NULL,
    webpage varchar(1000) NULL,
    video_channel varchar(2000) NUll,
    rsvp_attend varchar(2000) NUll,
    rsvp_perform varchar(2000) NUll,
    entertain boolean,
    couns boolean,
    relig boolean,
    time_stamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	INDEX idx_events_userId (id)
);


CREATE TABLE shows(
	id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	show_name varchar(50) NOT NULL,
    img varchar(300) NOT NULL,
    img_b varchar(300) NOT NULL,
    catagory varchar(50) NOT NULL,
    sub_catagory varchar(50) NOT NULL,
    episode_ids varchar(1000) NUll,
    host_id varchar(100) NOT NULL,
    host_name varchar(50) NOT NULL,
    host_img varchar(300) NOT NULL,
    payment varchar(1000) NUll,
    patreon varchar(1000) NUll,
    wpTitle varchar(80) NUll,
    webpage varchar(1000) NUll,
    eighteen_plus boolean,
	booked boolean,
    paid boolean,
    canceled boolean,
	entertain boolean,
    couns boolean,
    relig boolean,
    time_stamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	INDEX idx_events_userId (id)
);


CREATE TABLE episodes(
	id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
    epi_name varchar(50) NOT NULL,
    show_id varchar(3000) NULL,
    show_name varchar(50) NOT NULL,
    img varchar(300) NOT NULL,
	catagory varchar(50) NOT NULL,
    sub_catagory varchar(50) NOT NULL,
    host_id varchar(100) NOT NULL,
	host_name varchar(50) NOT NULL,
    host_img varchar(300) NOT NULL,
	credits varchar(2000) NULL,
    price  varchar(20) NOT NULL,
    payment varchar(200) NUll,
    patreon varchar(200) NUll,
    wpTitle varchar(80) NUll,
    webpage varchar(1000) NUll,
    v_link varchar(400) NUll,
	show_date date NOT NULL,
    start_time time(0) NULL,
    end_time time(0) NULL,
    eighteen_plus boolean,
	booked boolean,
    paid boolean,
    canceled boolean,
	time_stamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	INDEX idx_events_userId (id)
);



SELECT * FROM users;
SELECT * FROM shows;
SELECT * FROM episodes;