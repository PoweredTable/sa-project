import React from 'react';
import './GenerosTable.css'

const GenerosTable = () => {
  const generos = ['Ação', 'Adulto', 'Artes Marciais', 'Aventura', 'Bizarro', 'Comédia', 'Comida', 'Culinária', 'Demônios', 'Distopia', 'Doujinshi', 'Drama', 'Ecchi', 'Esporte', 'Fantasia', 'Física', 'Guerra', 'Harém', 'Histórico', 'Homenagem', 'Horror', 'Isekai', 'Jogos', 'Josei', 'Kamen Rider', 'Magia', 'Mecha', 'Médico', 'Medieval', 'Memorial', 'Mistério', 'Mitologia', 'Ninja', 'Non-sense', 'Novel', 'Obra Nacional', 'One Shot', 'Psicológico', 'Regressão', 'Romance', 'Sci-fi', 'Seinen', 'Shoujo', 'Shounen', 'Slice of Life', 'Sobrenatural', 'Sobrevivência', 'Suspense', 'Tokusatsu', 'Torre', 'Tragédia', 'Vampiro', 'Vida Escolar', 'Wuxia', 'Yaoi', 'Yuri'];

  const renderTableRows = () => {
    const tableRows = [];
    let tableRow = [];

    generos.forEach((genero, index) => {
      tableRow.push(
        <td key={index}>
            <p className='textTable'>{genero}</p>
        </td>
      );

      if ((index + 1) % 5 === 0 || index === generos.length - 1) {
        tableRows.push(
          <tr key={index}>{tableRow}</tr>
        );
        tableRow = [];
      }
    });

    return tableRows;
  };

  return (
    <div>
      <table cellspacing="6" >
        <tbody>
          {renderTableRows()}
        </tbody>
      </table>
    </div>
  );
};

export default GenerosTable;