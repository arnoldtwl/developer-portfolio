// app\lib\data.js
import 'server-only';
import { sql } from '@vercel/postgres';
import { convertDate } from './utils';


export async function getBasics() {
    try {
        const data = await sql`
            SELECT * FROM basics
            ORDER BY id DESC
            LIMIT 1;
        `;

        // Filter out duplicate profiles, null, undefined, and empty strings
        const basicsData = data.rows[0];
        return basicsData;
    } catch (error) {
        console.error('Database error in getBasics:', error);
        throw new Error('Failed to fetch basics');
    }
}

export async function getProfiles() {
    try {
        const result = await sql`
            SELECT * FROM profiles;
        `;
        // console.log('result', result.rows)
        const profilesData = result.rows.map((profile) => {
            return {
                id: profile.id,
                network: profile.network,
                url: profile.url
            };
        });

        // Filter out duplicate profiles, null, undefined, and empty strings
        const uniqueProfiles = profilesData.filter((profile, index, self) =>
            index === self.findIndex((t) => (
                t.url === profile.url && t.url && profile.url
            ))
        );

        // console.log('uniqueProfiles', uniqueProfiles)
        return uniqueProfiles;
    } catch (error) {
        console.error(`Database error in getProfiles:`, error);
        throw new Error('Failed to fetch profiles');
    }
}

export async function getEducation() {
  try {
    const result = await sql`
            SELECT * FROM education;
        `;

    const educationData = result.rows.map((education) => {
      const endDate = convertDate(education.enddate);
      return {
        id: education.id,
        institution: education.institution,
        area: education.area,
        studyType: education.studytype,
        endDate,
      };
    });

    return educationData;
  } catch (error) {
    console.error("Database error in getEducation:", error);
    throw new Error("Failed to fetch education");
  }
}

export async function getWork() {
    try {
        const result = await sql`
            SELECT * FROM work;
        `;

        // console.log('result', result.rows)
        const workData = result.rows.map((work) => {
            const startDate = convertDate(work.startdate);
            const endDate = convertDate(work.enddate);
            return {
                id: work.id,
                company: work.company,
                position: work.position,
                startDate,
                endDate,
                summary: work.summary
            };
        });

        // console.log('workData', workData)
        return workData;
    } catch (error) {
        console.error('Database error in getWork:', error);
        throw new Error('Failed to fetch work');
    }
}

export async function getSkills() {
    try {
        const result = await sql`
            SELECT skills.id, skills.name FROM skills;
        `;

        const skillsData = result.rows.map((skill) => {
            return {
                id: skill.id,
                name: skill.name
            };
        });

        // Filter out  duplicate skills, null, undefined, and empty strings
        const uniqueSkills = skillsData.filter((skill, index, self) =>
            index === self.findIndex((t) => (
                t.name === skill.name && t.name && skill.name
            ))
        );

        // console.log('uniqueSkills', uniqueSkills)
        return uniqueSkills;
    } catch (error) {
        console.error('Database error in getSkills:', error);
        throw new Error('Failed to fetch skills');
    }
}

export async function getProjects() {
    try {
        const result = await sql`
            SELECT projects.id, projects.name, projects.description, projects.githublink, projects.deploymentlink FROM projects;
        `;

        const projectsData = result.rows.map((project) => {
            return {
                id: project.id,
                name: project.name,
                description: project.description,
                github: project.githublink,
                deployment: project.deploymentlink
            };
        });

        // console.log('projectsData', projectsData)
        return projectsData;
    } catch (error) {
        console.error('Database error in getProjects:', error);
        throw new Error('Failed to fetch projects');
    }
}

export async function getProjectFrontend() {
    try {
        const result = await sql`
            SELECT * FROM projectfrontend;
        `;

        const frontendData = result.rows.map((frontend) => {
            return {
                id: frontend.id,
                projectid: frontend.project_id,
                github: frontend.githublink,
                deployment: frontend.deploymentlink
            };
        });

        // console.log('frontendData', frontendData)
        return frontendData;
      
    } catch (error) {
        console.error(`Database error in getProjectFrontend:`, error);
        throw new Error('Failed to fetch project frontend');
    }
}

export async function getProjectBackend() {
    try {
        const result = await sql`
            SELECT * FROM projectbackend;
        `;
        const backendData = result.rows.map((backend) => {
            return {
                id: backend.id,
                projectid: backend.project_id,
                github: backend.githublink,
                deployment: backend.deploymentlink
            };
        });

        // console.log('backendData', backendData)
        return backendData;
    } catch (error) {
        console.error(`Database error in getProjectBackend:`, error);
        throw new Error('Failed to fetch project backend');
    }
}
