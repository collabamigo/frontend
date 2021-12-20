import React from "react"
import styles from "./404.module.css";

function NotFound() {
  return (
      <div className={styles.boddy}>
          <div id={styles.main}>
              <div className={styles.fof}>
                  <h1>
                      Error 404
                  </h1>

                  <h2>
                      Go back to Home page
                      {/* TODO: link this to homepage */}
                  </h2>
              </div>
          </div>

      </div>
      )
}

export default NotFound
