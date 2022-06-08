import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { selectTrending } from "../features/movieSlice";
import { useSelector } from "react-redux";

export default function Trending(props) {
  const movies = useSelector(selectTrending);
  return (
    <Container>
      <h4>Trending</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              {movie.id}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 0 26px;
  margin-top: 10px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 50%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 70%) 0px 30px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    height: 100%;
    display: block;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    transform: scale(1.05);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.7);
  }
`;
