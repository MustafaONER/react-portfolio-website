import React, { useContext, useState } from 'react';
import Projects from './Components/Projects/ProjectList';
import Pagination from './Components/Projects/Pagination';
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [projects] = useState(Projects);
  const [page, setPage] = useState(0);
  const [displayProjects, setDisplayProjects] = useState([]);
  const [numberOfPages] = useState(Pagination(projects));

  React.useEffect(() => {
    setDisplayProjects(Pagination(projects)[page]);
  }, [page,projects]);

  const handlePage = (pageNumber) => {
    setPage(pageNumber);
  };

  const openSidebar = () => {
    console.log('opened');
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        projects,
        numberOfPages,
        displayProjects,
        handlePage,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
