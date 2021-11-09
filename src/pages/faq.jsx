import React from "react"
import FAQModal from "../components/FAQModal";

class Faq extends React.Component{

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(){
        return true
    }
render() {
    const temp = [{"q":"Online play and Nintendo Switch Online app","a":"The Nintendo Switch Online service lets Nintendo Switch owners enjoy online play in compatible games like Splatoon 2, ARMS, and Mario Kart 8 Deluxe.\n" +
            "\n" + "Nintendo Switch Online members can also access the Nintendo Switch Online app to send play invitations and participate in voice chat (restricted to members aged 13+) for compatible games such as Splatoon 2."},
        {"q":"Classic Game Libraries","a":"Members can enjoy a growing library of NES games and Super NES games with added online play as part of the paid Nintendo Switch Online membership. With the Nintendo Switch Online smartphone app, you can also voice chat during your play sessions. The service includes 20 games at launch, with new NES and Super NES games added in the future. For additional information, please review our NES and Super NES – Nintendo Switch Online Overview & FAQ.\n" +
                "\n" +
                "Nintendo Switch Online + Expansion Pack members also gain access to libraries of classic Nintendo 64 and SEGA Genesis games."},
        {"q":"Save Data Cloud Backup","a":"Players with a Nintendo Switch Online membership can save game data online for compatible games. Save data is linked to your Nintendo Account, so you can access it from any Nintendo Switch system by signing in and downloading your save data."},
        {"q":"Special Offers","a":"Nintendo Switch Online members in the U.S. and Canada have access to exclusive special offers, such as the option to purchase specially designed classic game controllers for use with the classic game libraries."}]
        return (
            <div>
                Credits to Nintendo Switch Online Service FAQ for these dummy questions and answers printed in console log
                for testing
                <FAQModal>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                          est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                </FAQModal>
            </div>
        );
    }
}

export default Faq
