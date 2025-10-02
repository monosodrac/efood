/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Header } from '../../components/Header';
import Hero from '../../components/Hero';

import { Container, ListMenu } from '../../components/CardsList/styles';
import { CardInfoMen, CardMen, DescriptionMen, TitleMen } from '../../components/Card/styles';
import { Modal, ModalContent } from './styles';

import fechar from '../../assets/images/close.png'
import Button from '../../components/Button';
import { useGetRestaurantQuery } from '../../services/api';

interface ModalState {
  id: number
  foto: string
  titulo: string
  descricao: string
  porcao: string
  preco: number
  isVisible: boolean
}

const Products = () => {
  const { id } = useParams();
  const { data: restaurant } = useGetRestaurantQuery(id!)

  const getDescricao = (descricao: string) => {
    if (descricao.length > 217) {
      return descricao.slice(0, 214) + '...';
    };
    return descricao
  };

  const [modal, setModal] = useState<ModalState>({
    id: 0,
    foto: '',
    titulo: '',
    descricao: '',
    porcao: '',
    preco: 0,
    isVisible: false
  })

  const openModal = (cardapio: any) => {
    setModal({
      id: cardapio.id,
      foto: cardapio.foto,
      titulo: cardapio.nome,
      descricao: cardapio.descricao,
      porcao: cardapio.porcao,
      preco: cardapio.preco,
      isVisible: true
    })
  }

  const closeModal = () => {
    setModal({
      id: 0,
      foto: 'string',
      titulo: 'string',
      descricao: 'string',
      porcao: 'string',
      preco: 0,
      isVisible: false
    })
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  if (!restaurant) {
    return <h3>Carregando...</h3>
  };

  return (
    <>
      <Header />
      <Hero restaurant={restaurant} />
      <Container>
        <div className="container">
          <ListMenu>
            {restaurant.cardapio.map((cardapio) => (
              <li key={cardapio.id}>
                <CardMen>
                  <img src={cardapio.foto} alt={cardapio.nome} />
                  <CardInfoMen>
                    <TitleMen>{cardapio.nome}</TitleMen>
                    <DescriptionMen title={cardapio.descricao}>{getDescricao(cardapio.descricao)}</DescriptionMen>
                    <Button onClick={() => openModal(cardapio)}>
                      Adicionar ao carrinho
                    </Button>
                  </CardInfoMen>
                </CardMen>
              </li>
            ))}
          </ListMenu>
        </div>
        <Modal className={modal.isVisible ? 'visivel' : ''}>
          <ModalContent className="container">
            {modal.isVisible && (
              <div className="modal">
                <img
                  src={fechar}
                  alt="Ícone de fechar"
                  onClick={() => {
                    closeModal()
                  }}
                  className="fechar-modal"
                />
                <div className="card-modal">
                  <img src={modal.foto} alt={modal.titulo} className="foto-modal" />
                  <div className="info-modal">
                    <h3>{modal.titulo}</h3>
                    <p>
                      {modal.descricao}
                      <br />
                      <br />
                      Serve: de {modal.porcao}
                    </p>
                    <Button>
                      Adicionar ao carrinho - {formataPreco(modal.preco)}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </ModalContent>
          <div
            className="overlay"
            onClick={() => {
              closeModal()
            }}
          ></div>
        </Modal>
      </Container>
    </>
  );
}

export default Products;
