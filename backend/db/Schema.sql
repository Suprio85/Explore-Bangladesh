-- Active: 1720758232150@@localhost@5432@pernnew@public
-- Active: 1720758232150@@localhost@5432@pernnew@tour_db

DROP TABLE IF EXISTS "Tourist_Spot";
DROP TABLE IF EXISTS "Review";

DROP TABLE IF EXISTS "Tour_Packages";
DROP TABLE IF EXISTS "Selects";
DROP TABLE IF EXISTS "Tourist_Spot_Category";
DROP TABLE IF EXISTS "Category_Season";
DROP TABLE IF EXISTS "Event";
DROP TABLE IF EXISTS "Category";
DROP TABLE IF EXISTS "Season";
DROP TABLE IF EXISTS "Schedule";
DROP TABLE IF EXISTS "User";
DROP TABLE IF EXISTS "Location";
DROP TABLE IF EXISTS "Image";
DROP TABLE IF EXISTS "HOTEL";





CREATE TABLE IF NOT EXISTS "Location" (
    location_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    division VARCHAR(255) NOT NULL,
    city VARCHAR(255),
    postal_code VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS "User" (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    image_url TEXT,
    location_id INT REFERENCES "Location"(location_id) ON DELETE SET NULL,
    join_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "Image" (
    id SERIAL PRIMARY KEY,
    image_urls TEXT[]
);

CREATE TABLE IF NOT EXISTS "Category" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);
CREATE TABLE IF NOT EXISTS "Season" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS "Category_Season" (
    category_id INT REFERENCES "Category"(id) ON DELETE CASCADE,
    season_id INT REFERENCES "Season"(id) ON DELETE CASCADE,
    PRIMARY KEY (category_id, season_id)
);

CREATE TABLE IF NOT EXISTS "HOTEL"(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location_id INT REFERENCES "Location"(location_id) ON DELETE SET NULL,
    STAR INT CHECK (STAR >= 1 AND STAR <= 5),
    RATING INT CHECK (RATING >= 1 AND RATING <= 5),
    description TEXT,
    contact_no VARCHAR(20)
);
CREATE TABLE IF NOT EXISTS "Schedule" (
    id SERIAL PRIMARY KEY,
    opening_time TIME,
    closing_time TIME,
    season_id INT REFERENCES "Season"(id) ON DELETE SET NULL
);
CREATE TABLE IF NOT EXISTS "Tourist_Spot" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    location_id INT REFERENCES "Location"(location_id) ON DELETE SET NULL,
    schedule_id INT REFERENCES "Schedule"(id) ON DELETE SET NULL,
    entry_fee DECIMAL(10, 2),
    image_id INT REFERENCES "Image"(id) ON DELETE SET NULL,
    video_url TEXT
);

CREATE TABLE IF NOT EXISTS "Review" (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES "User"(user_id) ON DELETE CASCADE,
    tourist_spot_id INT REFERENCES "Tourist_Spot"(id) ON DELETE CASCADE,
    comment TEXT,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    date_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS "Event" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    tourist_spot_id INT REFERENCES "Tourist_Spot"(id) ON DELETE CASCADE,
    date DATE,
    time TIME,
    description TEXT,
    age_criteria VARCHAR(50)
);


CREATE TABLE IF NOT EXISTS "Selects" (
    tourist_spot_id INT REFERENCES "Tourist_Spot"(id) ON DELETE CASCADE,
    user_id INT REFERENCES "User"(user_id) ON DELETE CASCADE,
    date DATE,
    no_of_person INT,
    PRIMARY KEY (tourist_spot_id, user_id)
);

CREATE TABLE IF NOT EXISTS "Tourist_Spot_Category" (
    tourist_spot_id INT REFERENCES "Tourist_Spot"(id) ON DELETE CASCADE,
    category_id INT REFERENCES "Category"(id) ON DELETE CASCADE,
    PRIMARY KEY (tourist_spot_id, category_id)
);

