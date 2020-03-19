INSERT INTO users(user_name, user_type, dob, email, password, about, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform) VALUES('Bandi', "user","1988-09-01",'email@email.com', 'cpdsihfn87','Artist in the arts and what not and such',"1|showname,2|showname",'paymentlink','Patreon link','by our album here or visit our webpage', 'Webpage link', 'videochanel', '1.Mondo! blaa.4-23-20.12:23pm.2:23pm','1.Mondo! blaa.4-23-20.12:23pm.2:23pm' );
INSERT INTO users(user_name, user_type, dob, email, password, about, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform) VALUES('Angela', "user","2010-09-01", 'email@email.com', 'cpdsihfn87','Artist in the arts and what not and such',"1|showname,2|showname",'paymentlink','Patreon link','by our album here or visit our webpage', 'Webpage link', 'videochanel', '1.Mondo! blaa.4-23-20.12:23pm.2:23pm','1.Mondo! blaa.4-23-20.12:23pm.2:23pm' );
INSERT INTO users(user_name, user_type, dob, email, password, about, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform) VALUES('Zev', "mod","2000-09-01", 'email@email.com', 'cpdsihfn87','Artist in the arts and what not and such',"1|showname,2|showname",'paymentlink','Patreon link','by our album here or visit our webpage', 'Webpage link', 'videochanel', '1.Mondo! blaa.4-23-20.12:23pm.2:23pm','1.Mondo! blaa.4-23-20.12:23pm.2:23pm' );
INSERT INTO users(user_name, user_type, dob, email, password, about, shows, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform) VALUES('Mondo', "host","2000-09-01", 'email@email.com', 'cpdsihfn87','Artist in the arts and what not and such',"1|showname,2|showname",'paymentlink','Patreon link','by our album here or visit our webpage', 'Webpage link', 'videochanel', '1.Mondo! blaa.4-23-20.12:23pm.2:23pm','1.Mondo! blaa.4-23-20.12:23pm.2:23pm' );


INSERT INTO spect(name, email, password, rsvps) VALUES('Menti', 'email@email.com', 'cpdsihfn87', "1.Mondo! blaa.4-23-20.12:23pm.2:23pm");
INSERT INTO spect(name, email, password, rsvps) VALUES('bumble', 'email@email.com', 'cpdsihfn87', "1.Mondo! blaa.4-23-20.12:23pm.2:23pm");

INSERT INTO shows(event_name, host_name, host_id, provider_info, payment, patreon, wpTitle, webpage, video_links, show_date, start_time, end_time) VALUES('Mondo! blaa', 'Bandi', '1', "1|Bandi|paymentLink|videoLink,2|Menti|paymentlink|videoLink", "paymentlink","patreonLink","Get shwag here", "weblink.com", "videoLink, videolink", '2020-09-01', '11:27:00', '12:27:00');


SELECT * FROM users;
SELECT * FROM spect;
SELECT * FROM shows;