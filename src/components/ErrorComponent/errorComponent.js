import React from 'react';
import styled from "styled-components";

const Wrap = styled.div`
  margin: 60px auto;
`

const ErrorComponent = ({message}) => {

  return(
    <Wrap>
      <h2>Error</h2>
      <p>{message === 'server' ? "Server is not responding." : "Something wrong."} Try again later</p>
    </Wrap>
  )
}

export default ErrorComponent;