import { Modal } from 'components/Modal/Modal';
import './ImageGalleryItem'

import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    return (
      <>
        <div className='ImageGalleryItem'  onClick={this.openModal}>
          <img className='ImageGalleryItem-image' src={webformatURL} alt={tags} />
        </div>
        <Modal
          modalIsOpen={this.state.isModalOpen}
          onCloseModal={this.closeModal}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      </>
    );
  }
}
