--
-- PostgreSQL database dump
--

-- Dumped from database version 15.7
-- Dumped by pg_dump version 15.7

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: restaurants; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.restaurants (
    id integer NOT NULL,
    name character varying(100),
    location character varying(100),
    rating integer,
    upload_date date,
    description text,
    image text,
    cuisine character varying(30)
);


ALTER TABLE public.restaurants OWNER TO postgres;

--
-- Name: restaurants_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.restaurants_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.restaurants_id_seq OWNER TO postgres;

--
-- Name: restaurants_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.restaurants_id_seq OWNED BY public.restaurants.id;


--
-- Name: restaurants id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurants ALTER COLUMN id SET DEFAULT nextval('public.restaurants_id_seq'::regclass);


--
-- Data for Name: restaurants; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.restaurants (id, name, location, rating, upload_date, description, image, cuisine) FROM stdin;
13	Home Cafe	150 Bedok Reservoir Rd, #01-1727, Singapore 470150	7	2024-08-03	Other reviews say: Staffs are nice and friendly. Very efficient service. Be prepared for a long queue, but the staff always ensure the eating time to reduce the waiting time which is good.	https://lh3.googleusercontent.com/p/AF1QipOcT8UmrzLks_7oCgMcUOXUDJwVWVXL3cTEVbBA=s680-w680-h510	Korean
17	Jones Sky	Bugis Street 4	3	2024-08-03		\N	Italian
15	boney Cafe	asdasd Rd	6	2024-08-03	\N	\N	Muslim
19	Daniel's Homely Hut	3 Park Ln, Level 1A Seletar Aerospace Drive, Singapore 798387	6	2024-08-03		\N	Chinese
14	Enchanted Cafe Rangoon Road	 88 Rangoon Rd, #01-04, Singapore 218374	5	2024-08-03	Other reviews say: Staffs are nice and friendly. Very efficient service. Be prepared for a long queue, but the staff always ensure the eating time to reduce the waiting time which is good.	https://lh3.googleusercontent.com/p/AF1QipMyThRVT49sB3N6jWf085yv-ks00kzFHDDgFq-V=s680-w680-h510	Muslim
5	Kajiken Paya Lebar Square	60 Paya Lebar Rd, #01-86 Paya Lebar Square, Singapore 409051	10	2024-08-03	Great place!\nLovely cakes\nPrice is steep\nLive music	https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg	Italian
12	Five Oars Coffee Roasters	6 Upper E Coast Rd, Singapore 455200	2	2024-08-03	Other reviews say: Staffs are nice and friendly. Very efficient service. Be prepared for a long queue, but the staff always ensure the eating time to reduce the waiting time which is good.	https://lh3.googleusercontent.com/p/AF1QipO-ExXT3tG9ocvoLi4IXiLBMrFsAe7rwmaY5nrV=s680-w680-h510	Korean
8	COFFEESARANG	311 New Upper Changi Rd #01-78 Bedok Mall, 467360	9	2024-08-03	People say that: Revisit in 2024, the Mexican chicken pizza is still the best! Quite unique taste, slightly spicy, haven't tasted this in other restaurants.\nAlso tried the bi feng tang pasta, not bad. Uniquely garlicky flavour.\nEveryone loves the nachos chicken.	https://lh3.googleusercontent.com/p/AF1QipNixeeqVuG4l5QwikfWKpu54uIVKnqhjWmBeMbr=s680-w680-h510	Korean
20	Davidos' Roasts	 5 Simon Rd, Singapore 545893	8	2024-08-03	\N	\N	Indian
29	Acorn	Changi Park	2	2024-08-03		\N	Korean
10	Dutch Colony Coffee Co.	1 Tampines Walk, #01-K8, Singapore 528523	5	2023-02-17	Other reviews say: Staffs are nice and friendly. Very efficient service. Be prepared for a long queue, but the staff always ensure the eating time to reduce the waiting time which is good.	https://lh3.googleusercontent.com/p/AF1QipPEOjjmfBgGcb-CG4O0yfTPfwUGwPPWQT7_IYv3=s680-w680-h510	\N
4	Hippo Campus Cafe	Holland Village,  48 Lor Mambong, Singapore 277698	3	2023-02-17	I highly recommend this restaurant, the food and service quality is truly exceptional, especially the jalapeno peppers. Its so creamy and damn nice. The cozy atmosphere, soft lighting, and elegant decor makes this place amazing to have a relaxing drink at. The waitresses here are very pretty as well as genuinely friendly.	https://static.blog.bolt.eu/LIVE/wp-content/uploads/2024/05/10110345/different-types-of-sushi-1024x536.jpg	Chinese
11	Whisk & Paddle	10 Tebing Ln, Singapore 828836	8	2023-02-13	Other reviews say: Staffs are nice and friendly. Very efficient service. Be prepared for a long queue, but the staff always ensure the eating time to reduce the waiting time which is good.	https://lh3.googleusercontent.com/p/AF1QipMvz0FiKsUHtfKVduLiCfwxu5TvuAihwwNOliOZ=s680-w680-h510	\N
23	Coco Cafe	Tampines Street 21	4	2024-08-03	\N	\N	Korean
9	BLVD (Changi Biz Park)	5 Changi Business Park Central 1, #01-72/73, Singapore 486038	6	2024-08-03	Other reviews say: Staffs are nice and friendly. Very efficient service. Be prepared for a long queue, but the staff always ensure the eating time to reduce the waiting time which is good.	https://lh3.googleusercontent.com/p/AF1QipPTZSVJkEvHq0Cz5oKJp36Zk6IpdfHUIsCY1oQf=s680-w680-h510	Italian
7	BomBom Cafe	Tampines Central 1, #04-14 10, Singapore 529536	5	2024-08-03	Other Reviewers say: Came here for a lunch wedding. Nice quaint place for a small closed wedding. 	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DNdGCSd_65CpA8tsDIjn6-tG-ApiPevIgw&s	Indian
22	Sushirow Your Boat	Bugis Street	3	2024-08-03	\N	\N	\N
6	IPPUDO SINGAPORE CHANGI AIRPORT T2	 60 Airport Boulevard Concession F Kiosk #02-K10, Terminal 2 Departure/ Transit Lounge South, 819643	5	2024-08-03	Other reviews say: The atmosphere and ambience were good, creating a pleasant environment to relax 	https://www.honeywhatscooking.com/wp-content/uploads/2023/02/C146EF1B-2999-4F3E-93A2-99DEE8548973-e1677049022689.jpg	Japanese
33	Kangaroo Cafe	Nil	2	2024-08-03		\N	Indian
34	Chupa Chups 	Jurong West Street 23	\N	2024-08-03		\N	Muslim
\.


--
-- Name: restaurants_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.restaurants_id_seq', 37, true);


--
-- Name: restaurants restaurants_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurants
    ADD CONSTRAINT restaurants_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

