-- Create table to store projects
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_name VARCHAR(255) NOT NULL,
    description TEXT,
    github_link VARCHAR(255)
);

-- Insert initial project data
INSERT INTO projects (project_name, description, github_link)
VALUES 
    ('Project 1', 'Description of Project 1', 'https://github.com/yourusername/project1'),
    ('Project 2', 'Description of Project 2', 'https://github.com/yourusername/project2'),
    ('Project 3', 'Description of Project 3', 'https://github.com/yourusername/project3');
