import {
  Wrapper,
  StyledLink,
} from "./Home.styled"

import showcase from "../../assets/Landing page image.svg"


const Home = () => {
  return (
    <Wrapper>
      <h1>
        Imagine if
        <span> Snapshat </span>
        had events.
      </h1>
      <p>
        Easily host and share events with your friends across any social media.
      </p>
      <img src = {showcase} alt = "showcase"/>
      
      <StyledLink to = "/create">
        Create my event
      </StyledLink>
    </Wrapper>
    )
}

export default Home