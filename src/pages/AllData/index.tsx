import Theme from "../../components/Theme";
import { FormActions, useForm } from "../../contexts/FormContext";
import UserIcon from "../../svgs/user-svgrepo-com.svg";
import MailIcon from "../../svgs/mail.svg";
import GithubIcon from "../../svgs/github.svg";
import * as C from "./styles";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AllData() {
  const { state, dispatch } = useForm();
  const navigate = useNavigate()

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4,
      });
    }
  }, []);

  return (
    <Theme>
      <C.Container>
        <C.Title>Todos os dados</C.Title>
        <hr />
        <C.Data>
          <img src={UserIcon} width={35} height={35} alt="Icone de usuario" />
          <h2>{state.name}</h2>
        </C.Data>
        <C.Data>
          <img src={MailIcon} width={35} height={35} alt="Icone de Email" />
          <h2>{state.email}</h2>
        </C.Data>
        <C.Data>
          <img src={GithubIcon} width={35} height={35} alt="Icone gitHub" />
          <h2>{state.github}</h2>
        </C.Data>
      </C.Container>
    </Theme>
  );
}