CREATE TABLE IF NOT EXISTS "Tour_Packages" (
    id SERIAL PRIMARY KEY,
    tourist_spot_id INT REFERENCES "Tourist_Spot"(id) ON DELETE CASCADE,
    name VARCHAR(255) ,
    price DECIMAL(10, 2) NOT NULL,
    contract TEXT,
    group_size INT,
    tour_duration INT
);

---------------------------------Slighly Modified Schema---------------------------------

ALTER TABLE "User" DROP COLUMN IF EXISTS  location_id; 

CREATE TABLE IF NOT EXISTS "Adress"(
    id SERIAL PRIMARY KEY,
    Division VARCHAR(255) ,
    city VARCHAR(255) ,
    street VARCHAR(255) ,
    postal_code VARCHAR(20) 
);

ALTER TABLE "User" ADD COLUMN IF NOT EXISTS adress_id
INT REFERENCES "Adress"(id) ON DELETE SET NULL;

ALTER TABLE "Schedule"
DROP COLUMN IF EXISTS season_id;

DROP TABLE IF EXISTS "Category_Season";

CREATE Table IF NOT EXISTS "Tourist_Spot_Season"(
    tourist_spot_id INT REFERENCES "Tourist_Spot"(id) ON DELETE CASCADE,
    season_id INT REFERENCES "Season"(id) ON DELETE CASCADE,
    PRIMARY KEY (tourist_spot_id, season_id)
);

DROP TABLE IF EXISTS "Selects";

CREATE TABLE IF NOT EXISTS "Selects" (
    tour_package_id INT REFERENCES "Tour_Packages"(id) ON DELETE CASCADE,
    user_id INT REFERENCES "User"(user_id) ON DELETE CASCADE,
    date DATE,
    no_of_person INT,
    PRIMARY KEY (tour_package_id, user_id)
);

ALTER TABLE "Selects" ADD COLUMN IF NOT EXISTS  cost INT DEFAULT 0;

ALTER TABLE "Tour_Packages" ADD COLUMN IF EXISTS  total_enrollment INT DEFAULT 0;

ALTER TABLE "Adress" ADD COLUMN IF NOT EXISTS Country VARCHAR(255) DEFAULT 'Bangladesh';


ALTER TABLE "Tour_Packages" 
RENAME COLUMN contract TO description;

CREATE TABLE IF NOT EXISTS "Got"( 
    tourist_spot_id INT REFERENCES "Tourist_Spot"(id) ON DELETE CASCADE,
    tour_package_id INT REFERENCES "Tour_Packages"(id) ON DELETE CASCADE,
    PRIMARY KEY (tourist_spot_id, tour_package_id)
);

ALTER TABLE "Tour_Packages" DROP COLUMN IF EXISTS  tourist_spot_id;

ALTER TABLE "Category" ADD COLUMN IF NOT EXISTS  image_url TEXT;

DROP TABLE IF EXISTS "Selects";



-- Create the Cart table
CREATE TABLE IF NOT EXISTS "Cart" (
    id SERIAL PRIMARY KEY,
    price INT DEFAULT 0
);

-- Create the Cart_Package table
CREATE TABLE IF NOT EXISTS "Cart_Package" (
    cart_id INT REFERENCES "Cart"(id) ON DELETE CASCADE,
    tour_package_id INT REFERENCES "Tour_Packages"(id) ON DELETE CASCADE,
    quantity INT DEFAULT 0,
    price INT,
    PRIMARY KEY (cart_id, tour_package_id)
);

-- Create the Order table
CREATE TABLE IF NOT EXISTS "Order" (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES "User"(user_id) ON DELETE CASCADE,
    cart_id INT REFERENCES "Cart"(id) ON DELETE CASCADE,
    Amount INT DEFAULT 0,
    date DATE DEFAULT CURRENT_DATE
);

-- Create the function to update the Cart price


