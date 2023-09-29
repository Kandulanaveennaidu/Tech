import styles from "./StrongTeamsStrongBpoResults.module.css";
import FetureDirectionsAndBeyond from "./FetureDirectionsAndBeyond";
const StrongTeamsStrongBpoResults = () => {
  return (
    <>
      <div className={styles.bpo16}>
        <b className={styles.strongTeamsStrong}>
          STRONG TEAMS, STRONG BPO RESULTS
        </b>
        <div className={styles.frameParent5}>
          <div className={styles.frameParent6}>
            <div className={styles.frameChild4} />
            <div className={styles.objectWrapper}>
              <img className={styles.objectIcon} alt="" src="/objectBBBBB.svg" />
            </div>
            <div className={styles.collaboration}>Collaboration</div>
            <div className={styles.encourageCollaborationAnd}>
              Encourage collaboration and teamwork to foster trust, commitment,
              and shared learning among staff.
            </div>
          </div>
          <div className={styles.frameParent6}>
            <div className={styles.frameChild5} />
            <div className={styles.objectWrapper}>
              <img className={styles.groupIcon} alt="" src="/group-72BBBBB.svg" />
            </div>
            <div className={styles.diversityAndInclusion}>
              Diversity and Inclusion
            </div>
            <div className={styles.embraceDiversityAnd}>
              Embrace diversity and inclusion in the hiring and management of
              staff. Recognize the importance of diversity in creativity,
              communication, and innovation.
            </div>
          </div>
          <div className={styles.frameParent6}>
            <div className={styles.frameChild5} />
            <div className={styles.objectWrapper}>
              <img className={styles.objectIcon1} alt="" src="/object1BBBBB.svg" />
            </div>
            <div className={styles.teamBuildingAnd}>
              Team Building and Social Activities
            </div>
            <div className={styles.organizeTeamBuildingActivit}>
              Organize team-building activities and social events to promote staff
              engagement, harmony, and team work.
            </div>
          </div>
        </div>
      </div>
      <FetureDirectionsAndBeyond />
    </>
  );
};

export default StrongTeamsStrongBpoResults;
