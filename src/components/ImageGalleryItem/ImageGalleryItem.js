import { Modal } from 'components/Modal/Modal';

import './ImageGalleryItem'

import React, { useState } from 'react';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="ImageGalleryItem" onClick={openModal}>
        <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
      </div>
      <Modal
        modalIsOpen={isModalOpen}
        onCloseModal={closeModal}
        largeImageURL={largeImageURL}
        tags={tags}
      />
    </>
  );
};


