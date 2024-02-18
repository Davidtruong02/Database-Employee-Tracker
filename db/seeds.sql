use employee_tracker_db;

-- Insert sample data into departments table
INSERT INTO department (name) VALUES
  ('Sales'),
  ('Marketing'),
  ('Finance');

-- Insert sample data into roles table
INSERT INTO role (title, salary, department_id) VALUES
  ('Sales Manager', 50000.00, 1),
  ('Sales Representative', 30000.00, 1),
  ('Marketing Manager', 45000.00, 2),
  ('Marketing Coordinator', 25000.00, 2),
  ('Finance Manager', 60000.00, 3),
  ('Financial Analyst', 40000.00, 3);

-- Insert sample data into employees table
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 1, NULL),
  ('Jane', 'Smith', 2, 1),
  ('Mike', 'Johnson', 3, NULL),
  ('Sarah', 'Williams', 4, 2),
  ('David', 'Brown', 5, 3),
  ('Emily', 'Davis', 6, 3);
