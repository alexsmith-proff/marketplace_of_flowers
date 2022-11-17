import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { GET_ALL_SECTIONS } from '../../../graphql/section.graphql';
import { IElement, ISection } from '../../../interfaces/section.interface';

import s from './ContentAdminSections.module.scss'

interface ContentAdminSectionsProps {
}

const ContentAdminSections = ({ }: ContentAdminSectionsProps) => {
    const { loading, error, data } = useQuery(GET_ALL_SECTIONS)

    const [sections, setSections] = useState<ISection[]>(null)
    const [elements, setElements] = useState<IElement[]>(null)

    useEffect(() => {
        if (data) {
            setSections(data.getAllSections)
        }
    }, [data])

    console.log('sdddddd', sections);
    
    return (
        <div className={s.section}>
            <ul className={s.sectionlist}>
                {
                    sections &&
                    <>
                        {
                            sections.map((section, indexSection) => <li className={s.sectionItem} key={section.id}>
                                <div className={s.sectionTitle}>{`Секция - ${section.name} (${section.slug})`}</div>
                                <div className={s.wrap}>
                                    <ul className={s.elemList}>
                                        {
                                            sections[indexSection].elements && 
                                            <>
                                            {
                                                sections[indexSection].elements.map((elem, _) => <li className={s.elemItem} key={elem.id}>
                                                    <div className={s.elemTitle}>{`Элемент - ${elem.name} (${elem.slug})`}</div>
                                                </li>)
                                            }
                                            </>
                                        }
                                    </ul>
                                    <div className={s.operations}>
                                        <div className={s.operationsTitle}> Операции</div>
                                        <ul className={s.operationsSection}>
                                            <li className={s.operationsItem}>Добавить элемент</li>
                                        </ul>
                                        <ul className={s.operationsSection}>
                                            <li className={s.operationsItem}>Редактировать секцию</li>
                                            <li className={s.operationsItem}>Удалить секцию</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>)
                        }
                    </>

                }
            </ul>
        </div>
    );
};

export default ContentAdminSections;