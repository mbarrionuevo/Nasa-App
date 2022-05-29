import styles from './Footer.module.css';

const Footer = ({ params, disabledNextPage, setParams, reFetch }) => {
  const handleNexPage = () => {
    const newParams = { ...params, page: params.page + 1 };
    reFetch(newParams);
    setParams(newParams);
  };

  const handlePrevPage = () => {
    const newParams = { ...params, page: params.page - 1 };
    reFetch(newParams);
    setParams(newParams);
  };

  return (
    <div className={styles.footerContainer}>
      <button disabled={params.page === 1} onClick={handlePrevPage}>
        Preview Page
      </button>
      <button disabled={disabledNextPage} onClick={handleNexPage}>
        Next Page
      </button>
    </div>
  );
};

export default Footer;
