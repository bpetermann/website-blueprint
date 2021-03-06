import React, { useState, useEffect } from 'react';

const DarkmodeContext = React.createContext({
  darkmodeToggleHandler: () => {},
});

export const DarkmodeContextProvider = (props) => {
  const [darkmode, setDarkmode] = useState(false);

  const darkmodeToggleHandler = () => {
    setDarkmode((prevState) => !prevState);
  };

  useEffect(() => {
    if (darkmode) {
      document.body.classList.add('darkmode');
    } else {
      document.body.classList.remove('darkmode');
    }
  }, [darkmode]);

  return (
    <DarkmodeContext.Provider
      value={{
        darkmode: darkmode,
        darkmodeToggleHandler: darkmodeToggleHandler,
      }}
    >
      {props.children}
    </DarkmodeContext.Provider>
  );
};

export default DarkmodeContext;
