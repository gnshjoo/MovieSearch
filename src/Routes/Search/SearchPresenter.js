import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";


const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  loading,
  searchTerm,
  handleSubmit,
  error,
  updateTerm
}) => (
  <Container>
    <Helmet><title>Search | nomflix</title></Helmet>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TV Shows..."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map(movie => (
              <Poster 
              key={movie.id} 
              id={movie.id} 
              title={movie.title} 
              imageUrl={movie.poster_path} 
              isMovie={true} 
              rating={movie.vote_average} 
              year={movie.release_date.substring(0,4)}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map(tv => (
              <Poster 
              key={tv.id} 
              id={tv.id} 
              title={tv.name} 
              imageUrl={tv.poster_path} 
              isMovie={false} 
              rating={tv.vote_average} 
              year={tv.first_air_date.substring(0,4)}
              />
            ))}
          </Section>
        )}
      </>
    )}
    { error && <Message color="#e74c3c" text={error} />}
    { movieResults &&
      tvResults &&
      tvResults.length === 0 &&
      movieResults.length === 0 && 
      (<Message text="Noting Found" color="#95a5a6" />
      )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;
