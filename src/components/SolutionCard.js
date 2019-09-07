import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import UserDetails from './UserDetails'

function SolutionCard() {
    return (
      <div className="SolutionCard">
        <Container fixed>
          <UserDetails />
        </Container>
      </div>
    );
  }

export default SolutionCard