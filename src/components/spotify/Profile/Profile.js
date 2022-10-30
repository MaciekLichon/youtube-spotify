import styles from './Profile.module.scss';


const Profile = ({ userData }) => {

  return (
    <div className={styles.profile_data}>
      <img src={userData.images[0].url} className={styles.profile_img}></img>
      <div className={styles.text}>
        <p className={styles.name}>{userData.display_name}</p>
        <p className={styles.followers}>Followers: {userData.followers.total}</p>
      </div>
    </div>
  );
};

export default Profile;
