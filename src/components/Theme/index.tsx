import { PropsWithChildren } from "react";
import * as C from "./style";
import Header from "../Header";
import SidebarItem from "../SidebarItem";
import { useForm } from "../../contexts/FormContext";

export default function Theme({ children }: PropsWithChildren) {
  const { state } = useForm();


  return (
    <div>
      <C.Container>
        <C.Area>
          <Header />

          <C.Steps>
            <C.Sidebar>
              <SidebarItem
                title="Pessoal"
                description="Se identifique"
                icon="profile"
                path="/"
                active={state.currentStep === 1}
              />
              <SidebarItem
                title="Profissional"
                description="Seu nível"
                icon="book"
                path="/step2"
                active={state.currentStep === 2}

              />
              <SidebarItem
                title="Contatos"
                description="Como te achar"
                icon="mail"
                path="/step3"
                active={state.currentStep === 3}
              />

              <SidebarItem
                title="Dados"
                description="Todos seus dados"
                icon="data"
                path="/step4"
                active={state.currentStep === 4}
              />
            </C.Sidebar>
            <C.Page>{children}</C.Page>
          </C.Steps>
        </C.Area>
      </C.Container>
    </div>
  );
}
