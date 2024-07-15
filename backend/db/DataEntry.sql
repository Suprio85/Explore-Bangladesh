-- Active: 1720758232150@@localhost@5432@pernnew@public
-- Active: 1720758232150@@localhost@5432@pernnew@tour_db
SELECT * FROM "HOTEL"


INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Dhaka','Dhaka','Dhaka','1000');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Chittagong','Chittagong','Chittagong','4000');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Sylhet','Sylhet','Sylhet','3100');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Khulna','Khulna','Khulna','9000');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Rajshahi','Rajshahi','Rajshahi','6000');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Barishal','Barishal','Barishal','8200');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Rangpur','Rangpur','Rangpur','5400');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Mymensingh','Mymensingh','Mymensingh','2200');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Cox''s Bazar','Chittagong','Cox''s Bazar','4700');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Bandarban','Chittagong','Bandarban','4600');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Sundarbans','Khulna','Sundarbans','9350');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Sajek','Rangamati','Sajek','4500');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Srimangal','Sylhet','Srimangal','3210');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Jaflong','Sylhet','Jaflong','3120');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Kuakata','Barishal','Kuakata','8600');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Saint Martin''s Island','Chittagong','Saint Martin','4760');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Paharpur','Rajshahi','Paharpur','5900');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Mahasthangarh','Bogra','Mahasthangarh','5800');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Sonargaon','Dhaka','Narayanganj','1440');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Mainamati','Comilla','Mainamati','3500');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Bagerhat','Khulna','Bagerhat','9300');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Puthia','Rajshahi','Puthia','6620');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Kantaji Temple','Dinajpur','Kantaji Temple','5200');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Lalbagh Fort','Dhaka','Lalbagh','1211');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Ahsan Manzil','Dhaka','Dhaka-Mohanagar','1100');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Star Mosque','Dhaka','Dhaka-Mohanagar','1100');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Sixty Dome Mosque','Bagerhat','Bagerhat','9300');
INSERT INTO "Location" (name,division,city,postal_code) VALUES ('Curzon Hall','Dhaka','Dhaka-Mohanagar','1100');

--USER
--INSERT INTO "User" (name,email,password,image_url,location_id,join_date) VALUES ('Suprio','sup@gmail.com','123',NULL,'1','2021-01-01');


--Season
INSERT INTO "Season" (id,name) VALUES (1,'Summer');
INSERT INTO "Season" (id,name) VALUES (2,'Winter');
INSERT INTO "Season" (id,name) VALUES (3,'Spring');
INSERT INTO "Season" (id,name) VALUES (4,'Autumn');


--Schedule
INSERT INTO "Schedule" (opening_time,closing_time) VALUES ('09:00:00','22:00:00');
INSERT INTO "Schedule" (opening_time,closing_time) VALUES ('10:00:00','20:00:00');
INSERT INTO "Schedule" (opening_time,closing_time) VALUES ('10:00:00','18:00:00');
INSERT INTO "Schedule" (opening_time,closing_time) VALUES ('10:00:00','17:00:00');
INSERT INTO "Schedule" (opening_time,closing_time) VALUES ('09:00:00','18:00:00');


