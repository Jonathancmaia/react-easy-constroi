import React, { useEffect, useState } from 'react';
import './style.css';

function ProjectsList() {
  const [response, setResponse] = useState(false);

  //Get projects list from API
  useEffect(() => {
    fetch(
      'https://archshop.com.br/_next/data/ZlPf6XjT7pbXbrAeKjYKI/todos-os-projetos.json',
      {
        method: 'GET',
        mode: 'cors',
      },
    )
      .then((data) => {
        setResponse(data);
        console.log(data);
      })
      .catch(function(err) {
        setResponse(err);
      });
  }, []);
  //Component render
  return <>Hello world!</>;
}

export default ProjectsList;
