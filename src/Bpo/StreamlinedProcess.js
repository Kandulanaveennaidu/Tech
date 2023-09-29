import styles from "./StreamlinedProcess.module.css";
import DomainMasteryUnleashed from "./DomainMasteryUnleashed"
const StreamlinedProcess = () => {
  return (
    <>
      <div className={styles.bpo6}>
        <b className={styles.streamlinedProcessesFor}>
          STREAMLINED PROCESSES FOR BPO SUCCESS
        </b>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameChild} />
            <div className={styles.objectWrapper}>
              <img className={styles.objectIcon} alt="" src="/objectB.svg" />
            </div>
            <div className={styles.documentation}>Documentation</div>
            <div className={styles.effectiveDocumentationRepliContainer}>
              <p className={styles.collaborativeSynergyWeWork}>
                Effective Documentation: Replicate successful processes, minimise
                errors
              </p>
              <p className={styles.collaborativeSynergyWeWork}>&nbsp;</p>
              <p className={styles.collaborativeSynergyWeWork}>
                Process Boundaries: Define clear process boundaries.
              </p>
              <p className={styles.collaborativeSynergyWeWork}>&nbsp;</p>
              <p className={styles.collaborativeSynergyWeWork}>
                Process Flows: Document step-by-step process flow.
              </p>
              <p className={styles.collaborativeSynergyWeWork}>&nbsp;</p>
              <p className={styles.collaborativeSynergyWeWork}>
                Input/Output Requirements: Define input/output requirements.
              </p>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameChild} />
            <div className={styles.objectWrapper}>
              <img className={styles.objectIcon1} alt="" src="/object1B.svg" />
            </div>
            <div className={styles.documentation}>Process Mapping</div>
            <div className={styles.effectiveDocumentationRepliContainer}>
              <p
                className={styles.collaborativeSynergyWeWork}
              >{`Gather Data: Collect relevant `}</p>
              <p className={styles.collaborativeSynergyWeWork}>
                data about the process.
              </p>
              <p className={styles.collaborativeSynergyWeWork}>&nbsp;</p>
              <p className={styles.collaborativeSynergyWeWork}>
                Identify Steps: Identify each step in the process.
              </p>
              <p className={styles.collaborativeSynergyWeWork}>&nbsp;</p>
              <p className={styles.collaborativeSynergyWeWork}>
                Establish Success Factors: Determine critical success factors and
                metrics.
              </p>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameChild} />
            <div className={styles.objectWrapper}>
              <img className={styles.objectIcon2} alt="" src="/object2B.svg" />
            </div>
            <div className={styles.continuousImprovement}>
              Continuous Improvement
            </div>
            <div className={styles.improvementGoalsDefineContainer}>
              <p className={styles.collaborativeSynergyWeWork}>
                Improvement Goals: Define clear improvement goals.
              </p>
              <p className={styles.collaborativeSynergyWeWork}>&nbsp;</p>
              <p className={styles.collaborativeSynergyWeWork}>
                Data-Driven Decision-Making: Make decisions based on data
                insights.
              </p>
              <p className={styles.collaborativeSynergyWeWork}>&nbsp;</p>
              <p className={styles.collaborativeSynergyWeWork}>
                Regular Review Processes: Establish routine review processes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <DomainMasteryUnleashed />
    </>
  );
};

export default StreamlinedProcess;
