import React from "react";
import styles from "./cv.module.css";

function Cv() {
  return (
    <div className={`container-fluid`}>
      <div className={`row`}>
        <div
          className={`col background-left col-right justify-Content-Center`}
          id={styles.grad4}
        >
          <div className={styles.resume}>
            <div className={`${styles.resumeRight} mx-auto`}>
              <div className={`${styles.itemTop}`}>
                <p className={styles.cvFont}>
                  Front-end Developer with a master in media science &
                  communication
                </p>
              </div>
              <div className={`${styles.resumeFlex} row`}>
                <div
                  className={` ${styles.resumeItem} ${styles.resumeEducation} col-12 col-md-6`}
                >
                  <div className={styles.title}>
                    <p className={styles.bold}>Education</p>
                  </div>
                  <ul>
                    <li>
                      <div className={styles.date}>2021 - 2023</div>
                      <div className={styles.info}>
                        <p className={styles.semiBold}>
                          Front-end Development ⎢ Noroff
                        </p>
                        <p
                          className={`${styles.info} ${styles.SmallFont} m-0 mt-2`}
                        >
                          JavaScript, HTML5, CSS, SCSS, REACT, bootstrap,
                          github, Adobe XD
                        </p>
                        <p className={`${styles.info} ${styles.SmallFont} m-0`}>
                          Automated testing, Unit-testing
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className={styles.date}>2016 - 2018</div>
                      <div className={styles.info}>
                        <p className={styles.semiBold}>
                          {" "}
                          Master of Media and Communication <br /> ⎢ University
                          of Bergen
                        </p>
                        <p className={`${styles.SmallFont}`}>
                          Specialization: Audience Studies, Reception Analysis &
                          Visual Rhetorics
                          <br />
                          2018 Guest lecturer | University of Bergen
                          <br />
                          Media Use: Identity and society
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className={styles.date}>2013 - 2015</div>
                      <div className={styles.info}>
                        <p className={styles.semiBold}>
                          {" "}
                          Bachelor of Media and Communication ⎢University of
                          Bergen
                        </p>
                        <p className={`${styles.SmallFont} mt-2`}>
                          Film, History and Analysis, Media Rhetoric,
                          Broadcasting History, Media Representation and
                          Identity.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className={`${styles.resumeItem} ${styles.resumeWork} col-12 col-md-6`}
                >
                  <div className={styles.title}>
                    <p className={styles.bold}>Work Experience</p>
                  </div>
                  <ul className={styles.ul}>
                    <li>
                      <div className={styles.date}>2018 - 2022</div>
                      <div className={styles.info}>
                        <p className={styles.semiBold}>
                          Technical Support ⎢ BKK Digitek
                        </p>
                        <p
                          className={`${styles.info} ${styles.SmallFont} mt-2`}
                        >
                          Teamleader- winback-team, technical support, customer
                          service
                          <br />
                          Projects: Design Thinking, LoRaWan
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className={styles.date}>2016 - 2018</div>
                      <div className={styles.info}>
                        <p className={styles.semiBold}>
                          Technical Support ⎢ University of Bergen
                        </p>
                        <p
                          className={`${styles.info} ${styles.SmallFont} mt-2`}
                        >
                          Assisting candidates with technical issues, monitoring
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className={`${styles.date} mt-3`}>2013 - 2016</div>
                      <div className={styles.info}>
                        <p className={styles.semiBold}>
                          Customer service | Fjordkraft{" "}
                        </p>
                        <p
                          className={`${styles.info} ${styles.SmallFont} mt-2`}
                        >
                          Sales, customer service
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cv;
