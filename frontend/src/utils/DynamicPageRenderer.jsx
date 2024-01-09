import pageMap from "./pageMap";

const DynamicPageRenderer = ({ pageName }) => {
  if (pageMap[pageName]) {
    const PageComponent = pageMap[pageName];
    return <PageComponent key={pageName} />;
  } else {
    return <div>Page not found</div>;
  }
};
export default DynamicPageRenderer;
