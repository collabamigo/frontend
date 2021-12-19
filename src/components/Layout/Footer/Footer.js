import React from "react"
import styles from "./Footer.module.css";
import {SvgIcon} from "common/SvgIcon";

function Footer() {
  return (
      <footer className={styles.site_footer}>
          <div className="container">
              <div className="row">
                  <div className="col-sm-12 col-md-6">
                      
                      <br />

                      <h3>
                          CollabAmigo has helped
                      </h3>


                      <div className="text-justify ">
                          <ul className={styles.listt}>
                              <li >
                                  X students to register for events
                              </li>

                              <li>
                                  Y clubs and Organizations to host events
                              </li>

                              <li>
                                  Z registrations to take place
                              </li>

                          </ul>
                      </div>
                  </div>

                  <div className={"col-xs-3 col-sm-3 col-md-3 p-4 " + styles.widthf}>
                      <h6>
                          Categories
                      </h6>

                      <ul className={styles.footer_links}>
                          <li>
                              <a href="http://scanfcode.com/category/c-language/">
                                  C
                              </a>
                          </li>

                          <li>
                              <a href="http://scanfcode.com/category/front-end-development/">
                                  UI Design
                              </a>
                          </li>

                          <li>
                              <a href="http://scanfcode.com/category/back-end-development/">
                                  PHP
                              </a>
                          </li>

                          <li>
                              <a href="http://scanfcode.com/category/java-programming-language/">
                                  Java
                              </a>
                          </li>

                          <li>
                              <a href="http://scanfcode.com/category/android/">
                                  Android
                              </a>
                          </li>

                          <li>
                              <a href="http://scanfcode.com/category/templates/">
                                  Templates
                              </a>
                          </li>
                      </ul>
                  </div>

                  <div className={"col-xs-3 col-sm-3 col-md-3 p-4 " + styles.widthf}>
                      <h6>
                          Quick Links
                      </h6>

                      <ul className={styles.footer_links}>
                          <li>
                              <a href="http://scanfcode.com/about/">
                                  About Us
                              </a>
                          </li>

                          <li>
                              <a href="http://scanfcode.com/contact/">
                                  Contact Us
                              </a>
                          </li>

                          <li>
                              <a href="http://scanfcode.com/contribute-at-scanfcode/">
                                  Contribute
                              </a>
                          </li>

                          <li>
                              <a href="http://scanfcode.com/privacy-policy/">
                                  Privacy Policy
                              </a>
                          </li>

                          <li>
                              <a href="http://scanfcode.com/sitemap/">
                                  Sitemap
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>

              <hr />
          </div>

          <div className="container">
              <div className="row">
                  <div className="col-md-8 col-sm-6 col-xs-12">
                      <p className={styles.copyright_text}>
                          Copyright &copy; 2021 All Rights Reserved by  
                          {' '}

                          {" "}

                          <a href="https://github.com/watson-hex">
                              Watson-Hex
                          </a>

                          {" "}

                          .
                      </p>
                  </div>

                  <div className="col-md-4 col-sm-6 col-xs-12">
                      <ul className={styles.social_icons}>
                          <li>
                              <a
                                  className="facebook"
                                  href="#"
                              >
                                  <svg
                                      className={styles.colorwhite}
                                      height="50"
                                      viewBox="0 0 50 50"
                                      width="28"
                                      xmlns="http://www.w3.org/2000/svg"
                                  >
                                      <path d="M47.3,21.01c-0.58-1.6-1.3-3.16-2.24-4.66c-0.93-1.49-2.11-2.93-3.63-4.13c-1.51-1.19-3.49-2.09-5.59-2.26l-0.78-0.04	c-0.27,0.01-0.57,0.01-0.85,0.04c-0.57,0.06-1.11,0.19-1.62,0.34c-1.03,0.32-1.93,0.8-2.72,1.32c-1.42,0.94-2.55,2.03-3.57,3.15	c0.01,0.02,0.03,0.03,0.04,0.05l0.22,0.28c0.51,0.67,1.62,2.21,2.61,3.87c1.23-1.2,2.83-2.65,3.49-3.07	c0.5-0.31,0.99-0.55,1.43-0.68c0.23-0.06,0.44-0.11,0.64-0.12c0.1-0.02,0.19-0.01,0.3-0.02l0.38,0.02c0.98,0.09,1.94,0.49,2.85,1.19	c1.81,1.44,3.24,3.89,4.17,6.48c0.95,2.6,1.49,5.44,1.52,8.18c0,1.31-0.17,2.57-0.57,3.61c-0.39,1.05-1.38,1.45-2.5,1.45	c-1.63,0-2.81-0.7-3.76-1.68c-1.04-1.09-2.02-2.31-2.96-3.61c-0.78-1.09-1.54-2.22-2.26-3.37c-1.27-2.06-2.97-4.67-4.15-6.85	L25,16.35c-0.31-0.39-0.61-0.78-0.94-1.17c-1.11-1.26-2.34-2.5-3.93-3.56c-0.79-0.52-1.69-1-2.72-1.32	c-0.51-0.15-1.05-0.28-1.62-0.34c-0.18-0.02-0.36-0.03-0.54-0.03c-0.11,0-0.21-0.01-0.31-0.01l-0.78,0.04	c-2.1,0.17-4.08,1.07-5.59,2.26c-1.52,1.2-2.7,2.64-3.63,4.13C4,17.85,3.28,19.41,2.7,21.01c-1.13,3.2-1.74,6.51-1.75,9.93	c0.01,1.78,0.24,3.63,0.96,5.47c0.7,1.8,2.02,3.71,4.12,4.77c1.03,0.53,2.2,0.81,3.32,0.81c1.23,0.03,2.4-0.32,3.33-0.77	c1.87-0.93,3.16-2.16,4.33-3.4c2.31-2.51,4.02-5.23,5.6-8c0.44-0.76,0.86-1.54,1.27-2.33c-0.21-0.41-0.42-0.84-0.64-1.29	c-0.62-1.03-1.39-2.25-1.95-3.1c-0.83,1.5-1.69,2.96-2.58,4.41c-1.59,2.52-3.3,4.97-5.21,6.98c-0.95,0.98-2,1.84-2.92,2.25	c-0.47,0.2-0.83,0.27-1.14,0.25c-0.43,0-0.79-0.1-1.13-0.28c-0.67-0.35-1.3-1.1-1.69-2.15c-0.4-1.04-0.57-2.3-0.57-3.61	c0.03-2.74,0.57-5.58,1.52-8.18c0.93-2.59,2.36-5.04,4.17-6.48c0.91-0.7,1.87-1.1,2.85-1.19l0.38-0.02c0.11,0.01,0.2,0,0.3,0.02	c0.2,0.01,0.41,0.06,0.64,0.12c0.26,0.08,0.54,0.19,0.83,0.34c0.2,0.1,0.4,0.21,0.6,0.34c1,0.64,1.99,1.58,2.92,2.62	c0.72,0.81,1.41,1.71,2.1,2.63L25,25.24c0.75,1.55,1.53,3.09,2.39,4.58c1.58,2.77,3.29,5.49,5.6,8c0.68,0.73,1.41,1.45,2.27,2.1	c0.61,0.48,1.28,0.91,2.06,1.3c0.93,0.45,2.1,0.8,3.33,0.77c1.12,0,2.29-0.28,3.32-0.81c2.1-1.06,3.42-2.97,4.12-4.77	c0.72-1.84,0.95-3.69,0.96-5.47C49.04,27.52,48.43,24.21,47.3,21.01z" />
                                  </svg>
                              </a>
                          </li>

                          <li>
                              <a
                                  className="linkedin"
                                  href="#"
                              >
                                  <svg
                                      className={styles.colorwhite}
                                      height="25"
                                      viewBox="0 0 24 28"
                                      width="28"
                                      xmlns="http://www.w3.org/2000/svg"
                                  >
                                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                  </svg>
                              </a>
                          </li>

                          <li>
                              <a
                                  className="instagram"
                                  href="#"
                              >
                                  <svg
                                      className={styles.colorwhite}
                                      height="50"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      xmlns="http://www.w3.org/2000/svg"
                                  >
                                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                  </svg>
                              </a>
                          </li>

                          <li>
                              <a
                                  className="email"
                                  href="#"
                              >
                                  <svg
                                      className={styles.colorwhite}
                                      height="24"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      xmlns="http://www.w3.org/2000/svg"
                                  >
                                      <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                                  </svg>
                              </a>
                          </li>   
                      </ul>
                  </div>
              </div>
          </div>
      </footer>
  )
}

export default Footer