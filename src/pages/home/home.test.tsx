import { render } from "@testing-library/react";
import  Home  from "./Home";

describe("Testa a funcionalidade da pagina principal", () => {
    it("Renderiza algo na tela", () => {
        render(<Home />)

        expect("Clique aqui").tobeInTheDocument()
    })
})