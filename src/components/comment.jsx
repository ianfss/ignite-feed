import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './comment.module.css'
import { Avatar } from './avatar'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/ianfss.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ian</strong>
              <time title='1 de abril às 20:44' dateTime="2024-04-01 20:44:30">Há 1 hora</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  )
}