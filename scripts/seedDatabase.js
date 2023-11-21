// scripts\seedDatabase.js
require('dotenv').config();
const { db } = require('@vercel/postgres');
const fs = require('fs');
const path = require('path');

async function seedDatabase() {
    const data = JSON.parse(fs.readFileSync(path.join('data', 'resume.json'), 'utf8'));

    const client = await db.connect();

    try {
        // Create tables
        await client.query(`
            CREATE TABLE IF NOT EXISTS Basics (
                id SERIAL PRIMARY KEY,
                name TEXT,
                label TEXT,
                email TEXT,
                picture TEXT,
                website TEXT,
                phone TEXT,
                address TEXT,
                city TEXT,
                countryCode TEXT,
                region TEXT,
                summary TEXT
            );
        `);

        await client.query(`
            CREATE TABLE IF NOT EXISTS Profiles (
                id SERIAL PRIMARY KEY,
                basics_id INTEGER REFERENCES Basics(id),
                network TEXT,
                username TEXT,
                url TEXT
            );
        `);

        await client.query(`
            CREATE TABLE IF NOT EXISTS Work (
                id SERIAL PRIMARY KEY,
                company TEXT,
                position TEXT,
                startDate DATE,
                endDate DATE,
                summary TEXT
            );
        `);

        await client.query(`
            CREATE TABLE IF NOT EXISTS Education (
                id SERIAL PRIMARY KEY,
                institution TEXT,
                area TEXT,
                studyType TEXT,
                endDate DATE
            );
        `);

        await client.query(`
            CREATE TABLE IF NOT EXISTS Skills (
                id SERIAL PRIMARY KEY,
                name TEXT
            );
        `);

        await client.query(`
            CREATE TABLE IF NOT EXISTS Projects (
                id SERIAL PRIMARY KEY,
                name TEXT,
                description TEXT,
                githubLink TEXT,
                deploymentLink TEXT
            );
        `);

        await client.query(`
            CREATE TABLE IF NOT EXISTS ProjectFrontend (
                id SERIAL PRIMARY KEY,
                project_id INTEGER REFERENCES Projects(id),
                description TEXT,
                githubLink TEXT,
                deploymentLink TEXT
            );
        `);

        await client.query(`
            CREATE TABLE IF NOT EXISTS ProjectBackend (
                id SERIAL PRIMARY KEY,
                project_id INTEGER REFERENCES Projects(id),
                description TEXT,
                githubLink TEXT,
                deploymentLink TEXT
            );
        `);

        // Insert into Basics
        const resBasics = await client.query(`
            INSERT INTO Basics (name, label, email, picture, website, phone, address, city, countryCode, region, summary)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id
        `, [
            data.basics.name,
            data.basics.label,
            data.basics.email,
            data.basics.picture,
            data.basics.website,
            data.basics.phone,
            data.basics.location.address,
            data.basics.location.city,
            data.basics.location.countryCode,
            data.basics.location.region,
            data.basics.summary
        ]);
        const basicsId = resBasics.rows[0].id;

        // Insert into Profiles
        for (let profile of data.basics.profiles) {
            await client.query(`
                INSERT INTO Profiles (basics_id, network, username, url)
                VALUES ($1, $2, $3, $4)
            `, [
                basicsId,
                profile.network,
                profile.username,
                profile.url
            ]);
        }

        // Insert into Work
        for (let work of data.work) {
            let endDate = work.endDate === 'Present' ? null : work.endDate;
            await client.query(`
                INSERT INTO Work (company, position, startDate, endDate, summary)
                VALUES ($1, $2, $3, $4, $5)
            `, [
                work.company,
                work.position,
                work.startDate,
                endDate,
                work.summary
            ]);
        }

        // Insert into Education
        for (let education of data.education) {
            await client.query(`
                INSERT INTO Education (institution, area, studyType, endDate)
                VALUES ($1, $2, $3, $4)
            `, [
                education.institution,
                education.area,
                education.studyType,
                education.endDate
            ]);
        }

        // Insert into Skills
        for (let skill of data.skills) {
            await client.query(`
                INSERT INTO Skills (name)
                VALUES ($1)
            `, [
                skill.name
            ]);
        }

        // Insert into Projects
        for (let project of data.projects) {
            const resProject = await client.query(`
                INSERT INTO Projects (name, description, githubLink, deploymentLink)
                VALUES ($1, $2, $3, $4) RETURNING id
            `, [
                project.name,
                project.description,
                project.githubLink,
                project.deploymentLink
            ]);
            const projectId = resProject.rows[0].id;

            // If the project has frontend/backend details, insert them into respective tables
            // Example for ProjectFrontend
            if (project.frontend) {
                await client.query(`
                    INSERT INTO ProjectFrontend (project_id, description, githubLink, deploymentLink)
                    VALUES ($1, $2, $3, $4)
                `, [
                    projectId,
                    project.frontend.description,
                    project.frontend.githubLink,
                    project.frontend.deploymentLink
                ]);
            }
            
            // Similar logic for ProjectBackend
            if (project.backend) {
                // Insert into ProjectBackend
                await client.query(`
                    INSERT INTO ProjectBackend (project_id, description, githubLink, deploymentLink)
                    VALUES ($1, $2, $3, $4)
                `, [
                    projectId,
                    project.backend.description,
                    project.backend.githubLink,
                    project.backend.deploymentLink
                ]);
            }
        }

    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        client.release();
    }
}

seedDatabase();
