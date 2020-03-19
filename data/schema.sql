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
    event_img varchar(300) NOT NULL,
    catagory varchar(50) NOT NULL,
    sub_catagory varchar(50) NOT NULL,
    host_name varchar(50) NOT NULL,
    host_id varchar(100) NOT NULL,
    host_img varchar(300) NOT NULL,
	provider_info varchar(3000) NULL,
    payment varchar(1000) NUll,
    patreon varchar(1000) NUll,
    wpTitle varchar(80) NUll,
    webpage varchar(1000) NUll,
    video_links varchar(3000) NUll,
	show_date date NOT NULL,
    start_time time(0) NULL,
    end_time time(0) NULL,
    eighteen_plus boolean,
	booked boolean,
    confirmed boolean,
    canceled boolean,
    time_stamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	INDEX idx_events_userId (id)
);

INSERT INTO users(user_name, user_type, dob, email, password, about, p_img ,  b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform) VALUES('Bandi', "user","1988-09-01",'email@email.com', 'cpdsihfn87','Artist in the arts and what not and such'," https://images.unsplash.com/photo-1584464502267-2fa077e45052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"," https://images.unsplash.com/photo-1584463973015-ed1aa6701c6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80","1|showname,2|showname",'paymentlink','Patreon link','by our album here or visit our webpage', 'Webpage link', 'videochanel', '1.Mondo! blaa.4-23-20.12:23pm.2:23pm','1.Mondo! blaa.4-23-20.12:23pm.2:23pm' );
INSERT INTO users(user_name, user_type, dob, email, password, about, p_img ,  b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform) VALUES('Angela', "user","2010-09-01", 'email@email.com', 'cpdsihfn87','Artist in the arts and what not and such'," https://images.unsplash.com/photo-1584464502267-2fa077e45052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"," https://images.unsplash.com/photo-1584463973015-ed1aa6701c6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80","1|showname,2|showname",'paymentlink','Patreon link','by our album here or visit our webpage', 'Webpage link', 'videochanel', '1.Mondo! blaa.4-23-20.12:23pm.2:23pm','1.Mondo! blaa.4-23-20.12:23pm.2:23pm' );
INSERT INTO users(user_name, user_type, dob, email, password, about, p_img ,  b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform) VALUES('Zev', "mod","2000-09-01", 'email@email.com', 'cpdsihfn87','Artist in the arts and what not and such'," https://images.unsplash.com/photo-1584464502267-2fa077e45052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"," https://images.unsplash.com/photo-1584463973015-ed1aa6701c6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80","1|showname,2|showname",'paymentlink','Patreon link','by our album here or visit our webpage', 'Webpage link', 'videochanel', '1.Mondo! blaa.4-23-20.12:23pm.2:23pm','1.Mondo! blaa.4-23-20.12:23pm.2:23pm' );
INSERT INTO users(user_name, user_type, dob, email, password, about, p_img ,  b_img, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform) VALUES('Mondo', "host","2000-09-01", 'email@email.com', 'cpdsihfn87','Artist in the arts and what not and such'," https://images.unsplash.com/photo-1584464502267-2fa077e45052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"," https://images.unsplash.com/photo-1584463973015-ed1aa6701c6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80","1|showname,2|showname",'paymentlink','Patreon link','by our album here or visit our webpage', 'Webpage link', 'videochanel', '1.Mondo! blaa.4-23-20.12:23pm.2:23pm','1.Mondo! blaa.4-23-20.12:23pm.2:23pm' );


INSERT INTO spect(name, email, password, rsvps) VALUES('Menti', 'email@email.com', 'cpdsihfn87', "1.Mondo! blaa.4-23-20.12:23pm.2:23pm");
INSERT INTO spect(name, email, password, rsvps) VALUES('bumble', 'email@email.com', 'cpdsihfn87', "1.Mondo! blaa.4-23-20.12:23pm.2:23pm");

INSERT INTO shows(event_name,event_img, catagory, sub_catagory, host_name, host_id, host_img, provider_info, payment, patreon, wpTitle, webpage, video_links, show_date, start_time, end_time, eighteen_plus, booked, confirmed, canceled) VALUES('Mondo! blaa'," https://images.unsplash.com/photo-1584463973015-ed1aa6701c6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80","entertainment", "webisode", 'Bandi', '1'," https://images.unsplash.com/photo-1584464502267-2fa077e45052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80", "1|Bandi|paymentLink|videoLink,2|Menti|paymentlink|videoLink", "paymentlink","patreonLink","Get shwag here", "weblink.com", "videoLink, videolink", '2020-09-01', '11:27:00', '12:27:00', false, true, true, false);


SELECT * FROM users;
SELECT * FROM spect;
SELECT * FROM shows;