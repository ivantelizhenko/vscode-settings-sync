import styled from "styled-components";
import Heading from "./Heading";
import Icon from "./Icon";
import UnstyledButton from "./UnstyledButton";
import Button from "./Button";
import { WEIGHTS } from "../constants";

const testData = [
  {
    id: "asdhghgh",
    date: "30 хвилин тому",
    imgsrc: "../../public/user/cat.png",
    title: "ТЕРМІНОВО! ЗНАЙДЕНО КОТИКА — ПОТРІБЕН ПРИТУЛОК!",
    description:
      "На тимчасово окупованій території було знайдено кота — розгублений, голодний, але дуже лагідний і ручний. Ймовірно, загубився або залишився без господарів.",
  },
  {
    id: "213883884",
    date: "2 дні тому",
    imgsrc: "../../public/user/dog.png",
    title: "ЗНАЙДЕНО СОБАКУ — ПОТРІБЕН ДІМ!",
    description:
      "Було знайдено песика. Він виснажений, але добрий і довірливий. Будь ласка, відгукніться, якщо можете прихистити або поширити цю інформацію!",
  },
];

function UserAccount({ setPage }) {
  return (
    <Wrapper>
      <ButtonEdit>
        <Icon id="edit" size={24} strokeWidth={2} />
      </ButtonEdit>
      <Heading as="h2">Акаунт</Heading>

      <Profile>
        <Image alt="" src="../../public/user/profile.png" />
        <h3>Ганна Шестакова</h3>
      </Profile>

      <Contacts>
        <Contact>
          <Icon id="phone" size={16} strokeWidth={2} />
          <span>+38(099) 990-80-08</span>
        </Contact>
        <Contact>
          <Icon id="mail" size={16} strokeWidth={2} />
          <span>hanna_shestakova@gmail.com</span>
        </Contact>
      </Contacts>

      <UserButton type="fill" onClick={() => setPage("createPost1")}>
        <Icon id="plus" size={24} strokeWidth={2} />
        Створити оголошення
      </UserButton>

      <Section>
        <p>Оголошення</p>
        <p>Улюблене</p>
        <p>Запити</p>
      </Section>

      {testData.map((data) => {
        const { id, date, imgsrc, title, description } = data;

        return (
          <CardWrapper key={id}>
            <CardHeader>
              <div style={{ display: "flex", gap: "16px" }}>
                <CardProfileImage src="../../public/user/profile.png" alt="" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <p>Ганна Шестакова</p>
                  <span>{date}</span>
                </div>
              </div>
              <Icon id="more" size={24} strokeWidth={2} />
            </CardHeader>
            <div>
              <CardImage>
                <img src={imgsrc} alt="" />
                <BookmarkButton>
                  <Icon id="bookmark" size={24} strokeWidth={2} />
                </BookmarkButton>
              </CardImage>
              <div style={{ display: "flex", gap: "24px", paddingTop: "16px" }}>
                <Icon id="heart" size={24} strokeWidth={2} />
                <Icon id="comment" size={24} strokeWidth={2} />
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: "20px" }}>{title}</h2>
              <CardDescription>{description}</CardDescription>
            </div>
            <Button type="outline">Переглянути статистику</Button>
          </CardWrapper>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  row-gap: 24px;
`;

const ButtonEdit = styled(UnstyledButton)`
  position: absolute;
  top: 16px;
  right: 16px;
`;

const Profile = styled.div`
  display: flex;
  gap: 16px;
`;

const Image = styled.img`
  display: block;
  width: 80px;
  object-fit: cover;
  border-radius: 50%;
`;

const Contacts = styled.div`
  display: grid;
  row-gap: 12px;
`;

const Contact = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const UserButton = styled(Button)`
  font-weight: ${WEIGHTS.normal};
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

const Section = styled.div`
  display: flex;
  gap: 16px;

  p {
    text-align: center;
    flex: 1;
    padding: 1;
    border-bottom: 2px solid;
    border-color: #cecece;
    color: #cecece;
  }

  p:first-of-type {
    border-color: var(--color-secondary);
    color: initial;
  }
`;

const CardWrapper = styled.div`
  display: grid;
  gap: 16px;
  padding: 24px;
  border: 1px solid #e0e0e0;
  border-radius: 24px;
`;
const CardHeader = styled.header`
  display: flex;
  font-size: 12px;
  justify-content: space-between;

  span {
    color: #b1b1b1;
    font-size: 10px;
  }
`;
const CardProfileImage = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  object-fit: cover;
`;
const CardDescription = styled.p``;

const CardImage = styled.div`
  border-radius: 24px;
  position: relative;

  & img {
    width: 100%;
    object-fit: cover;
  }
`;

const BookmarkButton = styled(UnstyledButton)`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 16px;
  background-color: #fff;
  border-radius: 50%;
`;
export default UserAccount;
