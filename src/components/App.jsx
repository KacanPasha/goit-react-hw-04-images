import { Component } from "react"
import toast, { Toaster } from 'react-hot-toast';
import { fetchImages } from "Api";
import { SearchBar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ButtonLoadMore } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import '../styles.css';

export class App extends Component {

	state = {
		images: [],
		searchQuery: '',
		page: 1,
		totalImages: null,
		loading: false,
		error: false,
	};

	async componentDidUpdate(prevProps, prevState) {
		if (prevState.searchQuery !== this.state.searchQuery ||
			prevState.page !== this.state.page)
		{
			try {
					this.setState({ loading: true, error: false });
				const { totalHits, hits } = await fetchImages(this.state.searchQuery, this.state.page);
					this.setState(prevState => {
						return {
							images: [...prevState.images, ...hits],
						}
					});
				this.setState({ totalImages: totalHits, });

				if (Math.ceil(totalHits / 12) === this.state.page) {
					toast.success("We're sorry, but you've reached the end of search results.",
					{
							style: {
								fontSize: '18px',
								padding: '16px',
								position: 'center-center',
							},
						})
				};

				if (hits.length === 0) {
					toast.success("Sorry, there are no images matching your search query. Please try again.",
					{
							style: {
								fontSize: '18px',
								padding: '16px',
								position: 'center-center',
							},
						})
				};

			} catch (error) {
				this.setState({ error: true, });
				
			} finally {
				this.setState({ loading: false });
			}
		};
	};

	addSearchQuery = (value) => {
		this.setState({
			searchQuery: value.searchQuery.trim(),
		});
		if (this.state.searchQuery !== value.searchQuery.trim()) {
			this.setState({
				images: [],
				page: 1,
			})
		};
	};

	loadMore = () => {
		this.setState(prevState => ({
			page: prevState.page + 1,
		}));
	};

	render() {
		const { images, loading, totalImages, page } = this.state;
		const renderBtnLoadMore = (Math.ceil(totalImages / 12) !== page);
		return (
			<div className="App">
				<SearchBar onAddSearchQuery={this.addSearchQuery} />
				{images.length > 0 && <ImageGallery gallery={images} />}
				{images.length > 0 && renderBtnLoadMore && <ButtonLoadMore onLoadMore={this.loadMore} />}
				{loading && <Loader loading={loading} />}
				<Toaster />
			</div>
		);
	};
};