
const { db } = require('@vercel/postgres');
const fs = require('fs');
const path = require('path');

async function seedDatabase() {
    const data = JSON.parse(fs.readFileSync(path.join('data', 'resume.json'), 'utf8'));

    const client = await db.connect();

    try {
        // Create tables
        // ... (Create table queries here)

        // Insert into Basics
        // ... (Insert into Basics logic here)

        // Insert into Profiles
        // ... (Insert into Profiles logic here)

        // Insert into Work
        // ... (Insert into Work logic here)

        // Insert into Education
        // ... (Insert into Education logic here)

        // Insert into Skills
        // ... (Insert into Skills logic here)

        // Insert into Projects, ProjectFrontend, ProjectBackend
        // ... (Insert into Projects and its related tables logic here)

    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        client.release();
    }
}

seedDatabase();
