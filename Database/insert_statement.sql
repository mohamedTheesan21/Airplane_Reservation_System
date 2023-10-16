use ars;


SET SQL_SAFE_UPDATES = 0;

DELETE FROM Airplane_Model;
DELETE FROM Airplane;
DELETE FROM Discount;
DELETE FROM Class_Price;
DELETE FROM Location;
DELETE FROM Airport;
DELETE FROM Flight;





-- Inserting data into the Airplane_Model table
INSERT INTO Airplane_Model (model, Platinum_capacity, Business_capacity, Economy_Capacity)
VALUES
  ('Airbus A380', 12, 88, 420),
  ('Boeing 737', 8, 28, 90),
  ('Boeing 757', 10, 40, 150);


-- Inserting data into the Airplane table
INSERT INTO Airplane (model)
VALUES
  ('Boeing 737'),
  ('Boeing 737'),
  ('Boeing 737'),
  ('Boeing 757'),
  ('Boeing 757'),
  ('Boeing 757'),
  ('Boeing 757'),
  ('Airbus A380');

-- Inserting data into the Discount table
INSERT INTO Discount (Membership, Discount)
VALUES
  ('Normal', 0.00),
  ('Frequent', 5.00),
  ('Gold', 9.00);

-- Inserting data into the Class_Price table
INSERT INTO Class_Price (Class, differ_factor)
VALUES
  ('Econony', 1.0),
  ('Business', 2.0),
  ('Platinum', 3.5);



-- Inserting data into the Location table
INSERT INTO Location (Location_ID, location_Name, Parent_ID)
VALUES
  (1, 'Indonesia', NULL),
  (2, 'Sri Lanka', NULL),
  (3, 'India', NULL),
  (4, 'Thailand', NULL),
  (5, 'Singapore', NULL),
  (11, 'Banten', 1),
  (111, 'Tangerang City', 11),
  (12, 'Bali', 1),
  (21, 'Colombo', 2),
  (22, 'Hambantota', 2),
  (31, 'Delhi', 3),
  (311, 'New Delhi', 31),
  (32, 'Maharashtra', 3),
  (321, 'Mumbai', 32),
  (33, 'Tamil Nadu', 3),
  (331, 'Chennai', 33),
  (41, 'Samut Prakan', 4),
  (411, 'Bang Phli District', 41),
  (42, 'Bangkok', 4),
  (51, 'Changi', 5);


-- Inserting airports into the Airport table
INSERT INTO Airport (Airport_code, Airport_name, Location_ID)
VALUES
  ('CGK', 'Soekarno-Hatta International Airport', 111), -- Jakarta, Indonesia
  ('DPS', 'Ngurah Rai International Airport', 12),   -- Bali, Indonesia
  ('BIA', 'Bandaranaike International Airport', 21),  -- Colombo, Sri Lanka
  ('HRI', 'Mattala Rajapaksa International Airport', 22),  -- Hambantota, Sri Lanka
  ('DEL', 'Indira Gandhi International Airport', 311),  -- Delhi, India
  ('BOM', 'Chhatrapati Shivaji Maharaj International Airport', 321),  -- Mumbai, India
  ('MAA', 'Chennai International Airport', 331),  -- Chennai, India
  ('BKK', 'Suvarnabhumi Airport', 411),  -- Bangkok, Thailand
  ('DMK', 'Don Mueang International Airport', 42),  -- Bangkok, Thailand
  ('SIN', 'Changi Airport', 51);  -- Singapore




-- Inserting data into the Flight table
-- Flights between Indonesian airports
-- Flights between Indonesian and Sri Lankan airports
CALL InsertFlight(3, '2023-10-15 08:00:00', '2023-10-04 10:00:00', 'CGK', 'BIA', 300.00);
CALL InsertFlight(4, '2023-10-18 09:00:00', '2023-10-04 11:00:00', 'BIA', 'CGK', 300.00);

-- Flights between Indonesian and Indian airports
CALL InsertFlight(5, '2023-10-15 10:00:00', '2023-10-05 12:00:00', 'CGK', 'DEL', 350.00);
CALL InsertFlight(6, '2023-10-17 11:00:00', '2023-10-05 13:00:00', 'DEL', 'CGK', 350.00);
CALL InsertFlight(7, '2023-10-18 12:00:00', '2023-10-05 14:00:00', 'CGK', 'BOM', 370.00);
CALL InsertFlight(8, '2023-10-21 13:00:00', '2023-10-05 15:00:00', 'BOM', 'CGK', 370.00);

-- Flights between Indonesian and Thai airports
CALL InsertFlight(1, '2023-10-16 08:00:00', '2023-10-06 10:00:00', 'CGK', 'BKK', 320.00);
CALL InsertFlight(2, '2023-10-19 09:00:00', '2023-10-06 11:00:00', 'BKK', 'CGK', 320.00);

-- Flights between Indonesian and Singaporean airports
CALL InsertFlight(3, '2023-10-17 10:00:00', '2023-10-07 12:00:00', 'CGK', 'SIN', 180.00);
CALL InsertFlight(7, '2023-10-19 15:00:00', '2023-10-07 17:00:00', 'CGK', 'SIN', 180.00);
CALL InsertFlight(4, '2023-10-20 11:00:00', '2023-10-07 13:00:00', 'SIN', 'CGK', 180.00);

-- Overlapping
-- CALL InsertFlight(4, '2023-10-07 09:00:00', '2023-10-07 12:00:00', 'SIN', 'CGK', 180.00);




CALL User_Register('PassportID1', 'User1', 'Password1', 'John', 'Doe', '123-456-7890', 'Male', 'user1@example.com',
					'1990-01-15', '123 Main St', 'Apt 4B', 'New York', 'USA');
CALL User_Register('PassportID2', 'User2', 'Password2', 'Jane', 'Smith', '987-654-3210', 'Female', 'user2@example.com',
					'1985-03-20', '456 Elm St', NULL, 'Los Angeles', 'USA');
-- CALL User_Register('PassportID2', 'User2', 'Password2', 'Jane', 'Smith', '987-654-3210', 'Female', 'user2@example.com',
-- 					'1985-03-20', '456 Elm St', NULL, 'Los Angeles', 'USA');


CALL Add_Visiting_User('PassportID3', 'Visitor1', 'Lastname1', '555-123-4567', '1980-08-25', '789 Park Ave New York', 'USA', 'visitor1@example.com', 'Male');
CALL Add_Visiting_User('PassportID4', 'Visitor2', 'Lastname2', '555-987-6543', '1995-04-10', '456 Beach Blvd Los Angeles', 'USA', 'visitor2@example.com', 'Female');
CALL Add_Visiting_User('PassportID4', 'Visitor2', 'Lastname2', '555-987-6543', '1995-04-10', '456 Beach Blvd Los Angeles', 'USA', 'visitor2@example.com', 'Female');

call get_flights('2023-10-15', 'CGK', 'SIN');
call get_flight_seats(9,'Business');
call get_flight_seats(10,'Platinum');

SELECT * FROM User;
SELECT * FROM Registered_User;
SELECT * FROM Visiting_User;

CALL Create_Booking('PassportID1',1,5,'Platinum');
CALL Create_Booking('PassportID1',2,5,'Platinum');
CALL Create_Booking('PassportID1',3,5,'Platinum');
CALL Create_Booking('PassportID1',4,5,'Platinum');
CALL Create_Booking('PassportID1',5,5,'Platinum');
CALL Create_Booking('PassportID1',6,5,'Platinum');

CALL Flight_DELAY(5,'00:00:30');

SELECT * FROM Booking;
select * from flight;


SET SQL_SAFE_UPDATES = 1;