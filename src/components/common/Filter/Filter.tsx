import FilterStyles from "./Filter.module.css";

export default function Filter() {
  return (
    <div className={FilterStyles.filterContainer}>
      {/* Search */}
      <div className={FilterStyles.inputContainer}>
        <p className={FilterStyles.searchTitle}>SEARCH PROJECT : </p>
        <input type="text" placeholder="enter to search" />
      </div>

      {/* --- */}
      <div className={FilterStyles.filterOptions}>
        <select name="" id="" className={FilterStyles.filterSelect}>
          <option value="">Web Application</option>
          <option value="">Mobile Application</option>
        </select>

        {/* icons for grid/list display */}
        <div className={FilterStyles.listGrid}>
          <div/>
          <div/>
        </div>
      </div>
    </div>
  );
}
