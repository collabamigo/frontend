import React from "react"

class Faq extends React.Component{

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(): boolean {
        return true
    }

    temp = [{"q":"Online play and Nintendo Switch Online app","a":"The Nintendo Switch Online service lets Nintendo Switch owners enjoy online play in compatible games like Splatoon 2, ARMS, and Mario Kart 8 Deluxe.\n" +
            "\n" + "Nintendo Switch Online members can also access the Nintendo Switch Online app to send play invitations and participate in voice chat (restricted to members aged 13+) for compatible games such as Splatoon 2."},
        {"q":"Classic Game Libraries","a":"Members can enjoy a growing library of NES games and Super NES games with added online play as part of the paid Nintendo Switch Online membership. With the Nintendo Switch Online smartphone app, you can also voice chat during your play sessions. The service includes 20 games at launch, with new NES and Super NES games added in the future. For additional information, please review our NES and Super NES – Nintendo Switch Online Overview & FAQ.\n" +
                "\n" +
                "Nintendo Switch Online + Expansion Pack members also gain access to libraries of classic Nintendo 64 and SEGA Genesis games."},
        {"q":"Save Data Cloud Backup","a":"Players with a Nintendo Switch Online membership can save game data online for compatible games. Save data is linked to your Nintendo Account, so you can access it from any Nintendo Switch system by signing in and downloading your save data."},
        {"q":"Special Offers","a":"Nintendo Switch Online members in the U.S. and Canada have access to exclusive special offers, such as the option to purchase specially designed classic game controllers for use with the classic game libraries."}];

    render() {
        return (
            <div>
                Credits to Nintendo Switch Online Service FAQ for these dummy questions and answers printed in console log
                for testing
                {console.log(this.temp)}
            </div>
        );
    }
}

export default Faq
