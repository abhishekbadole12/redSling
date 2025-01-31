import COMPANY_LOGO from "../../../assets/company-logo.png";
import USER_IMG from "../../../assets/user.png";
import ARROW_RIGHT from "../../../assets/arrow-right.png";
import HeaderStyles from "./Header.module.css";

export default function Header() {
  return (
    <div className={HeaderStyles.header}>
      {/* Logo Container */}
      <div className={HeaderStyles.headerLogo}>
        <img src={COMPANY_LOGO} alt="company logo" />
      </div>

      {/* Profile Container */}
      <div className={HeaderStyles.headerProfile}>
        {/* User Img */}
        <div className={HeaderStyles.profileImg}>
          <img src={USER_IMG} alt="user" />
        </div>

        {/* Details*/}
        <div className={HeaderStyles.profileDetails}>
          <p className={HeaderStyles.profileName}>Abhishek Badole</p>
          <p className={HeaderStyles.profileUsertype}>Application Developer</p>
        </div>

        <div className={HeaderStyles.dropdownArrow}>
          {/* <img src={ARROW_RIGHT} alt="dropdown-arrow" /> */}
        </div>
      </div>
    </div>
  );
}
