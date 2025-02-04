import CardStyles from "./Card.module.css";
interface ItemProps {
  project_name: string;
  description: string;
  modifiedOn: string;
  category: string;
  author: string;
  application_type: string;
  modifiedBy: string;
}
interface CardProps {
  item: ItemProps;
}

export default function Card({ item }: CardProps) {
  const { project_name, description, author, modifiedOn } = item;

  return (
    <div className={CardStyles.card}>
      <div className={CardStyles.cardImgContainer} />

      <div className={CardStyles.cardContent}>
        <h4 className={CardStyles.cardTitle}>{project_name}</h4>
        <p className={CardStyles.cardDescription}>{description}</p>
        <p className={CardStyles.cardAuthor}>
          <span className={CardStyles.cardLabel}>Author:</span> {author}
        </p>
        <p className={CardStyles.cardTime}>
          <span className={CardStyles.cardLabel}>Date & Time : </span>
          {new Date(modifiedOn).toLocaleString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </p>{" "}
      </div>
    </div>
  );
}
