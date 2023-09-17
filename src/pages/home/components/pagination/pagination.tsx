import { Link } from 'react-router-dom';
import { ContainerPaginate } from './pagination-styled';

interface Props {
  actualPage: number;
  totalPages: number;
}

export function Pagination(props: Props) {
  const { actualPage, totalPages } = props;

  return (
    <ContainerPaginate>
      <ul>
        <li>
          {actualPage > 1 && <Link to={`/${actualPage - 1}`}>Anterior</Link>}
        </li>
        <li>
          <Link to={`/${actualPage}`}>{actualPage}</Link>
        </li>
        <li>
          {actualPage < Math.ceil(totalPages) && (
            <Link to={`/${actualPage + 1}`}>Siguiente</Link>
          )}
        </li>
      </ul>
    </ContainerPaginate>
  );
}
