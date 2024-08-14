'use client'
import React, { useState } from 'react';
import styled from 'styled-components';

interface IProduto {
  id: number;
  titulo: string;
  preco: number;
  imagem: string;
  descricao: string;
}

interface IshoppingItem {
  produto: IProduto;
  quantidade: number;
}

const Produto: IProduto[] = [
  { 
    id: 1, 
    titulo: 'Farinha Sarandi', 
    preco: 6.50, 
    imagem: 'https://seeklogo.com/images/S/sarandi-logo-D0FBC64EC1-seeklogo.com.gif',
    descricao: 'Farinha de trigo Sarandi, ideal para todos os tipos de receitas.'
  },
  { 
    id: 2, 
    titulo: 'Leite Ninho', 
    preco: 8.99, 
    imagem: 'https://www.ninho.com.br/themes/custom/nest/images/share.png',
    descricao: 'Leite em pó Ninho, enriquecido com vitaminas e minerais.'
  },
  { 
    id: 3, 
    titulo: 'Sucrilhos Kelloggs', 
    preco: 16.90, 
    imagem: 'https://i0.wp.com/assets.propmark.com.br/legacy/upload/2019/06/5d10bad5c2a05-5d10c35b2dda5-980x480.jpg?resize=720%2C353&ssl=1',
    descricao: 'Sucrilhos Kelloggs, cereal crocante e saboroso para um café da manhã nutritivo.'
  },
  { 
    id: 4, 
    titulo: 'Biscoito Bono Chocolate', 
    preco: 1.99, 
    imagem: 'https://www.nestle.com.br/sites/g/files/pydnoa436/files/logo-bono-atualizado.jpg',
    descricao: 'Biscoito Bono com recheio de chocolate, um snack delicioso para qualquer hora.'
  },
  { 
    id: 5, 
    titulo: 'Café Pilão', 
    preco: 12.99, 
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFTS2fxUgK3QRZW9sY__rRsuCuBzxrJoboxw&s',
    descricao: 'Café Pilão, sabor intenso e encorpado para começar o dia com energia.'
  },
  { 
    id: 6, 
    titulo: 'Açúcar União', 
    preco: 3.29, 
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMtK68SgliN2QJE0kbBjTPBgHJTExz480Tp6cPXUA26ku9UnarXtAyHuqIBV9CP-p2T0s&usqp=CAU',
    descricao: 'Açúcar União, a escolha perfeita para adoçar suas receitas e bebidas.'
  },
  { 
    id: 7, 
    titulo: 'Macarrão Barilla', 
    preco: 7.50, 
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLqR6rhpn0YVR9L8oP5RkrvgX_wdsMZQGuGw&s',
    descricao: 'Macarrão Barilla, qualidade superior para suas massas favoritas.'
  },
  { 
    id: 8, 
    titulo: 'Suco Del Valle', 
    preco: 4.50, 
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSgko633zo_FujSVBFPLQAU2FK8OL72OMwiA&s',
    descricao: 'Suco Del Valle, feito com frutas selecionadas para um sabor refrescante.'
  },
  { 
    id: 9, 
    titulo: 'Bolacha Club Social', 
    preco: 5.99, 
    imagem: 'https://www.imagensempng.com.br/wp-content/uploads/2023/08/Logo-Club-Social-Png.png',
    descricao: 'Bolacha Club Social, crocante e ideal para lanches e petiscos.'
  },
  { 
    id: 10, 
    titulo: 'Detergente Ypê', 
    preco: 2.49, 
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpe4GUwF7n2DT1RNUO0TK33iVX0R88b3pV_g&s',
    descricao: 'Detergente Ypê, eficaz na limpeza e com aroma agradável.'
  }
];

