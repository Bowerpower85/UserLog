import React, { useState, useEffect } from 'react';
import CardWrap from "./components/CardWrap";
import Bar from "./components/Bar"
import Header from "./components/Header";
import GroupCard from "./components/GroupCard"
import groupArray from "./group.json";
import Main from "./components/Main"

function App() {

  const [group, setGroup] = useState(groupArray);

  const [search, setSearch] = useState('');

  const [warning, setWarning] = useState(false);

  const [nameSort, setNameSort] = useState("AZ");

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if(!search) {
      return setGroup(groupArray);
    }

    const results = group.filter(person => 
      person.name.includes(search.toLowerCase())
      );
      setGroup(results);
      setWarning(false);
  }, [search])

  const sortNames = () => {
    switch (nameSort) {
      case 'AZ':
        setGroup([...group].sort((a, b) => (a.name > b.name) ? 1 : -1));
        setNameSort("ZA")
        break;
      case 'ZA':
        setGroup([...group].sort((a, b) => (a.name < b.name) ? 1 : -1));
        setNameSort("AZ")
        break;
        default:
          return;
    }
  }

  const handleSelectDropdown = (eventKey) => {
    switch (eventKey) {
      case "Front Man":
        setGroup([...groupArray].filter(person =>
          person.title.includes("Front Man")
        ));
        break;
      case "Guitarist":
        setGroup([...groupArray].filter(person =>
          person.title.includes("Guitarist")
        ));
        break;
      case "Bassist":
        setGroup([...groupArray].filter(person =>
          person.title.includes("Bassist")
        ));
        break;
      case "Drummer":
        setGroup([...groupArray].filter(person =>
          person.title.includes("Drummer")
        ));
        break;
      case "Washington":
        setGroup([...groupArray].filter(person =>
          person.location.includes("Washington")
        ));
        break;
      case "Arizona":
        setGroup([...groupArray].filter(person =>
          person.location.includes("Arizona")
        ));
        break;
      case "California":
      setGroup([...groupArray].filter(person =>
        person.location.includes("California")
      ));
      break;
    default:
      resetGroup();
      return;       
    }
  }

  const resetGroup = () => {
    setGroup(groupArray);
    setSearch("");
  }


  return (
    <>
      <Header />
      <Main>
        <Bar
          inputValue={search}
          handleInputChange={handleInputChange}
          resetBtn={resetGroup}
          sortBtn={sortNames}
          children={nameSort === "AZ" ? "Sort A–Z" : "Sort Z–A"}
          handleSelectDropdown={handleSelectDropdown} />

        {/* Validation */}
        {warning === false ? null : <h4>Woops, please use letters only. Numbers or special characters won't display results.</h4>}
        {group.length === 0 ? <h4>Looks like we don't have this team member. Please try a different name or hit "Reset".</h4> : null}
        
          <CardWrap>
            {group.map(person => (
              <GroupCard
                key={person.id}
                name={person.name}
                title={person.title}
                location={person.location}
                phone={person.phone}
                email={person.email}
              />
            ))}
          </CardWrap>
        
      </Main>
    </>
  );
}

export default App;
