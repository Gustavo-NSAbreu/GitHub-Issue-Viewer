import { useContext, useEffect, useState } from "react";
import { RepositoryContext } from "../../context/RepositoryContext";
import { HomeContainer } from "./styles";
import RepositorySearchBar from "./components/RepositoySearchBar";
import UserInfo from "./components/UserInfo";
import IssuesFeed from "./components/IssuesFeed";

export default function Home() {

  const { repository } = useContext(RepositoryContext);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(repository.length > 0)
  }, [repository])

  return (
    <HomeContainer>
      {isActive
        ? (
          <div>
           <UserInfo />
           <IssuesFeed />
          </div>
         ) 
        : <RepositorySearchBar />
      }
    </HomeContainer>
  )
}