const formatarPreco = (preco: number): string => preco.toFixed(2);

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Times New Roman', serif;
  background: linear-gradient(135deg, #003366, #66ccff);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Logo = styled.img`
  max-width: 150px;
  margin-bottom: 10px;
`;

const Header = styled.h1`
  font-size: 2.5em;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
`;

const SearchBar = styled.input`
  width: 50%;
  padding: 8px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  flex: 1 1 calc(33.333% - 20px);
  box-sizing: border-box;
  max-width: calc(33.333% - 20px);
  min-width: 280px;
  transition: background-color 0.3s, transform 0.3s;
  
  &:hover {
    background-color: #e0f0ff;
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 15px;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemDescription = styled.p`
  margin: 10px 0;
  font-size: 0.9em;
  color: #333;
`;

const Button = styled.button`
  background-color: #0044cc;
  color: #ffffff;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 0.9em;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #003399;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #002266;
    transform: translateY(0);
  }
`;

const CartTotal = styled.h2`
  margin-top: 30px;
  font-size: 1.5em;
  font-weight: 600;
  color: #ffffff;
`;

const CartSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  color: #ffffff;
`;

const PrintButton = styled(Button)`
  background-color: #0099ff;
  margin-top: 20px;

  &:hover {
    background-color: #007acc;
  }
`;

const PixButton = styled(Button)`
  background-color: #32cd32;
  margin-top: 20px;

  &:hover {
    background-color: #28a745;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const CloseButton = styled.button`
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;

  &:hover {
    background: #e60000;
  }
`;

const QrCodeImage = styled.img`
  width: 100px; /* Ajuste o tamanho do QR Code aqui */
  height: 100px; /* Ajuste o tamanho do QR Code aqui */
  object-fit: cover;
  margin: 10px 0;
`;

const MarketCarPages: React.FC = () => {
  const [shoppingProduto, setShoppingProduto] = useState<IshoppingItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddProduto = (id: number) => {
    const produto = Produto.find(p => p.id === id);
    if (!produto) return;

    const produtoExisteShopping = shoppingProduto.find(item => item.produto.id === id);

    if (produtoExisteShopping) {
      const newShoppingProduto: IshoppingItem[] = shoppingProduto.map(item => {
        if (item.produto.id === id) {
          return {
            ...item,
            quantidade: item.quantidade + 1
          };
        }
        return item;
      });
      setShoppingProduto(newShoppingProduto);
    } else {
      const carItem: IshoppingItem = {
        produto,
        quantidade: 1
      };
      setShoppingProduto([...shoppingProduto, carItem]);
    }
  };

  const handleRemoveProduto = (id: number) => {
    const produtoNoCarrinho = shoppingProduto.find(item => item.produto.id === id);
    if (!produtoNoCarrinho) return;

    if (produtoNoCarrinho.quantidade > 1) {
      const newShoppingProduto: IshoppingItem[] = shoppingProduto.map(item => {
        if (item.produto.id === id) {
          return {
            ...item,
            quantidade: item.quantidade - 1
          };
        }
        return item;
      });
      setShoppingProduto(newShoppingProduto);
    } else {
      setShoppingProduto(shoppingProduto.filter(item => item.produto.id !== id));
    }
  };

  const calcularTotalCarrinho = () => {
    return shoppingProduto.reduce((total, item) => total + item.produto.preco * item.quantidade, 0);
  };

  const calcularTotalItens = () => {
    return shoppingProduto.reduce((total, item) => total + item.quantidade, 0);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '', 'height=600,width=800');
    if (printWindow) {
      printWindow.document.write('<html><head><title>Imprimir Carrinho</title>');
      printWindow.document.write('<style>');
      printWindow.document.write('body { font-family: "Times New Roman", serif; background: linear-gradient(135deg, #003366, #66ccff); color: #ffffff; margin: 20px; }');
      printWindow.document.write('h1 { color: #ffffff; text-align: center; }');
      printWindow.document.write('ul { padding: 0; list-style: none; display: flex; flex-wrap: wrap; gap: 20px; }');
      printWindow.document.write('li { flex: 1 1 calc(33.333% - 20px); padding: 15px; background-color: #003366; color: #ffffff; border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); display: flex; align-items: center; box-sizing: border-box; }');
      printWindow.document.write('img { width: 80px; height: 80px; object-fit: cover; border-radius: 8px; margin-right: 15px; }');
      printWindow.document.write('h2 { color: #ffffff; text-align: center; }');
      printWindow.document.write('</style>');
      printWindow.document.write('</head><body>');
      printWindow.document.write('<h1>Carrinho de Compras</h1>');
      printWindow.document.write('<ul>');
      shoppingProduto.forEach(item => {
        printWindow.document.write(`<li>${item.produto.titulo} - Qtd: ${item.quantidade} - Total: R$ ${formatarPreco(item.produto.preco * item.quantidade)}</li>`);
      });
      printWindow.document.write('</ul>');
      printWindow.document.write(`<h2>Total: R$ ${formatarPreco(calcularTotalCarrinho())}</h2>`);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    }
  };

  const handlePixPayment = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const filteredProdutos = Produto.filter(produto =>
    produto.titulo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <HeaderContainer>
        <Logo src="https://svgsilh.com/png-1024/35594.png"/>
        <Header>Mini Mercado Ane</Header>
      </HeaderContainer>
      <SearchBar 
        type="text" 
        placeholder="Pesquisar produtos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Header>Produtos</Header>
      <List>
        {filteredProdutos.map(produto => (
          <ListItem key={produto.id}>
            <ItemImage src={produto.imagem} alt={produto.titulo} />
            <ItemDetails>
              <p>{produto.titulo}</p>
              <p>R$ {formatarPreco(produto.preco)}</p>
              <ItemDescription>{produto.descricao}</ItemDescription>
            </ItemDetails>
            <Button onClick={() => handleAddProduto(produto.id)}>Adicionar</Button>
          </ListItem>
        ))}
      </List>
      <Header>Carrinho de Compras</Header>
      <List>
        {shoppingProduto.map(item => (
          <ListItem key={item.produto.id}>
            <ItemImage src={item.produto.imagem} alt={item.produto.titulo} />
            <ItemDetails>
              <p>{item.produto.titulo}</p>
              <p>R$ {formatarPreco(item.produto.preco)}</p>
              <p>Qtd: {item.quantidade}</p>
              <p>Total: R$ {formatarPreco(item.produto.preco * item.quantidade)}</p>
            </ItemDetails>
            <Button onClick={() => handleRemoveProduto(item.produto.id)}>Remover</Button>
          </ListItem>
        ))}
      </List>
      <CartSummary>
        <CartTotal>Total do Carrinho: R$ {formatarPreco(calcularTotalCarrinho())}</CartTotal>
        <p style={{ color: '#ffffff' }}>Total de Itens: {calcularTotalItens()}</p>
      </CartSummary>
      {shoppingProduto.length > 0 && (
        <>
          <PrintButton onClick={handlePrint}>Imprimir Nota</PrintButton><br />
          <PixButton onClick={handlePixPayment}>Pagar com PIX</PixButton>
        </>
      )}
      {modalVisible && (
        <>
          <Overlay onClick={closeModal} />
          <Modal>
            <h2>Pagamento via PIX</h2>
            <p>Para concluir o pagamento, escaneie o código QR abaixo com seu aplicativo de pagamento PIX:</p>
            <QrCodeImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg/1200px-Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg.png"/>
            <p>Ou use a chave PIX abaixo:</p>
            <p><strong>minimercadoane@gmail.com</strong></p>
            <CloseButton onClick={closeModal}>Fechar</CloseButton>
          </Modal>
        </>
      )}
    </Container>
  );
};

export default MarketCarPages;
