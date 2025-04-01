import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

function Componente3() {
  return (
    <div>
      <Button>Componente</Button>
      <TomatoButton>3</TomatoButton>
    </div>
  );
}

export default Componente3;
