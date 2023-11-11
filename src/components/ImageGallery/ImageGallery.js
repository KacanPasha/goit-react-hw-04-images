import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import './ImageGallery.css';

export const ImageGallery = ({ gallery }) => {
	return (
	
		<ul className="ImageGallery">
			{gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
				<li key={id}>
					<ImageGalleryItem
						webformatURL={webformatURL}
						largeImageURL={largeImageURL}
						tags={tags} />
				</li>
			))}
		</ul>
	);
};