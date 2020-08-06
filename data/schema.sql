DROP DATABASE IF EXISTS Shtiker_iso;
CREATE DATABASE Shtiker_iso;

USE Shtiker_iso;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS shows;
DROP TABLE IF EXISTS episodes;

CREATE TABLE users(
	id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
	user_name varchar(50) NOT NULL,
    user_type varchar(50) NOT NULL,
    mhswitch boolean,
	dob date NOT NULL,
    email varchar(50) NOT NULL,
    password varchar(150) NOT NULL,
    title varchar(100) NULL,
    about varchar(1500) NULL,
    p_img varchar(500) NULL,
	b_img varchar(500) NULL,   
    category varchar(50) NULL,
    sub_category varchar(50) NOT NULL,
    payment varchar(1000) NULL,
    patreon varchar(1000) NULL,
    wp_title varchar(100) NOT NULL,
    webpage varchar(1000) NULL,
    rsvp_attend varchar(2000) NUll,
    rsvp_perform varchar(2000) NUll,
    verified boolean,
    time_stamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	INDEX idx_events_userId (id)
);

CREATE TABLE shows(
	id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	show_name varchar(50) NOT NULL,
    show_type varchar(50) NOT NUll,
    about varchar(1500) NOT NULL,
    img varchar(300) NOT NULL,
    img_b varchar(300) NOT NULL,
    category varchar(50) NOT NULL,
    sub_category varchar(50) NOT NULL,
    video_type varchar(20) NULL,
    v_link varchar(400) NULL,
    host_id varchar(100) NOT NULL,
    host_name varchar(50) NULL,
    host_img varchar(300) NULL,
    credits varchar(1000) NULL,
    show_date date NULL,
    start_time time(0) NULL,
    end_time time(0) NULL,
    price INT(0) NULL,
    payment varchar(1000) NUll,
    patreon varchar(1000) NUll,
    wp_title varchar(80) NUll,
    webpage varchar(1000) NUll,
    eighteen_plus boolean,
	booked boolean,
    paid boolean,
    canceled boolean,
    verified boolean,
    time_stamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	INDEX idx_events_showId (id)
);


CREATE TABLE episodes(
	id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
    show_id varchar(100) NULL,
    user_id varchar(100),
    epi_name varchar(50) NOT NULL,
    about varchar(1500) NOT NULL,
    img varchar(300) NOT NULL,
    video_type VARCHAR(20) NOT NULL,
    v_link varchar(400) NULL,
    credits varchar(300) NULL,
    show_name varchar(50) NOT NULL,
    host_name varchar(50) NOT NULL,
    category varchar(50) NOT NULL,
    sub_category varchar(50) NOT NULL,
    paid boolean,
    price INT(0) NULL,
    epi_date date NULL,
    start_time time(0) NULL,
    end_time time(0) NULL,
    eighteen_plus boolean,
    verified boolean,
	time_stamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	INDEX idx_events_epiId (id)
);

SELECT * FROM episodes;
SELECT * FROM users;
SELECT * FROM users WHERE user_type='host' AND entertain=1 OR mhswitch=1 AND user_type='mod' AND entertain=1;
SELECT * FROM shows;
SELECT * FROM shows ORDER BY RAND() LIMIT 12;
SELECT * FROM shows WHERE show_type="episodical" ORDER BY id DESC LIMIT 12;
SELECT * FROM shows WHERE show_type="one_off" ORDER BY id DESC LIMIT 12;
SELECT * FROM shows ORDER BY id DESC LIMIT 12;
SELECT * FROM shows ORDER BY time_stamp DESC;