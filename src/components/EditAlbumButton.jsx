import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

import EditAlbum from './EditAlbum'
import ModalAlbum from './ModalAlbum';

const EditAlbumButton = ({ idAlbum }) => {
  const [openEdit, setOpenEdit] = useState(false)

  const openModal = () => setOpenEdit(true)

  const closeModal = () => setOpenEdit(false)

  return (
    <>
      <Button
        color='primary'
        onClick={openModal}
      >
        <EditIcon />
      </Button>
      <ModalAlbum
        isOpen={openEdit}
        close={closeModal}
      >
        <EditAlbum
          idAlbum={idAlbum}
        />
      </ModalAlbum>
    </>
  );
}

export default EditAlbumButton