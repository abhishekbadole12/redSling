
import SubHeaderStyles from './SubHeader.module.css'    
export default function SubHeader() {
  return (
    <div className={SubHeaderStyles.subHeader}>
        <h2 className={SubHeaderStyles.heading}>Welcome to redSling</h2>
        <p className={SubHeaderStyles.subHeading}>redSling is a platform to help you manage your projects and tasks.</p>
    </div>
  )
}
