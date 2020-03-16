
INSERT INTO providers(name, email, password, about, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform) VALUES('Bandi', 'email@email.com', 'cpdsihfn87','Artist in the arts and what not and such','paymentlink','Patreon link','by our album here or visit our webpage', 'Webpage link', 'videochanel', '1.Mondo! blaa.4-23-20.12:23pm.2:23pm','1.Mondo! blaa.4-23-20.12:23pm.2:23pm' );
INSERT INTO providers(name, email, password, about, payment, patreon, wp_title, webpage, video_channel, rsvp_attend, rsvp_perform) VALUES('Angela', 'email@email.com', 'cpdsihfn87','Artist in the arts and what not and such','paymentlink','Patreon link','by our album here or visit our webpage', 'Webpage link', 'videochanel', '1.Mondo! blaa.4-23-20.12:23pm.2:23pm','1.Mondo! blaa.4-23-20.12:23pm.2:23pm' );


INSERT INTO users(name, email, password, rsvps) VALUES('Menti', 'email@email.com', 'cpdsihfn87', "1.Mondo! blaa.4-23-20.12:23pm.2:23pm");
INSERT INTO users(name, email, password, rsvps) VALUES('bumble', 'email@email.com', 'cpdsihfn87', "1.Mondo! blaa.4-23-20.12:23pm.2:23pm");

INSERT INTO shows(event_name, host_name, host_id, provider_info, provider_payment, video_links, show_date, start_time, end_time) VALUES('Mondo! blaa', 'Bandi', '1', "1|Bandi|paymentLink|videoLink,2|Menti|paymentlink|videoLink", "paymentlink,paymentlink", "videoLink, videolink", '2020-09-01', '11:27:00', '12:27:00');

SELECT * FROM providers;
SELECT * FROM users;
SELECT * FROM shows;