import React, {Component} from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div><img
            src='https://lh3.googleusercontent.com/proxy/wfORhNmfFMCo9DtTd_gLbsZSQLiBL-AT813b1sFy41hPYugw2iuSeJlK2nn66qlYJuK8lebFuLiRZtZbi12tr1PUosAeAA'/>
        </div>
        <div>ava + description</div>
        <div>my post
            <div>New post</div>
            <div className='post'>
                <div className={s.item}>post1</div>
                <div className={s.item}>post2</div>
            </div>
        </div>
    </div>
};

export default Profile;