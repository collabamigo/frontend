import React from 'react';
import { contents_heeman } from './index.module.css';
import PeopleTile from 'components/About/PeopleTile';

class AboutUs extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
        <div className={contents_heeman}>
            <div className="container">
                <div className="row justify-content-center mb-4">
                    <div className="col-md-9 text-center">
                        <h1 className="mb-4">
                            The Core Team
                        </h1>

                        <p className=" text-muted mb-4 h5">
                            The young man wanted a role model. He looked long and hard in
                            his youth, but that role model never materialized. His only
                            choice was to embrace all the people in his life he didnt want
                            to be like.
                        </p>
                    </div>
                </div>

                <br />

                <br />

                <div className="row">
                    <PeopleTile
                        githubLink="https://github.com/devmrfitz"
                        image="/img/jpg/never.jpg"
                        instagramLink="https://www.instagram.com/apsaditya51/"
                        isCofounder
                        linkedinLink="https://www.linkedin.com/in/devmrfitz/"
                        name="Aditya Pratap Singh"
                        title="Bugs??? We don't do that here"
                    />

                    <PeopleTile
                        githubLink="https://github.com/heemankv"
                        image="/img/jpg/gonna.jpg"
                        instagramLink="https://www.instagram.com/heemank_v/"
                        isCofounder
                        linkedinLink="https://www.linkedin.com/in/heemankv"
                        name="Heemank Verma"
                        title="It works on my machine"
                    />

                    <PeopleTile
                        githubLink="https://github.com/Shikharhacks007"
                        image="/img/jpg/give_you_up.jpg"
                        instagramLink="https://www.instagram.com/shikhar_s_/"
                        isCofounder
                        linkedinLink="https://www.linkedin.com/in/shikhar-sharma-007/"
                        name="Shikhar Sharma"
                        title="Talk Code To Me"
                    />
                </div>

                <br />

                <div className="row">
                    <PeopleTile
                        behanceLink="https://www.behance.net/kabirsmehrok"
                        githubLink="https://github.com/KabirSinghMehrok"
                        image="/img/jpg/never_gonna.jpeg"
                        linkedinLink="https://www.linkedin.com/in/kabirsinghmehrok"
                        name="Kabir Singh Mehrok"
                        title="Bugs??? We don't do that here"
                    />

                    <PeopleTile
                        githubLink="https://github.com/Khwaish-09"
                        image="/img/jpg/let_you.jpg"
                        instagramLink="https://instagram.com/khwaiiii_"
                        name="Khwaish Rupani"
                        title="It works on my machine"
                    />

                    <PeopleTile
                        githubLink="https://github.com/sc0rp10n-py"
                        image="/img/jpg/down.jpg"
                        instagramLink="https://instagram.com/sc0rp10n.py"
                        linkedinLink="https://www.linkedin.com/in/sc0rp10n-py"
                        name="Pragyan Yadav"
                        title="Talk Code To Me"
                    />
                </div>

                <br />

                <div className="row">
                    <PeopleTile
                        githubLink="https://github.com/RahulBansal123"
                        image="/img/jpg/yups.png"
                        instagramLink="https://www.instagram.com/rahulbansal._.96/"
                        linkedinLink="https://www.linkedin.com/in/rahul-bansal-66a9581a6/"
                        name="Rahul Bansal"
                        title="It’s not a bug, it’s an undocumented feature."
                    />
                </div>
            </div>
        </div>
    );
  }
}

export default AboutUs;
