import { Link } from "react-router-dom";
import * as C from "./styles.ts";
import ProfileIcon from "../../svgs/profile.svg";
import BookIcon from "../../svgs/book.svg";
import MailIcon from "../../svgs/mail.svg";
import DataIcon from "../../svgs/database.svg";

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
};

export default function SidebarItem({
  title,
  description,
  icon,
  path,
  active,
}: Props) {
  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>

        <C.IconArea active={active}>
          {icon === "profile" && (
            <img src={ProfileIcon} width={24} height={24} />
          )}
          {icon === "book" && <img src={BookIcon} width={24} height={24} />}
          {icon === "mail" && <img src={MailIcon} width={24} height={24} />}
          {icon === "data" && <img src={DataIcon} width={24} height={24} />}
        </C.IconArea>

        <C.Point active={active}></C.Point>
      </Link>
    </C.Container>
  );
}
