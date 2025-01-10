import GlobalStyle from './assets/globalStyle/globalStyle';
import MyHeader from './components/Header/header';
import MyFooter from './components/Footer/footer';
import { useState, useEffect } from 'react';
import './style.css';

function App() {
  // Estado para armazenar os dados dos cards
  const [cardData, setCardData] = useState([]);

  // Estado para os campos do modal
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  // Estado para controlar o card que será editado
  const [editingIndex, setEditingIndex] = useState(null);

  // Carregar os cards do localStorage quando o componente for montado
  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem('cards')) || [];
    setCardData(storedCards);
  }, []);

  // Função para criar um novo card
  const criarCard = () => {
    const novoCard = { titulo, descricao };

    // Adiciona o novo card ao estado
    const updatedCards = [...cardData, novoCard];
    setCardData(updatedCards);

    // Salva no localStorage
    localStorage.setItem('cards', JSON.stringify(updatedCards));

    // Limpar os campos após adicionar o card
    setTitulo('');
    setDescricao('');
  };

  // Função para editar um card
  const editarCard = (index) => {
    setTitulo(cardData[index].titulo);
    setDescricao(cardData[index].descricao);
    setEditingIndex(index); // Marca o card a ser editado
  };

  // Função para salvar as alterações do card editado
  const salvarEdicao = () => {
    const updatedCards = [...cardData];
    updatedCards[editingIndex] = { titulo, descricao };
    setCardData(updatedCards);

    // Salva no localStorage
    localStorage.setItem('cards', JSON.stringify(updatedCards));

    // Limpar os campos após salvar a edição
    setTitulo('');
    setDescricao('');
    setEditingIndex(null);
  };

  // Função para excluir um card
  const excluirCard = (index) => {
    const updatedCards = cardData.filter((_, i) => i !== index);
    setCardData(updatedCards);

    // Atualiza o localStorage
    localStorage.setItem('cards', JSON.stringify(updatedCards));
  };

  return (
    <>
      <GlobalStyle />
      <MyHeader />

      {/* Modal */}
      <button type="button" className="btn btn-primary ms-2 mt-2 p-2 border border-none rounded" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        CRIAR
      </button>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">{editingIndex === null ? 'Cadastro' : 'Edição'}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="pergunta1" className="form-label">Qual o Titulo</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="pergunta1" 
                  placeholder="Digite o nome do Titulo"
                  value={titulo} 
                  onChange={(e) => setTitulo(e.target.value)} 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Descrição</label>
                <textarea 
                  className="form-control" 
                  id="exampleFormControlTextarea1" 
                  rows="5"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button 
                type="button" 
                className="btn btn-primary" 
                data-bs-dismiss="modal" 
                onClick={editingIndex === null ? criarCard : salvarEdicao}
              >
                {editingIndex === null ? 'Enviar' : 'Salvar alterações'}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}

      <div className="container">
        <div className="row mt-3 ms-2">
          {cardData.map((card, index) => (
            <div className="col-2" key={index}>
              <div className="card" style={{ width: '250px', height: '250px' }}>
                <div className="card-body">
                  <h5 className="card-title">{card.titulo}</h5>
                  <p className="card-text">{card.descricao}</p>
                  <div className="d-flex flex-column flex-sm-row justify-content-between" style={{ width: '120px', height: '40px' }}>
                    <button 
                      className="btn btn-primary btn-sm mb-2 mb-sm-0" 
                      style={{ width: '120px', height: '40px' }} 
                      data-bs-toggle="modal" 
                      data-bs-target="#staticBackdrop" 
                      onClick={() => editarCard(index)} // Ao clicar em editar, abre o modal
                    >
                      Editar
                    </button>
                    <button 
                      className="btn btn-danger btn-sm" 
                      onClick={() => excluirCard(index)}
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MyFooter />
    </>
  );
}

export default App;
