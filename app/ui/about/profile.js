// app\ui\about\profile.js
import Image from 'next/image';
import styles from '@/app/portfolio/about/about.module.css';
import { getBasics, getProfiles } from '@/app/lib/data';

const Profile = async () => {
    const basicData = await getBasics();
    if (!basicData) {
        return <div>Failed to load profile data</div>;
    }
    const profileData = await getProfiles();
    if (!profileData) {
        return <div>Failed to load profile data</div>;
    }

    return (
        <section className={styles['profile-container']}>
            <div className={styles['profile-info']}>
                <h2 className={styles.heading}>{basicData.name}</h2>
                <Image 
                    src={basicData.picture}
                    alt="Profile-image" 
                    className={styles['profile-image']} 
                    width={250}
                    height={250}
                />
                <h5 className={styles.heading}>{basicData.label}</h5>
                <h5 className={styles.heading}>Website: <a href={basicData.website} className={styles.website}>{basicData.website}</a></h5>
                {profileData.map((profile) => (
                    <h5 className={styles.heading} key={profile.network}>
                        {profile.network} <a href={profile.url} className={styles.website}>{profile.url}</a>
                    </h5>
                ))}
            </div>
        </section>
    );
};

export default Profile;
