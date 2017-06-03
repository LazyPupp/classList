CREATE TABLE studentList(
    id serial PRIMARY KEY,
    firstName text NOT NULL, 
    lastName text NOT NULL,
    age integer,
    email text
);

CREATE TABLE classList(
    id serial PRIMARY KEY,
    courseName text NOT NULL,
    startDate date,
    endDate date,
    studentID integer references studentList on DELETE CASCADE
);

CREATE TABLE grades(
    id serial PRIMARY KEY,
    grade text NOT NULL,
    time_pub timestamp default current_timestamp,
    classID integer references classList on DELETE CASCADE,
    studentID integer references studentList on DELETE CASCADE
);