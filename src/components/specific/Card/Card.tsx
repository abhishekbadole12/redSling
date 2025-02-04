import ProgressLabel from "../../common/Label/ProgressLabel";
import CardStyles from "./Card.module.css";
interface ItemProps {
  project_name: string;
  description: string;
  createdOn: string;
  modifiedOn: string;
  category: string;
  author: string;
  application_type: string;
  modifiedBy: string;
}
interface CardProps {
  item: ItemProps;
}

// STATUS = LIVE | DEVELOPEMENT | STAGGING



export default function Card({ item }: CardProps) {
  const { project_name, description, author, createdOn, modifiedOn } = item;

  return (
    <div className={CardStyles.card}>
      <div className={CardStyles.cardImgContainer}>
        <div className={CardStyles.labelTag}>
          <ProgressLabel text="Success" variant="warning" />
        </div>
      </div>

      <div className={CardStyles.cardContent}>
        <h4 className={CardStyles.cardTitle}>{project_name}</h4>
        <p className={CardStyles.cardDescription}>{description}</p>
        <p className={CardStyles.cardAuthor}>
          <span className={CardStyles.cardLabel}>Author:</span> {author}
        </p>
        <p className={CardStyles.cardTime}>
          <span className={CardStyles.cardLabel}>Created On : </span>
          {new Date(createdOn).toLocaleString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </p>
        <p className={CardStyles.cardTime}>
          <span className={CardStyles.cardLabel}>Modified On : </span>
          {new Date(modifiedOn).toLocaleString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </p>
      </div>
    </div>
  );
}
