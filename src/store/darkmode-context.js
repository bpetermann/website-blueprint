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
    console.log('is running');
    if (darkmode) {
      document.body.classList.add('dark-content');
    } else {
      document.body.classList.remove('dark-content');
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
