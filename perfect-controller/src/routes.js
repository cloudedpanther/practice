const HOME = "/";
const FILTER = "/filter";
const DETAIL = "/:id";

const routes = {
  home: HOME,
  filter: FILTER,
  detail: (id) => {
    if (id) {
      return `/${id}`;
    } else {
      return DETAIL;
    }
  }
};

export default routes;
