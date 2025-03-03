-- Create an enum for project status if it doesn't exist
DO $$ BEGIN
    CREATE TYPE project_status AS ENUM ('active', 'inactive', 'archived');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Create the projects table if it doesn't exist
CREATE TABLE IF NOT EXISTS projects (
    key TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    status project_status NOT NULL DEFAULT 'active',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Add project_key column to signups if it doesn't exist
DO $$ BEGIN
    ALTER TABLE signups ADD COLUMN project_key TEXT REFERENCES projects(key);
EXCEPTION
    WHEN duplicate_column THEN null;
END $$;

-- Add unique constraint if it doesn't exist
DO $$ BEGIN
    ALTER TABLE signups ADD CONSTRAINT unique_email_per_project UNIQUE (email, project_key);
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Enable Row Level Security if not already enabled
ALTER TABLE signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS insert_if_project_active ON signups;
DROP POLICY IF EXISTS read_if_project_active ON signups;

-- Create policies
CREATE POLICY insert_if_project_active ON signups
    FOR INSERT
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM projects 
            WHERE key = project_key 
            AND status = 'active'
        )
    );

CREATE POLICY read_if_project_active ON signups
    FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM projects 
            WHERE key = project_key 
            AND status = 'active'
        )
    );

-- Insert the initial project
INSERT INTO projects (key, name) 
VALUES ('project-key', 'Project Name')
ON CONFLICT (key) DO UPDATE 
SET name = EXCLUDED.name;

-- Create update_updated_at function if it doesn't exist
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger if it doesn't exist
DO $$ BEGIN
    CREATE TRIGGER update_projects_updated_at
        BEFORE UPDATE ON projects
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();
EXCEPTION
    WHEN duplicate_object THEN null;
END $$; 