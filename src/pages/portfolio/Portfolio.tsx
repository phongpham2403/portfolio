import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Portfolio.module.scss'
import PageHeader from '../../components/page-header/PageHeader'
import Modal from '../../components/modal/Modal'
import Project from './components/project/Project'
import { projectList } from '../../common/data'

const Portfolio = () => {
    const cx = classNames.bind(styles)
    const [openModal, setOpenModal] = useState(false)
    const [selectedProjectId, setSelectedProjectId] = useState(0)
    const [selectedProject, setSelectedProject] = useState(
        projectList.find((pj) => pj.id === selectedProjectId)
    )

    const handleClick = (id: number) => () => {
        setOpenModal(true)
        setSelectedProjectId(id)
    }

    useEffect(() => {
        if (selectedProjectId) {
            setSelectedProject(
                projectList.find((pj) => pj.id === selectedProjectId)
            )
        }
    }, [selectedProjectId])

    const handleClose = () => {
        setOpenModal(false)
        setSelectedProjectId(0)
    }

    const handleEscKey = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setOpenModal(false)
        }
    }, [])

    useEffect(() => {
        document.addEventListener('keyup', handleEscKey, false)

        return () => document.removeEventListener('keyup', handleEscKey, false)
    }, [handleEscKey])

    return (
        <>
            <div className={cx('overlay')}></div>
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className={cx('wrapper', 'grid')}
            >
                <div className={cx('header')}>
                    <PageHeader
                        title="works"
                        lastWord="portfolio"
                        restWord="my"
                    />
                </div>
                <div className={cx('content', 'row')}>
                    {projectList.map((project) => (
                        <Project
                            key={project.id}
                            header={project.header}
                            onClick={handleClick(project.id)}
                            image={project.image.find((pj) => pj.id === 1)?.url}
                        />
                    ))}
                </div>
                {openModal && (
                    <>
                        <div
                            onClick={handleClose}
                            className={cx('overlay_modal')}
                        ></div>
                        <div className={cx('modal')}>
                            <Modal
                                selectedProject={selectedProject}
                                onClose={handleClose}
                            />
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default Portfolio
