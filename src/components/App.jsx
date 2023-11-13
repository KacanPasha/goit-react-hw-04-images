import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchImages } from 'Api';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonLoadMore } from './Button/Button';
import { Loader } from './Loader/Loader';
import '../styles.css';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const { totalHits, hits } = await fetchImages(searchQuery, page);

        setImages(prevImages => [...prevImages, ...hits]);
        setTotalPages(totalHits);

        if (Math.ceil(totalPages / 12) === page) {
          toast.success(
            "We're sorry, but you've reached the end of search results.",
            {
              style: {
                fontSize: '18px',
                padding: '16px',
                position: 'center-center',
              },
            }
          );
        }

        if (hits.length === 0) {
          toast.success(
            'Sorry, there are no images matching your search query. Please try again.',
            {
              style: {
                fontSize: '18px',
                padding: '16px',
                position: 'center-center',
              },
            }
          );
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery !== '' || page !== 1) {
      fetchData();
    }
  }, [searchQuery, page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const addSearchQuery = value => {
    setSearchQuery(value.searchQuery.trim());

    if (searchQuery !== value.searchQuery.trim()) {
      setPage(1);
      setImages([]);
    }
  };

  const renderBtnLoadMore = Math.ceil(totalPages / 12) !== page;

  return (
    <div className="App">
      <SearchBar onAddSearchQuery={addSearchQuery} />
      {images.length > 0 && <ImageGallery gallery={images} />}
      {images.length > 0 && renderBtnLoadMore && (
        <ButtonLoadMore onLoadMore={loadMore} />
      )}
      {loading && <Loader loading={loading} />}
      <Toaster />
    </div>
  );
};
