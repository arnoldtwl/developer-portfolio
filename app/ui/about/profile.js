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
      <section className={styles["profile-container"]}>
        <div className={styles["profile-info"]}>
          <h2 className={styles.heading}>{basicData.name}</h2>
          <div className={styles["image-container"]}>
            <Image
              src={basicData.picture}
              alt="Profile image"
              width={250}
              height={250}
              priority={true}
              className={styles["profile-image"]}
            />
            {/* Add hover effect here */}
          </div>
          <h5 className={styles.heading}>{basicData.label}</h5>
          <h5 className={styles.heading}>
            Website:{" "}
            <a href={basicData.website} className={styles.website}>
              {basicData.website}
            </a>
          </h5>
          <div className={styles["social-links"]}>
            {/* Render social media icons here */}
            {profileData.map((profile) => (
              <a
                href={profile.url}
                key={profile.network}
                className={styles["social-link"]}
              >
                {/* Render social icons from public folder svg and png */}
                {profile.network === "GitHub" ? (
                  <Image
                    src="/social_icons/Github.svg"
                    alt="GitHub icon"
                    width={25}
                    height={25}
                    priority={true}
                  />
                ) : profile.network === "LinkedIn" ? (
                  <Image
                    src="/social_icons/LinkedIn.svg"
                    alt="LinkedIn icon"
                    width={25}
                    height={25}
                    priority={true}
                  />
                ) : null}
              </a>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Profile;
