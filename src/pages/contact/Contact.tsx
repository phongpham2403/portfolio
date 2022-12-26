import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
    faEnvelope,
    faLocationPin,
    faMailBulk,
    faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import PageHeader from '../../components/page-header/PageHeader'
import styles from './Contact.module.scss'

const Contact = () => {
    const cx = classNames.bind(styles)
    const [info, setInfo] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const { name, email, subject, message } = info

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setInfo({ ...info, [name]: value })
    }

    return (
        <>
            <div className={cx('overlay')}></div>
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className={cx('wrapper')}
            >
                <div className={cx('header')}>
                    <PageHeader
                        title="contact"
                        lastWord="touch"
                        restWord="get in"
                    />
                </div>
                <div className={cx('content')}>
                    <div className={cx('details')}>
                        <h1>Don't be shy!</h1>
                        <p>
                            Feel free to get in touch with me. I am always open
                            to discussing new projects, creative ideas or
                            opportunities to be part of your visions.
                        </p>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon icon={faLocationPin} />
                            </div>
                            <div className={cx('des')}>
                                <span>Address</span>
                                <span>Q12 HCM</span>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon icon={faMailBulk} />
                            </div>
                            <div className={cx('des')}>
                                <span>Email</span>
                                <span>phong.pnhoang@gmail.com</span>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div className={cx('des')}>
                                <span>Phone</span>
                                <span>0394580324</span>
                            </div>
                        </div>
                        <div className={cx('social')}>
                            <a
                                target="_blank"
                                href="https://www.facebook.com/HoangPhongJS"
                                rel="noreferrer"
                            >
                                <div className={cx('item')}>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </div>
                            </a>
                            <a
                                target="_blank"
                                href="https://github.com/phongpham2403"
                                rel="noreferrer"
                            >
                                <div className={cx('item')}>
                                    <FontAwesomeIcon icon={faGithub} />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={cx('form')}>
                        <form>
                            <div className={cx('info')}>
                                <div className={cx('name')}>
                                    <Input
                                        name="name"
                                        value={name}
                                        type="text"
                                        placeholder="YOUR NAME"
                                        onChange={handleChangeInput}
                                    />
                                </div>
                                <div className={cx('email')}>
                                    <Input
                                        name="email"
                                        value={email}
                                        type="text"
                                        placeholder="YOUR EMAIL"
                                        onChange={handleChangeInput}
                                    />
                                </div>
                            </div>
                            <div className={cx('subject')}>
                                <Input
                                    name="subject"
                                    value={subject}
                                    type="text"
                                    placeholder="YOUR SUBJECT"
                                    onChange={handleChangeInput}
                                />
                            </div>
                            <div className={cx('message')}>
                                <Input
                                    name="message"
                                    value={message}
                                    type="textarea"
                                    placeholder="YOUR MESSAGE"
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </form>
                        <Button
                            rotate
                            rounded
                            label="send me"
                            icon={faEnvelope}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
