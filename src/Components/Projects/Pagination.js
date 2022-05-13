const Pagination = (projects) => {
  const projectPerPage = 6;
  const pages = Math.ceil(projects.length / projectPerPage);

  const newProjects = Array.from({ length: pages }, (_, index) => {
    const start = index * projectPerPage;
    return projects.slice(start, start + projectPerPage);
  });

  return newProjects;
};

export default Pagination;