--Tourist_Spot
INSERT INTO "Tourist_Spot" (name,description,location_id,schedule_id,entry_fee,image_id,video_url) VALUES
 ('Cox''s Bazar','Cox''s Bazar is a town on the southeast
  coast of Bangladesh. It''s known for its very long, sandy beachfront,
  stretching from Sea Beach in the north to Kolatoli Beach in the south. 
  Aggameda Khyang monastery is home to bronze statues and centuries-old 
  Buddhist manuscripts. South of town, the tropical rainforest of Himchari
  National Park has waterfalls and many birds. North, sea turtles breed on
  nearby Sonadia Island.
 
 ',9,1,NULL,NULL,NULL);

INSERT INTO "Tourist_Spot" (name,description,location_id,schedule_id,entry_fee,image_id,video_url) VALUES
 ('Sundarbans','The Sundarbans is a mangrove area in the delta formed by the confluence
  of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from
  the Hooghly River in India''s state of West Bengal to the Baleswar River in Bangladesh.
  It comprises closed and open mangrove forests, agriculturally used land, mudflats and
  barren land, and is intersected by multiple tidal streams and channels. Four protected
  areas in the Sundarbans are enlisted as UNESCO World Heritage Sites: Sundarbans 
  National Park, Sundarbans West, Sundarbans South and Sundarbans East Wildlife
  Sanctuaries. Despite these protections, the Indian Sundarbans were considered
  endangered in a 2020 assessment by the International Union for Conservation 
  of Nature.',11,3,NULL,NULL,NULL);

INSERT INTO "Tourist_Spot" (name,description,location_id,schedule_id,entry_fee,image_id,video_url) VALUES
    ('Jaflong','Jaflong is a hill station and popular tourist destination in the Division of Sylhet,
    Bangladesh. It is located in Gowainghat Upazila of Sylhet District and situated at the border
    between Bangladesh and the Indian state of Meghalaya, overshadowed by subtropical mountains and
    rainforests. Jaflong is famous for its stone collections and is home to the Khasi tribe. The
    Mari River flows from the Himalayas and passes through the nearby tea gardens and hills of
    India''s Meghalaya state, and the Dauki River flows from India to Bangladesh and passes through
    Jaflong. The river''s water is clear and the surrounding hills and tea gardens are picturesque.
    It is a popular destination for tourists and photographers.',14,5,NULL,NULL,NULL);

INSERT INTO "Tourist_Spot" (name,description,location_id,schedule_id,entry_fee,image_id,video_url) VALUES
    ('Kuakata','Kuakata is a town in southeastern Bangladesh known for its panoramic sea beach.
    Located in the Patuakhali district, it is about 320 kilometers (200 mi) south of Dhaka, the
    capital, and about 70 kilometers (43 mi) from the district headquarters. Kuakata beach is
    a sandy expanse 18 kilometers (11 mi) long and 3 kilometers (1.9 mi) wide. From the beach,
    one can have an unobstructed view of both sunrise and sunset over the Bay of Bengal. The
    unique natural setting of Kuakata has made it a popular tourist destination. The name Kuakata
    originated from the word Kua (the Bengali word for "well") and Kata (the Bengali word for
    "dig"). According to folklore, the name originated from the fact that when the Rakhine
    settlers arrived in Kuakata, they dug a well and named it "Kua" and the area was named
    "Kuakata".',15,2,NULL,NULL,NULL);

INSERT INTO "Tourist_Spot" (name,description,location_id,schedule_id,entry_fee,image_id,video_url) VALUES
    ('Saint Martin''s Island','Saint Martin''s Island is a small island in the northeastern part
    of the Bay of Bengal, about 9 km south of the tip of the Cox''s Bazar-Teknaf peninsula, and
    forming the southernmost part of Bangladesh. There is a small adjoining island that is separated
    the island is about 8 km west of the northwest coast of Myanmar, at the mouth of the Naf River.
    The first settlement started 250 years ago by Arabian sailors who named the island "Zajira".
    During British occupation the island was named Saint Martin Island. The local names of the island
    are "Narical Gingira", also spelled "Narikel Jinjira/Jinjera", which means ''Coconut Island'' in
    English.',16,2,NULL,NULL,NULL);

INSERT INTO "Tourist_Spot" (name,description,location_id,schedule_id,entry_fee,image_id,video_url) VALUES
    ('Paharpur','Paharpur is a village in Naogaon District, Rajshahi Division, Bangladesh. It is
    home to the Paharpur Vihara, the largest known monastery south of the Himalayas. This ruined
    Buddhist monastery, a UNESCO World Heritage Site, is located in Paharpur, in north-western
    Bangladesh. It was founded by the second Pala king Dharmapala in the 8th century. The site
    covers approximately 27 acres (110,000 m2) of land. The monastery is quadrangular in form,
    and measures approximately 920 feet (280 m) externally on each side. It was originally
    surrounded by a wall, which may have been built of burnt bricks. The main entrance is on
    the north. The architecture of the pyramidal cruciform temple is profoundly influenced by
    those of Southeast Asia, especially Myanmar and Java.',17,5,NULL,NULL,NULL);

INSERT INTO "Tourist_Spot" (name,description,location_id,schedule_id,entry_fee,image_id,video_url) VALUES
    ('Mahasthangarh','Mahasthangarh is one of the earliest urban archaeological sites so far
    discovered in Bangladesh. The village Mahasthan in Shibganj thana of Bogra District contains
    the remains of an ancient city which was called Pundranagara or Paundravardhanapura in the territory
    of Pundravardhana. A limestone slab bearing six lines in Prakrit in Brahmi script, discovered in
    1931, dates Mahasthangarh to at least the 3rd century BC. The fortified area was in use till the
    18th century AD. Together with the ancient and medieval ruins, the mazhar (holy tomb) of Shah Sultan
    Balkhi Mahisawar deserves special mention. The museum at Mahasthangarh was established in 1919 to
    preserve the antiquities found from the site.',18,5,NULL,NULL,NULL);

INSERT INTO "Tourist_Spot" (name,description,location_id,schedule_id,entry_fee,image_id,video_url) VALUES
    ('Sonargaon','Sonargaon was a historic administrative, commercial and maritime center in Bengal.
    Situated in the center of the Ganges delta, it was the seat of the medieval Muslim rulers and
    governors of eastern Bengal. Sonargaon was described by numerous historic travelers, including
    Ibn Battuta, Ma Huan, Niccolò de Conti and Ralph Fitch, as a thriving center of trade and
    commerce. It was a focal point for the muslin, silk, and gold trade. The area is located near
    the modern industrial river port of Narayanganj in Bangladesh. Today, the name Sonargaon survives
    as the Sonargaon Upazila in the region.',19,5,NULL,NULL,NULL);


INSERT INTO "Tourist_Spot" (name,description,location_id,schedule_id,entry_fee,image_id,video_url) VALUES
    ('Mainamati','Mainamati is an isolated low, dimpled range of hills, dotted with more than 50
    ancient Buddhist settlements dating to between the 8th and 12th centuries. The Mainamati site
    features a number of stupas, as well as the remains of a royal palace. The Mainamati Museum
    houses an extensive collection of Buddhist artifacts found in the area. The museum is located
    in the heart of the Mainamati ruins, and is managed by the Department of Archaeology of Bangladesh.
    The Mainamati ruins were designated a UNESCO World Heritage Site in 1985.',20,5,NULL,NULL,NULL);

INSERT INTO "Tourist_Spot" (name,description,location_id,schedule_id,entry_fee,image_id,video_url) VALUES
    ('Bagerhat','Bagerhat is a city and district in southwestern Bangladesh. It is historically significant
    for being an ancient center of the Khalifate, a Muslim state in the medieval period. 
    The city’s infrastructure reveals considerable technical skill and an exceptional number of mosques
     and early Islamic monuments, many built of brick, can be seen there.',21,4,NULL,NULL,NULL)


INSERT INTO "Tourist_Spot" (name,description,location_id,schedule_id,entry_fee,image_id,video_url) VALUES
    ('Puthia','Puthia is a town in Rajshahi District, Bangladesh. It is home to the Puthia Temple Complex,
    a cluster of notable old Hindu temples. The temples were built by the Zamindars of the Puthia Raj family
    who were noted philanthropists of Rajshahi. The temples have been built in the architectural style of
    Bengal, and are decorated with intricate terracotta ornamentation. The temples are laid out around a
    lake with a sprawling lawn. The temples are dedicated to various Hindu gods and goddesses, including
    Shiva, Krishna, and Jagannath. The temples are maintained by the Bangladesh Archaeological Department,
    and are a popular tourist attraction.',22,5,NULL,NULL,NULL);

INSERT INTO "Tourist_Spot" (name,description,location_id,schedule_id,entry_fee,image_id,video_url) VALUES
    ('Kantaji Temple','Kantaji Temple is a late-medieval Hindu temple in Dinajpur, Bangladesh. The temple
    was built by Maharaja Pran Nath of Dinajpur in 1704. It boasts one of the greatest examples of terracotta
    architecture in Bangladesh and once had nine spires, but all were destroyed in an earthquake that took
    place in 1897. The temple is built of brick and terracotta, and is decorated with ornate terracotta
    plaques that depict scenes from Hindu epics, mythology, and folklore. The temple is dedicated to
    Krishna and his wife Rukmini. The temple is maintained by the Department of Archaeology of Bangladesh,
    and is a popular tourist attraction.',23,3,NULL,NULL,NULL);

INSERT INTO "Tourist_Spot" (name,description,location_id,schedule_id,entry_fee,image_id,video_url) VALUES
    ('Lalbagh Fort','Lalbagh Fort is an incomplete 17th-century Mughal fort complex that stands before
    the Buriganga River in the southwestern part of Dhaka, Bangladesh. The construction was started in
    1678 AD by Mughal Subahdar Muhammad Azam Shah who was the son of Emperor Aurangzeb and later emperor
    of India. His successor, Shaista Khan, did not continue the work, though he stayed in Dhaka up to 1688.
    The fort was never completed, and unoccupied for a long period of time. The fort is considered to be
    an example of Mughal architecture. The complex consists of three buildings with a water tank in the
    middle. The fort is located in the Lalbagh area of Dhaka.',24,4,NULL,NULL,NULL);

INSERT INTO "Tourist_Spot" (name,description,location_id,schedule_id,entry_fee,image_id,video_url) VALUES
    ('Ahsan Manzil','Ahsan Manzil was the official residential palace and seat of the Nawab of Dhaka.
    The building is situated at Kumartoli along the banks of the Buriganga River in Dhaka, Bangladesh.
    Construction was started in 1859 and was completed in 1872. It was constructed in the Indo-Saracenic
    Revival architecture. It has been designated as a national museum. The palace is open for visitors
    from 10 am to 5 pm every day except for Sunday from 2 pm to 5 pm.',25,4,NULL,NULL,NULL);

INSERT INTO "Tourist_Spot" (name,description,location_id,schedule_id,entry_fee,image_id,video_url) VALUES
    ('Star Mosque','Star Mosque is a mosque located in Armanitola area, Dhaka, Bangladesh. The mosque
    has ornate designs and is decorated with motifs of blue stars. It was built in the first half of the
    19th century by Mirza Golam Pir. The mosque has a five-pointed star on its facade, from which it
    gets its name. The mosque is located at the intersection of Abul Khairat Road and Armanitola Lane
    in the Armanitola area of old Dhaka. The mosque is open to visitors from 10 am to 5 pm every day
    except for Sunday from 2 pm to 5 pm.',26,3,NULL,NULL,NULL);


--Hotel
INSERT INTO "HOTEL" (name,description,location_id,contact_no,star,rating) VALUES
    ('Hotel Sea Crown','Hotel Sea Crown is a 3-star hotel located in Cox''s Bazar, Bangladesh. The hotel
    is located near the beach and offers a variety of amenities, including a restaurant, a swimming pool,
    and a fitness center. The hotel also offers free Wi-Fi and parking to guests. The hotel is a popular
    choice for tourists visiting Cox''s Bazar.',9,'+880341-62480',3,4);

INSERT INTO "HOTEL" (name,description,location_id,contact_no,star,rating) VALUES
    ('Hotel The Cox Today','Hotel The Cox Today is a 4-star hotel located in Cox''s Bazar, Bangladesh.
    The hotel is located near the beach and offers a variety of amenities, including a restaurant, a
    swimming pool, and a fitness center. The hotel also offers free Wi-Fi and parking to guests. The
    hotel is a popular choice for tourists visiting Cox''s Bazar.',9,'+880341-62480',4,4);


INSERT INTO "HOTEL" (name,description,location_id,contact_no,star,rating) VALUES
    ('Hotel Sundarban','Hotel Sundarban is a 3-star hotel located in Sundarbans, Bangladesh. The hotel
    is located near the Sundarbans National Park and offers a variety of amenities, including a restaurant,
    a swimming pool, and a fitness center. The hotel also offers free Wi-Fi and parking to guests. The
    hotel is a popular choice for tourists visiting the Sundarbans.',11,'+880341-62480',3,4);

INSERT INTO "HOTEL" (NAME,DESCRIPTION,LOCATION_ID,CONTACT_NO,STAR,RATING) VALUES
    ('Hotel Jaflong Inn','Hotel Jaflong Inn is a 3-star hotel located in Jaflong, Bangladesh. The hotel
    is located near the Jaflong Hill and offers a variety of amenities, including a restaurant, a swimming
    pool, and a fitness center. The hotel also offers free Wi-Fi and parking to guests. The hotel is a
    popular choice for tourists visiting Jaflong.',14,'+880341-62480',3,4);

INSERT INTO "HOTEL" (NAME,DESCRIPTION,LOCATION_ID,CONTACT_NO,STAR,RATING) VALUES
    ('Hotel Kuakata Inn','Hotel Kuakata Inn is a 3-star hotel located in Kuakata, Bangladesh. The hotel
    is located near the Kuakata Beach and offers a variety of amenities, including a restaurant, a swimming
    pool, and a fitness center. The hotel also offers free Wi-Fi and parking to guests. The hotel is a
    popular choice for tourists visiting Kuakata.',15,'+880341-62480',3,4);    

INSERT INTO "HOTEL" (NAME,DESCRIPTION,LOCATION_ID,CONTACT_NO,STAR,RATING) VALUES
    ('Hotel Saint Martin Inn','Hotel Saint Martin Inn is a 3-star hotel located in Saint Martin''s Island,
    Bangladesh. The hotel is located near the Saint Martin''s Island and offers a variety of amenities,
    including a restaurant, a swimming pool, and a fitness center. The hotel also offers free Wi-Fi and
    parking to guests. The hotel is a popular choice for tourists visiting Saint Martin''s Island.',16,'+880341-62480',3,4);

INSERT INTO "HOTEL" (NAME,DESCRIPTION,LOCATION_ID,CONTACT_NO,STAR,RATING) VALUES
    ('Hotel Paharpur Inn','Hotel Paharpur Inn is a 3-star hotel located in Paharpur, Bangladesh. The hotel
    is located near the Paharpur Vihara and offers a variety of amenities, including a restaurant, a swimming
    pool, and a fitness center. The hotel also offers free Wi-Fi and parking to guests. The hotel is a
    popular choice for tourists visiting Paharpur.',17,'+880341-62480',3,4);

    
INSERT INTO "HOTEL" (NAME,DESCRIPTION,LOCATION_ID,CONTACT_NO,STAR,RATING) VALUES
    ('Hotel Mahasthangarh Inn','Hotel Mahasthangarh Inn is a 3-star hotel located in Mahasthangarh, Bangladesh.
    The hotel is located near the Mahasthangarh ruins and offers a variety of amenities, including a restaurant,
    a swimming pool, and a fitness center. The hotel also offers free Wi-Fi and parking to guests. The hotel is
    a popular choice for tourists visiting Mahasthangarh.',18,'+880341-62480',3,4);

INSERT INTO "HOTEL" (NAME,DESCRIPTION,LOCATION_ID,CONTACT_NO,STAR,RATING) VALUES
    ('Hotel Sonargaon Inn','Hotel Sonargaon Inn is a 3-star hotel located in Sonargaon, Bangladesh. The hotel
    is located near the Sonargaon Upazila and offers a variety of amenities, including a restaurant, a swimming
    pool, and a fitness center. The hotel also offers free Wi-Fi and parking to guests. The hotel is a popular
    choice for tourists visiting Sonargaon.',19,'+880341-62480',3,4);

INSERT INTO "HOTEL" (NAME,DESCRIPTION,LOCATION_ID,CONTACT_NO,STAR,RATING) VALUES
    ('Hotel Mainamati Inn','Hotel Mainamati Inn is a 3-star hotel located in Mainamati, Bangladesh. The hotel
    is located near the Mainamati ruins and offers a variety of amenities, including a restaurant, a swimming
    pool, and a fitness center. The hotel also offers free Wi-Fi and parking to guests. The hotel is a popular
    choice for tourists visiting Mainamati.',20,'+880341-62480',3,4);

INSERT INTO "HOTEL" (NAME,DESCRIPTION,LOCATION_ID,CONTACT_NO,STAR,RATING) VALUES
    ('Hotel Bagerhat Inn','Hotel Bagerhat Inn is a 3-star hotel located in Bagerhat, Bangladesh. The hotel
    is located near the Bagerhat city and offers a variety of amenities, including a restaurant, a swimming
    pool, and a fitness center. The hotel also offers free Wi-Fi and parking to guests. The hotel is a popular
    choice for tourists visiting Bagerhat.',21,'+880341-62480',3,4);

INSERT INTO "HOTEL" (NAME,DESCRIPTION,LOCATION_ID,CONTACT_NO,STAR,RATING) VALUES
    ('Hotel Puthia Inn','Hotel Puthia Inn is a 3-star hotel located in Puthia, Bangladesh. The hotel
    is located near the Puthia Temple Complex and offers a variety of amenities, including a restaurant,
    a swimming pool, and a fitness center. The hotel also offers free Wi-Fi and parking to guests. The hotel
    is a popular choice for tourists visiting Puthia.',22,'+880341-62480',3,4); 

--category
INSERT INTO "Category" (name) VALUES ('Historical'); --1
INSERT INTO "Category" (name) VALUES ('Natural'); --2
INSERT INTO "Category" (name) VALUES ('Religious');--3
INSERT INTO "Category" (name) VALUES ('Beach');--4
INSERT INTO "Category" (name) VALUES ('Hill');--5

--Tourist_Spot_Category
INSERT INTO "Tourist_Spot_Category" (tourist_spot_id,category_id) VALUES (1,4);
INSERT INTO "Tourist_Spot_Category" (tourist_spot_id,category_id) VALUES (2,2);
INSERT INTO "Tourist_Spot_Category" (tourist_spot_id,category_id) VALUES (3,2);
INSERT INTO "Tourist_Spot_Category" (tourist_spot_id,category_id) VALUES (3,5);
INSERT INTO "Tourist_Spot_Category" (tourist_spot_id,category_id) VALUES (4,4);
INSERT INTO "Tourist_Spot_Category" (tourist_spot_id,category_id) VALUES (5,4);
INSERT INTO "Tourist_Spot_Category" (tourist_spot_id,category_id) VALUES (6,2);
INSERT INTO "Tourist_Spot_Category" (tourist_spot_id,category_id) VALUES (7,2);
INSERT INTO "Tourist_Spot_Category" (tourist_spot_id,category_id) VALUES (8,1);
INSERT INTO "Tourist_Spot_Category" (tourist_spot_id,category_id) VALUES (9,1);
INSERT INTO "Tourist_Spot_Category" (tourist_spot_id,category_id) VALUES (10,1);
INSERT INTO "Tourist_Spot_Category" (tourist_spot_id,category_id) VALUES (11,1);
INSERT INTO "Tourist_Spot_Category" (tourist_spot_id,category_id) VALUES (12,1);
INSERT INTO "Tourist_Spot_Category" (tourist_spot_id,category_id) VALUES (12,3);
INSERT INTO "Tourist_Spot_Category" (tourist_spot_id,category_id) VALUES (13,1);
INSERT INTO "Tourist_Spot_Category" (tourist_spot_id,category_id) VALUES (14,1);
INSERT INTO "Tourist_Spot_Category" (tourist_spot_id,category_id) VALUES (15,1);
INSERT INTO "Tourist_Spot_Category" (tourist_spot_id,category_id) VALUES (15,3);



--Tour_Packages and Got table
INSERT INTO "Tour_Packages" (name,price,contract,group_size,tour_duration) VALUES
    ('Cox''s Bazar Tour Package',5000,'Cox''s Bazar Tour Package includes a 3-day, 2-night stay at
    Hotel Sea Crown, a 3-star hotel located near the beach. The package includes accommodation, meals,
    and transportation to and from the hotel. The package also includes a guided tour of Cox''s Bazar
    and a visit to Himchari National Park.',10,3);

INSERT INTO "Got" (tour_package_id,tourist_spot_id) VALUES (1,1);


INSERT INTO "Tour_Packages" (name,price,contract,group_size,tour_duration) VALUES
    ('Sundarbans Tour Package',10000,'Sundarbans Tour Package includes a 4-day, 3-night stay at Hotel
    Sundarban, a 3-star hotel located near the Sundarbans National Park. The package includes accommodation,
    meals, and transportation to and from the hotel. The package also includes a guided tour of the Sundarbans
    and a boat cruise along the river.',10,5);

INSERT INTO "Got" (tour_package_id,tourist_spot_id) VALUES (2,2);

INSERT INTO "Tour_Packages" (name,price,contract,group_size,tour_duration) VALUES
    ('Jaflong Tour Package',3000,'Jaflong Tour Package includes a 2-day, 1-night stay at Hotel Jaflong
    Inn, a 3-star hotel located near the Jaflong Hill. The package includes accommodation, meals, and
    transportation to and from the hotel. The package also includes a guided tour of Jaflong and a visit
    to the nearby tea gardens.',15,3);

INSERT INTO "Got" (tour_package_id,tourist_spot_id) VALUES (3,3);

INSERT INTO "Tour_Packages" (name,price,contract,group_size,tour_duration) VALUES
    ('Kuakata Tour Package',4000,'Kuakata Tour Package includes a 2-day, 1-night stay at Hotel Kuakata
    Inn, a 3-star hotel located near the Kuakata Beach. The package includes accommodation, meals, and
    transportation to and from the hotel. The package also includes a guided tour of Kuakata and a visit
    to the nearby fishing villages.',15,3);

INSERT INTO "Got" (tour_package_id,tourist_spot_id) VALUES (4,4);



INSERT INTO "Tour_Packages" (name,price,contract,group_size,tour_duration) VALUES
    ('Saint Martin''s Island Tour Package',6000,'Saint Martin''s Island Tour Package includes a 3-day,
    2-night stay at Hotel Saint Martin Inn, a 3-star hotel located near the Saint Martin''s Island. The
    package includes accommodation, meals, and transportation to and from the hotel. The package also
    includes a guided tour of Saint Martin''s Island and a visit to the nearby coral reefs.',10,3);

INSERT INTO "Got" (tour_package_id,tourist_spot_id) VALUES (5,5);
INSERT INTO "Tour_Packages" (tourist_spot_id,name,price,contract,group_size,tour_duration) VALUES
    ('Paharpur Tour Package',2000,'Paharpur Tour Package includes a 1-day, 1-night stay at Hotel Paharpur
    Inn, a 3-star hotel located near the Paharpur Vihara. The package includes accommodation, meals, and
    transportation to and from the hotel. The package also includes a guided tour of Paharpur and a visit
    to the nearby archaeological sites.',15,1);

INSERT INTO "Got" (tour_package_id,tourist_spot_id) VALUES (6,6);

INSERT INTO "Tour_Packages" (tourist_spot_id,name,price,contract,group_size,tour_duration) VALUES
    ('Mahasthangarh Tour Package',2500,'Mahasthangarh Tour Package includes a 1-day, 1-night stay at Hotel
    Mahasthangarh Inn, a 3-star hotel located near the Mahasthangarh ruins. The package includes accommodation,
    meals, and transportation to and from the hotel. The package also includes a guided tour of Mahasthangarh
    and a visit to the nearby archaeological sites.',15,1);

 INSERT INTO "Got" (tour_package_id,tourist_spot_id) VALUES (7,7);

INSERT INTO "Tour_Packages" (name,price,contract,group_size,tour_duration) VALUES
    ('Sonargaon Tour Package',3000,'Sonargaon Tour Package includes a 2-day, 1-night stay at Hotel Sonargaon
    Inn, a 3-star hotel located near the Sonargaon Upazila. The package includes accommodation, meals, and
    transportation to and from the hotel. The package also includes a guided tour of Sonargaon and a visit
    to the nearby archaeological sites.',15,2);

INSERT INTO "Got" (tour_package_id,tourist_spot_id) VALUES (8,8);

INSERT INTO "Tour_Packages" (name,price,contract,group_size,tour_duration) VALUES
    ('Mainamati Tour Package',3500,'Mainamati Tour Package includes a 2-day, 1-night stay at Hotel Mainamati
    Inn, a 3-star hotel located near the Mainamati ruins. The package includes accommodation, meals, and
    transportation to and from the hotel. The package also includes a guided tour of Mainamati and a visit
    to the nearby archaeological sites.',15,2);

INSERT INTO "Got" (tour_package_id,tourist_spot_id) VALUES (9,9);

INSERT INTO "Tour_Packages" (name,price,contract,group_size,tour_duration) VALUES
    ('Bagerhat Tour Package',4000,'Bagerhat Tour Package includes a 2-day, 1-night stay at Hotel Bagerhat
    Inn, a 3-star hotel located near the Bagerhat city. The package includes accommodation, meals, and
    transportation to and from the hotel. The package also includes a guided tour of Bagerhat and a visit
    to the nearby archaeological sites.',15,2);

INSERT INTO "Got" (tour_package_id,tourist_spot_id) VALUES (10,10);

INSERT INTO "Tour_Packages" (name,price,contract,group_size,tour_duration) VALUES
    ('Puthia Tour Package',3000,'Puthia Tour Package includes a 2-day, 1-night stay at Hotel Puthia
    Inn, a 3-star hotel located near the Puthia Temple Complex. The package includes accommodation, meals,
    and transportation to and from the hotel. The package also includes a guided tour of Puthia and a visit
    to the nearby archaeological sites.',15,2);

INSERT INTO "Got" (tour_package_id,tourist_spot_id) VALUES (11,11);

INSERT INTO "Tour_Packages" (name,price,contract,group_size,tour_duration) VALUES
    ('Kantaji Temple Tour Package',3000,'Kantaji Temple Tour Package includes a 2-day, 1-night stay at
    Hotel Kantaji Temple Inn, a 3-star hotel located near the Kantaji Temple. The package includes accommodation,
    meals, and transportation to and from the hotel. The package also includes a guided tour of Kantaji Temple
    and a visit to the nearby archaeological sites.',15,2);

INSERT INTO "Got" (tour_package_id,tourist_spot_id) VALUES (12,12);

INSERT INTO "Tour_Packages" (name,price,contract,group_size,tour_duration) VALUES
    ('Lalbagh Fort Tour Package',3000,'Lalbagh Fort Tour Package includes a 2-day, 1-night stay at Hotel
    Lalbagh Fort Inn, a 3-star hotel located near the Lalbagh Fort. The package includes accommodation, meals,
    and transportation to and from the hotel. The package also includes a guided tour of Lalbagh Fort and a visit
    to the nearby archaeological sites.',15,2);

INSERT INTO "Got" (tour_package_id,tourist_spot_id) VALUES (13,13);

INSERT INTO "Tour_Packages" (name,price,contract,group_size,tour_duration) VALUES
    ('Ahsan Manzil Tour Package',3000,'Ahsan Manzil Tour Package includes a 2-day, 1-night stay at
    Hotel Ahsan Manzil Inn, a 3-star hotel located near the Ahsan Manzil. The package includes accommodation,
    meals, and transportation to and from the hotel. The package also includes a guided tour of Ahsan Manzil
    and a visit to the nearby archaeological sites.',15,2);

INSERT INTO "Got" (tour_package_id,tourist_spot_id) VALUES (14,14);


INSERT INTO "Tour_Packages" (name, price, description, group_size, tour_duration) VALUES
('Cox''s Bazar and Saint Martin''s Island Tour Package', 8000,
 'Day 1: Arrival at Cox''s Bazar in the morning. Check into the hotel and have breakfast. 
  Enjoy the Cox''s Bazar sea beach in the afternoon and visit local markets in the evening. 
  Dinner and overnight stay at the hotel.
  Day 2: After breakfast, depart for Saint Martin''s Island. Arrive at Saint Martin''s Island by noon. 
  Check into the hotel and have lunch. Explore the island and enjoy the beach. Dinner and overnight stay at the hotel.
  Day 3: Breakfast at the hotel. Continue exploring Saint Martin''s Island, including snorkeling, swimming, and beach activities. 
  Lunch at a local restaurant. Return to Cox''s Bazar in the afternoon. Dinner and overnight stay at the hotel.
  Day 4: Breakfast at the hotel. Visit Himchari National Park and Inani Beach. 
  Return to the hotel for lunch. Free time in the afternoon for leisure or additional activities. 
  Dinner and overnight stay at the hotel.', 
 15, 4);

INSERT INTO "Got" (tour_package_id, tourist_spot_id) VALUES (15, 1);
INSERT INTO "Got" (tour_package_id, tourist_spot_id) VALUES (15, 5);

INSERT INTO "Tour_Packages" (id,name, price, description, group_size, tour_duration) VALUES
(16,'Sundarbans, Bagerhat and Mahasthangarh Tour Package', 9000,
 'Day 1: Arrival at Sundarbans in the morning. Check into the hotel and have breakfast. 
  Enjoy a boat cruise along the river and explore the mangrove forests. Lunch at the hotel. 
  Dinner and overnight stay at the hotel.
  Day 2: After breakfast, depart for Bagerhat. Visit the historic city and explore the mosques and monuments.
  Lunch at a local restaurant. Continue to Mahasthangarh in the afternoon. Check into the hotel and have dinner.
  Day 3: Breakfast at the hotel. Visit the Mahasthangarh ruins and museum. Lunch at the hotel.
  visit the nearby archaeological sites. Dinner and overnight stay at the hotel.
  Day 4: Breakfast at the hotel. Depart for Dhaka. Lunch at a local restaurant. 
  Return to Dhaka in the evening.',
 15, 4);

INSERT INTO "Got" (tour_package_id, tourist_spot_id) VALUES (16, 2);
INSERT INTO "Got" (tour_package_id, tourist_spot_id) VALUES (16, 10);
INSERT INTO "Got" (tour_package_id, tourist_spot_id) VALUES (16, 7);


--Event
INSERT INTO "Event" (name,tourist_spot_id,date,time,description,age_criteria) VALUES
    ('Cox''s Bazar Beach Festival',1,'2024-12-25','09:00:00','The Cox''s Bazar Beach Festival is an annual
    event held on the beachfront of Cox''s Bazar, Bangladesh. The festival features a variety of activities,
    including beach games, water sports, live music, and food stalls. The festival is open to visitors of
    all ages and is a popular attraction for tourists visiting Cox''s Bazar.',NULL);

INSERT INTO "Event" (name,tourist_spot_id,date,time,description,age_criteria) VALUES
    ('Cox''s Bazar Seafood Festival',1,'2024-11-20','09:00:00','The Cox''s Bazar Seafood Festival is an annual
    event held in Cox''s Bazar, Bangladesh. The festival celebrates the local seafood cuisine of the region
    and features cooking demonstrations, tastings, and food stalls. The festival is open to visitors of all
    ages and is a popular attraction for tourists visiting Cox''s Bazar.',NULL);

INSERT INTO "Event" (name,tourist_spot_id,date,time,description,age_criteria) VALUES
    ('Cox''s Bazar Water Sports Competition',1,'2024-6-15','09:00:00','The Cox''s Bazar Water Sports Competition
    is an annual event held on the beachfront of Cox''s Bazar, Bangladesh. The competition features a variety
    of water sports, including surfing, jet skiing, and parasailing. The competition is open to participants
    of all ages and is a popular attraction for tourists visiting Cox''s Bazar.',NULL);


INSERT INTO "Event" (name,tourist_spot_id,date,time,description,age_criteria) VALUES
    ('Sundarbans Wildlife Safari',2,'2024-11-15','10:00:00','The Sundarbans Wildlife Safari is a guided
    tour of the Sundarbans National Park in Bangladesh. The safari includes a boat cruise along the river,
    a visit to the mangrove forests, and a chance to see the wildlife of the park, including Bengal tigers,
    crocodiles, and various bird species. The safari is open to visitors of all ages and is a popular
    attraction for tourists visiting the Sundarbans.',NULL);

INSERT INTO "Event" (name,tourist_spot_id,date,time,description,age_criteria) VALUES
    ('Sundarbans Bird Watching Tour',2,'2024-10-10','10:00:00','The Sundarbans Bird Watching Tour is a guided
    tour of the Sundarbans National Park in Bangladesh. The tour includes a boat cruise along the river,
    a visit to the mangrove forests, and a chance to see the bird species of the park, including kingfishers,
    herons, and egrets. The tour is open to visitors of all ages and is a popular attraction for bird
    enthusiasts visiting the Sundarbans.',NULL);

INSERT INTO "Event" (name,tourist_spot_id,date,time,description,age_criteria) VALUES
    ('Sundarbans Mangrove Forest Trek',2,'2024-09-05','10:00:00','The Sundarbans Mangrove Forest Trek is a
    guided tour of the Sundarbans National Park in Bangladesh. The trek includes a walk through the mangrove
    forests, a visit to the wildlife observation towers, and a chance to see the flora and fauna of the park,
    including mangrove trees, mudskippers, and crabs. The trek is open to visitors of all ages and is a
    popular attraction for nature lovers visiting the Sundarbans.',NULL);

INSERT INTO "Event" (name,tourist_spot_id,date,time,description,age_criteria) VALUES
    ('Jaflong Tea Festival',3,'2024-10-10','10:00:00','The Jaflong Tea Festival is an annual event held in
    Jaflong, Bangladesh. The festival celebrates the tea culture of the region and features tea tastings,
    tea ceremonies, and cultural performances. The festival is open to visitors of all ages and is a popular
    attraction for tourists visiting Jaflong.',NULL);
INSERT INTO "Event" (name,tourist_spot_id,date,time,description,age_criteria) VALUES
    ('Kuakata Fishing Festival',4,'2024-09-05','10:00:00','The Kuakata Fishing Festival is an annual event
    held in Kuakata, Bangladesh. The festival celebrates the fishing culture of the region and features
    fishing competitions , cultural performances, and food stalls. The festival is open to visitors of all
    ages and is a popular attraction for tourists visiting Kuakata.',NULL);

INSERT INTO "Event" (name,tourist_spot_id,date,time,description,age_criteria) VALUES
    ('Saint Martin''s Island Coral Reef Festival',5,'2024-08-20','10:00:00','The Saint Martin''s Island Coral
    Reef Festival is an annual event held on Saint Martin''s Island, Bangladesh. The festival celebrates the
    coral reefs of the island and features snorkeling, scuba diving, and glass-bottom boat
    tours. The festival is open to visitors of all ages and is a popular attraction for tourists visiting
    Saint Martin''s Island.',NULL);

INSERT INTO "Event" (name,tourist_spot_id,date,time,description,age_criteria) VALUES
    ('Paharpur Archaeological Conference',6,'2024-07-15','10:00:00','The Paharpur Archaeological Conference
    is an annual event held at the Paharpur Vihara in Bangladesh. The conference features lectures, workshops,
    and guided tours of the archaeological site. The conference is open to visitors of all ages and is a
    popular attraction for tourists visiting Paharpur.',NULL);
INSERT INTO "Event" (name,tourist_spot_id,date,time,description,age_criteria) VALUES
    ('Mahasthangarh Heritage Festival',7,'2024-06-10','10:00:00','The Mahasthangarh Heritage Festival is an
    annual event held at the Mahasthangarh ruins in Bangladesh. The festival celebrates the heritage of the
    region and features cultural performances, archaeological exhibitions, and guided tours of the site.
    The festival is open to visitors of all ages and is a popular attraction for tourists visiting Mahasthangarh.',NULL);

INSERT INTO "Event" (name,tourist_spot_id,date,time,description,age_criteria) VALUES
    ('Sonargaon Folk Music Festival',8,'2024-05-05','10:00:00','The Sonargaon Folk Music Festival is an annual
    event held in Sonargaon, Bangladesh. The festival celebrates the folk music of the region and features
    live performances, workshops, and cultural displays. The festival is open to visitors of all ages and is
    a popular attraction for tourists visiting Sonargaon.',NULL);

INSERT INTO "Event" (name,tourist_spot_id,date,time,description,age_criteria) VALUES
    ('Mainamati Archaeological Symposium',9,'2024-04-01','10:00:00','The Mainamati Archaeological Symposium
    is an annual event held at the Mainamati ruins in Bangladesh. The symposium features lectures, workshops,
    and guided tours of the archaeological site. The symposium is open to visitors of all ages and is a popular
    attraction for tourists visiting Mainamati.',NULL);
INSERT INTO "Event" (name,tourist_spot_id,date,time,description,age_criteria) VALUES
    ('Bagerhat Heritage Festival',10,'2024-03-20','10:00:00','The Bagerhat Heritage Festival is an annual event
    held in Bagerhat, Bangladesh. The festival celebrates the heritage of the region and features cultural
    performances, archaeological exhibitions, and guided tours of the site. The festival is open to visitors
    of all ages and is a popular attraction for tourists visiting Bagerhat.',NULL);

INSERT INTO "Event" (name,tourist_spot_id,date,time,description,age_criteria) VALUES
    ('Puthia Temple Festival',11,'2024-02-15','10:00:00','The Puthia Temple Festival is an annual event held
    at the Puthia Temple Complex in Bangladesh. The festival celebrates the religious heritage of the region
    and features religious ceremonies, cultural performances, and guided tours of the temples. The festival is
    open to visitors of all ages and is a popular attraction for tourists visiting Puthia.',NULL);

INSERT INTO "Event" (name,tourist_spot_id,date,time,description,age_criteria) VALUES
    ('Kantaji Temple Cultural Festival',12,'2024-01-10','10:00:00','The Kantaji Temple Cultural Festival is an
    annual event held at the Kantaji Temple in Bangladesh. The festival celebrates the cultural heritage of the
    region and features traditional music, dance, and art performances. The festival is open to visitors of all
    ages and is a popular attraction for tourists visiting Kantaji Temple.',NULL);

INSERT INTO "Event" (name,tourist_spot_id,date,time,description,age_criteria) VALUES
    ('Lalbagh Fort Historical Symposium',13,'2023-12-25','10:00:00','The Lalbagh Fort Historical Symposium is
    an annual event held at the Lalbagh Fort in Bangladesh. The symposium features lectures, workshops, and guided
    tours of the historical site. The symposium is open to visitors of all ages and is a popular attraction for
    tourists visiting Lalbagh Fort.',NULL);

INSERT INTO "Event" (name,tourist_spot_id,date,time,description,age_criteria) VALUES
    ('Ahsan Manzil Cultural Festival',14,'2023-11-20','10:00:00','The Ahsan Manzil Cultural Festival is an
    annual, event held at the Ahsan Manzil in Bangladesh. The festival celebrates the cultural heritage of the
    region and features traditional music, dance, and art performances. The festival is open to visitors of all
    ages and is a popular attraction for tourists visiting Ahsan Manzil.',NULL);


