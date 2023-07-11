import React from 'react'
import {
    Hero,
    Suggestion,
    SearchSpecialists,
    Expirance,
    Blog,
    Partners,
    ListClientForm,
  } from "..";

const app = () => {
  return (
    <div>
        <Hero />
      <Suggestion />
      <SearchSpecialists />
      <Expirance />
      <Blog />
      <Partners />
      <ListClientForm />
    </div>
  )
}

export default app