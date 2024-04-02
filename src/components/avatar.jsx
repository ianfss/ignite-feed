import styles from './avatar.module.css'

// eslint-disable-next-line react/prop-types
export function Avatar({ hasBorder = true, src }) {
  return (
    <img src={src} className={hasBorder ? styles.avatarWithBorder : styles.avatar} />
  )
}