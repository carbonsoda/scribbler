--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

-- Started on 2021-05-20 19:30:08

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

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


--
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: images; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.images (
    img_id integer NOT NULL,
    user_id text NOT NULL,
    img_name text,
    time_created timestamp without time zone,
    card_img_url text,
    share_img_url text,
    share_start_time timestamp without time zone
);


--
-- Name: images_img_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.images_img_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Dependencies: 202
-- Name: images_img_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.images_img_id_seq OWNED BY public.images.img_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(50),
    user_id character varying(50)
);


--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Dependencies: 200
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.id;


--
-- Name: images img_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.images ALTER COLUMN img_id SET DEFAULT nextval('public.images_img_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Dependencies: 203
-- Data for Name: images; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.images (img_id, user_id, img_name, time_created, card_img_url, share_img_url, share_start_time) FROM stdin;
2	scribbler|123	scribbler-sample-1.png	2021-05-09 20:31:33	https://res.cloudinary.com/carbonsoda/image/upload/v1621196923/scribbler-samples/1.png	\N	2021-05-09 20:31:33
3	scribbler|123	scribbler-sample-2.png	2021-05-09 20:31:33	https://res.cloudinary.com/carbonsoda/image/upload/v1621196923/scribbler-samples/2.png	\N	2021-05-09 20:31:33
4	scribbler|123	scribbler-sample-3.png	2021-05-09 20:31:33	https://res.cloudinary.com/carbonsoda/image/upload/v1621196923/scribbler-samples/3.png	\N	2021-05-09 20:31:33
5	scribbler|123	scribbler-sample-4.png	2021-05-09 20:31:33	https://res.cloudinary.com/carbonsoda/image/upload/v1621210456/scribbler-samples/4.png	\N	2021-05-09 20:31:33
6	scribbler|123	scribbler-sample-5.png	2021-05-09 20:31:33	https://res.cloudinary.com/carbonsoda/image/upload/v1621210678/scribbler-samples/5.png	\N	2021-05-09 20:31:33
\.


--
-- Dependencies: 201
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, user_id) FROM stdin;
2	scribbler-demo	scribbler|123
\.


--
-- Dependencies: 202
-- Name: images_img_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.images_img_id_seq', 8, true);


--
-- Dependencies: 200
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_user_id_seq', 4, true);


--
-- Name: images images_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (img_id);


--
-- Name: users users_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_id UNIQUE (user_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_un; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_un UNIQUE (user_id);


-- Completed on 2021-05-20 19:30:09

--
-- PostgreSQL database dump complete
--

