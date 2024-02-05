import styles from './Search.module.css'

// hooks
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { useQuery } from '../../hooks/useQuery'

// components
import PostDetails from '../../Components/PostDetails'

import {Link} from "react-router-dom"

const search = () => {
  const query = useQuery()
  const search = query.get("q")

  const { documents: posts } = useFetchDocument("posts", search)

  return (
    <div className={styles.search_container}>
      <h2>Buscar</h2>
      <div>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
          <p>Não foram encontrados posts a partir da sua busca...</p>
          <Link to="/Mini-Blog" className="btn btn-dark">
            Voltar
          </Link>
          </div>
        ) }
        {posts && posts.map((post) => (<PostDetails key={post.id} post={post} />))}
      </div>
    </div>
  )
}

export default search