import { useEffect, useState, useCallback, useRef } from 'react';
import Header from '../../organisms/HeaderSection/HeaderSection';
import CardList from '../../organisms/CardList/CardList';
import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import Loader from '../../organisms/Loader/Loader';
import EmptyState from '../../organisms/EmptyState/EmptyState';
import ScrollToTopButton from '../../organisms/ScrollToTopButton/ScrollToTopButton';
import Instance from '../../../api/instance';

import './HomePage.styles.scss';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [toSearch, setToSearch] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  const pageRef = useRef(1);
  const initialFetch = useRef(true);

  const fetchData = useCallback(
    async (searchQuery, genderQuery, statusQuery) => {
      if (loading) return;
      setLoading(true);
      try {
        const response = await Instance.get(
          `/character?page=${pageRef.current}&name=${
            searchQuery || ''
          }&gender=${genderQuery || ''}&status=${statusQuery || ''}`
        );
        setData((prevData) => [...prevData, ...response.data.results]);
        setHasMore(response.data.info.next !== null);
        setError(null);
        pageRef.current += 1;
      } catch (error) {
        setError(error);
        setData([]);
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    },
    [loading]
  );

  useEffect(() => {
    if (initialFetch.current) {
      fetchData();
      initialFetch.current = false;
    }
  }, [fetchData]);

  useInfiniteScroll(
    () => {
      if (!loading && hasMore) {
        fetchData();
      }
    },
    hasMore,
    loading
  );

  const scrollToTopButtonMarkup = pageRef.current > 2 && <ScrollToTopButton />;
  const loaderMarkup = loading && <Loader />;

  const handleClickSearch = () => {
    setData([]);
    pageRef.current = 1;
    fetchData(toSearch, gender, status);
  };

  const headerMarkup = (
    <Header
      onChange={({ target: { value } }) => setToSearch(value)}
      onChangeGender={({ target: { value } }) => setGender(value)}
      onChangeStatus={({ target: { value } }) => setStatus(value)}
      onSearch={() => handleClickSearch()}
    />
  );

  const resultsMarkup = error ? <EmptyState /> : <CardList characters={data} />;

  return (
    <main className="App">
      {headerMarkup}
      {resultsMarkup}
      {loaderMarkup}
      {scrollToTopButtonMarkup}
    </main>
  );
};

export default HomePage;
