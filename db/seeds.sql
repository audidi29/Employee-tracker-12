INSERT INTO department (department.name) 
VALUES 
("Designer"),
("Engineering"),
("Accounting"),
("Medical"),
("HR");

INSERT INTO role (role.title, role.salary, role.department_id)
VALUES
("Senior Designer", 100000, 1),
("Software Engineer ", 150000, 1),
("Executive Assistant", 120000, 2),
("Nurse", 180000, 2),
("Accountant Manager", 100000, 3),
("General Manager", 80000, 3),
("HR Representative", 70000, 5);

INSERT INTO employee (employee.first_name, employee.last_name, employee.role_id, employee.manager_id)
VALUES
("Audrey", "Veh", 1, NULL),
("Lionel", "Kacou", 2, 1),
("Keyla", "Koblavi", 3, NULL),
("Anna", "Achy", 4, 3),
("Linda", "Tie", 5, NULL),
("Vanessa", "Drouin", 6, 5),
("Tim", "Cal", 7, NULL),
("Gerald", "Essy", 8, 7),
("Armelle", "Gby", 9, NULL),
("Michael", "Doe", 10, 9);