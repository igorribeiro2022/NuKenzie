import { Page } from "./style";
import SvgLanding from "../../Assets/svgLandingPage.svg"

export default function LandingPage({setIsLogged}) {
    return (
        <Page>
            <section>
                <div>
                    <h1><span>Nu</span> Kenzie</h1>
                    <h2>Centralize o controle das suas finanças</h2>
                    <p>de forma rápida e segura.</p>
                    <button onClick={() => setIsLogged(true)}>Iniciar</button>
                </div>
            </section>
            <aside>
                <img src={SvgLanding} alt="" />
            </aside>
        </Page>
    )
}