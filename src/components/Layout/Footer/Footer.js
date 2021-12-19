import React from "react"
import styles from "./Footer.module.css";

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
                                  <i className="fa fa-facebook" />
                              </a>
                          </li>

                          <li>
                              <a
                                  className="twitter"
                                  href="#"
                              >
                                  <i className="fa fa-twitter" />
                              </a>
                          </li>

                          <li>
                              <a
                                  className="dribbble"
                                  href="#"
                              >
                                  <i className="fa fa-dribbble" />
                              </a>
                          </li>

                          <li>
                              <a
                                  className="linkedin"
                                  href="#"
                              >
                                  <i className="fa fa-linkedin" />
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