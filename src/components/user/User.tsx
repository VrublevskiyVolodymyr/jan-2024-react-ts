import React, {FC} from 'react';
import {IUser} from "../../interfaces/user.interface";
import styles from './user.module.css'

interface IProps {
    user: IUser,
    showPosts?: (userId: number) => void
}

type IPropsType = IProps & { children?: React.ReactNode };

const User: FC<IPropsType> = ({user, showPosts}) => {

    const onClickHandler = () => {
        if (showPosts) {
            showPosts(user.id);
        }
    }

    return (
        <div className={styles.userContainer}>
            <div className={styles.userDetails}>
                <img className={styles.userImage} src={user.image} alt="User Avatar"/>
                <div>
                    <div>
                        <span className={styles.userLabel}>ID:</span>
                        <span className={styles.userData}>{user.id}</span>
                    </div>
                    <div>
                        <span className={styles.userLabel}>First Name:</span>
                        <span className={styles.userData}>{user.firstName}</span>
                    </div>
                    <div>
                        <span className={styles.userLabel}>Last Name:</span>
                        <span className={styles.userData}>{user.lastName}</span>
                    </div>
                    <div>
                        <span className={styles.userLabel}>Maiden Name:</span>
                        <span className={styles.userData}>{user.maidenName}</span>
                    </div>
                    <div>
                        <span className={styles.userLabel}>Age:</span>
                        <span className={styles.userData}>{user.age}</span>
                    </div>
                    <div>
                        <span className={styles.userLabel}>Gender:</span>
                        <span className={styles.userData}>{user.gender}</span>
                    </div>
                    <div>
                        <span className={styles.userLabel}>Email:</span>
                        <span className={styles.userData}>{user.email}</span>
                    </div>
                    <div>
                        <span className={styles.userLabel}>Phone:</span>
                        <span className={styles.userData}>{user.phone}</span>
                    </div>
                    <div>
                        <span className={styles.userLabel}>Username:</span>
                        <span className={styles.userData}>{user.username}</span>
                    </div>
                    <div>
                        <span className={styles.userLabel}>Password:</span>
                        <span className={styles.userData}>{user.password}</span>
                    </div>
                    <div>
                        <span className={styles.userLabel}>Birth Date:</span>
                        <span className={styles.userData}>{user.birthDate}</span>
                    </div>
                    <div>
                        <span className={styles.userLabel}>Blood Group:</span>
                        <span className={styles.userData}>{user.bloodGroup}</span>
                    </div>
                    <div>
                        <span className={styles.userLabel}>Height:</span>
                        <span className={styles.userData}>{user.height}</span>
                    </div>
                    <div>
                        <span className={styles.userLabel}>Weight:</span>
                        <span className={styles.userData}>{user.weight}</span>
                    </div>
                    <div>
                        <span className={styles.userLabel}>Eye Color:</span>
                        <span className={styles.userData}>{user.eyeColor}</span>
                    </div>
                    <div>
                        <span className={styles.userLabel}>Hair Color:</span>
                        <span className={styles.userData}>{user.hair.color}</span>
                    </div>
                    <div>
                        <span className={styles.userLabel}>Hair Type:</span>
                        <span className={styles.userData}>{user.hair.type}</span>
                    </div>
                </div>
            </div>
            <div className={styles.userDetails}>
                <div>
                    <span className={styles.userLabel}>Domain:</span>
                    <span className={styles.userData}>{user.domain}</span>
                </div>
                <div>
                    <span className={styles.userLabel}>IP:</span>
                    <span className={styles.userData}>{user.ip}</span>
                </div>
                <div>
                    <span className={styles.userLabel}>Mac Address:</span>
                    <span className={styles.userData}>{user.macAddress}</span>
                </div>
                <div>
                    <span className={styles.userLabel}>University:</span>
                    <span className={styles.userData}>{user.university}</span>
                </div>
                <div>
                    <span className={styles.userLabel}>EIN:</span>
                    <span className={styles.userData}>{user.ein}</span>
                </div>
                <div>
                    <span className={styles.userLabel}>SSN:</span>
                    <span className={styles.userData}>{user.ssn}</span>
                </div>
                <div>
                    <span className={styles.userLabel}>User Agent:</span>
                    <span className={styles.userData}>{user.userAgent}</span>
                </div>
            </div>
            <div className={styles.userDetails}>
                <div className={styles.userAddress}>
                    <span className={styles.userAddressLabel}>Address:</span>
                    {user.address.address}, {user.address.city}, {user.address.state}, {user.address.postalCode}
                </div>
            </div>
            <div className={styles.userDetails}>
                <div className={styles.userCompany}>
                    <span className={styles.userLabel}>Company Name:</span>
                    {user.company.name}
                </div>
                <div>
                    <span className={styles.userLabel}>Department:</span>
                    <span className={styles.userData}>{user.company.department}</span>
                </div>
                <div>
                    <span className={styles.userLabel}>Title:</span>
                    <span className={styles.userData}>{user.company.title}</span>
                </div>
                <div className={styles.userAddress}>
                    <span className={styles.userAddressLabel}>Company Address:</span>
                    {user.company.address.address}, {user.company.address.city}, {user.company.address.state}, {user.company.address.postalCode}
                </div>
            </div>
            <button className={styles.button} onClick={onClickHandler}>Show all posts</button>
        </div>
    );
};


export {User};