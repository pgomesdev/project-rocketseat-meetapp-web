import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { MdEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';

import api from '../../services/api';
import history from '../../services/history';

import { Container, EditButton, CancelButton } from './styles';

export default function Details({ match }) {
  const { id } = match.params;
  const meetup = useSelector(state => state.meetup[id]);

  async function handleCancel() {
    await api.delete(`meetups/${id}`);

    history.push('/');
  }

  return (
    <Container>
      <header>
        <h1>{meetup.name}</h1>
        <div>
          <EditButton to={`/edit/${id}`}>
            <MdEdit size={20} color="#fff" />
            Editar
          </EditButton>
          <CancelButton onClick={handleCancel}>
            <MdDeleteForever size={20} color="#fff" />
            Cancelar
          </CancelButton>
        </div>
      </header>
      <img src={meetup.banner.url} alt={meetup.name} />
      <p>{meetup.description}</p>
      <div>
        <p>
          <MdEvent size={20} color="#fff" />
          {meetup.formattedDate}
        </p>
        <p>
          <MdPlace size={20} color="#fff" />
          {meetup.location}
        </p>
      </div>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
