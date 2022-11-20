import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { CREATE_ELEMENT, CREATE_SECTION, GET_ALL_SECTIONS } from "../../../graphql/section.graphql";
import { AiOutlinePlus } from 'react-icons/ai';
import { RiEdit2Line } from 'react-icons/ri';
import { MdDeleteOutline } from 'react-icons/md';
import { ICreateNameSlugInput, IElement, ISection } from "../../../interfaces/section.interface";

import s from "./ContentAdminSections.module.scss";
import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";
import { AdminButtonFunctional, AdminButtonType } from "../../../enums/AdminButtons.enum";
import WindowCreateSection from "../WindowCreateNameSlug/WindowCreateNameSlug";
import { AdminSectionType } from "../../../enums/AdminSections.enum";

interface ContentAdminSectionsProps { }

const ContentAdminSections = ({ }: ContentAdminSectionsProps) => {
    const { loading, error, data } = useQuery(GET_ALL_SECTIONS);
    const [createSection, dataCreateSection] = useMutation(CREATE_SECTION)
    const [createElement, dataCreateElement] = useMutation(CREATE_ELEMENT)

    const [windowCreateSectionVisible, setWindowCreateSectionVisible] = useState<boolean>(false)
    const [windowCreateElementVisible, setWindowCreateElementVisible] = useState<boolean>(false)

    const [sections, setSections] = useState<ISection[]>(null);

    const [activeSection, setActiveSection] = useState<number>(null)
    const [activeElement, setActiveElement] = useState<number>(null)
    const [activeBlockText, setActiveBlockText] = useState<number>(null)
    const [activeBlockImg, setActiveBlockImg] = useState<boolean>(false)

    const [currentIdElement, setCurrentIdElement] = useState<number>(null)



    useEffect(() => {
        if (data) {
            setSections(data.getAllSections);
        }
    }, [data]);

    const handleCreateSection = (createSectionInput: ICreateNameSlugInput) => {
        // Save DB
        createSection({
          variables: {
            createSectionInput: createSectionInput
          },
          refetchQueries: [
            {
              query: GET_ALL_SECTIONS
            }
          ]
        })
    }

    const handleCreateElement = (createElementInput: ICreateNameSlugInput, section_id: number) => {
        // Save DB
        createElement({
          variables: {
            createElementInput: {...createElementInput, section_id: +section_id}
          },
          refetchQueries: [
            {
              query: GET_ALL_SECTIONS
            }
          ]
        })
    }

    const closeWindow = () => {
        setWindowCreateSectionVisible(false)
        setWindowCreateElementVisible(false)
    }


    const handleMouseEnterSection = (indexSection: number) => {
        setActiveSection(indexSection)
        setActiveElement(null)
    }
    const handleMouseEnterElement = (indexSection: number, indexElement: number) => {
        setActiveSection(indexSection)
        setActiveElement(indexElement)
    }
    const handleMouseLeave = () => {
        setActiveSection(null)
        setActiveElement(null)
    }

    const handleClickCreateElement = (section: ISection) => {
        setCurrentIdElement(section.id)
        setWindowCreateElementVisible(true)
    }


    console.log("sdddddd", sections);
    console.log('activeSection = ', activeSection);
    

    return (
        <div className={s.section}>
            <WindowCreateSection visible={windowCreateSectionVisible} type={AdminSectionType.Section} createNameSlug={handleCreateSection} closeWindow={closeWindow} />
            <WindowCreateSection visible={windowCreateElementVisible} type={AdminSectionType.Element} createNameSlug={(data) => handleCreateElement(data, currentIdElement)} closeWindow={closeWindow} />
            <ul className={s.sectionlist}>
                {sections && (
                    <>
                        {sections.map((section, indexSection) => (
                            <li className={s.sectionItem} key={section.id}>
                                <div className={s.titleWrap} onMouseEnter={() => handleMouseEnterSection(indexSection)} onMouseLeave={handleMouseLeave}>
                                    <div className={s.sectionTitle}>{`Секция - ${section.name} (${section.slug})`}</div>
                                    {
                                        activeSection == indexSection && activeElement == null &&
                                        <>
                                            <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<AiOutlinePlus />} sizeIco={16} clickBtn={() => handleClickCreateElement(section)} />
                                            <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<RiEdit2Line />} sizeIco={16} />
                                            <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<MdDeleteOutline />} sizeIco={16} />
                                        </>
                                    }
                                </div>
                                <div className={s.wrap}>
                                    <ul className={s.elemList}>
                                        {sections[indexSection].elements && (
                                            <>
                                                {sections[indexSection].elements.map((elem, indexElement) => (
                                                    <li className={s.elemItem} key={elem.id}>
                                                        <div className={s.titleWrap} onMouseEnter={() => handleMouseEnterElement(indexSection, indexElement)} onMouseLeave={handleMouseLeave}>
                                                            <div className={s.elemTitle}>{`Элемент - ${elem.name} (${elem.slug})`}</div>
                                                            {
                                                                activeSection == indexSection && activeElement === indexElement &&
                                                                <>
                                                                    {/* <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<AiOutlinePlus />} sizeIco={16} /> */}
                                                                    <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<RiEdit2Line />} sizeIco={16} />
                                                                    <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<MdDeleteOutline />} sizeIco={16} />
                                                                </>
                                                            }
                                                        </div>
                                                        <ul className={s.blockTextList}>
                                                            {sections[indexSection].elements[indexElement].text_elements && (
                                                                <>
                                                                    {sections[indexSection].elements[indexElement].text_elements.map((text, indexBlockText) => (
                                                                        <li className={s.blockTextItem} onMouseEnter={() => setActiveBlockText(indexBlockText)} onMouseLeave={() => setActiveBlockText(null)}>
                                                                            <div className={s.titleWrap}>
                                                                                <div className={s.blockTextTitle}>{`${text.name} (${text.slug})`}</div>
                                                                                {
                                                                                    activeBlockText === indexBlockText &&
                                                                                    <>
                                                                                        {/* <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<AiOutlinePlus />} sizeIco={16} /> */}
                                                                                        <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<RiEdit2Line />} sizeIco={16} />
                                                                                        <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<MdDeleteOutline />} sizeIco={16} />
                                                                                    </>
                                                                                }
                                                                            </div>
                                                                            <div className={s.blockTextArea}>
                                                                                {text.text}
                                                                            </div>
                                                                        </li>
                                                                    ))}
                                                                </>
                                                            )}
                                                        </ul>
                                                        {/* <div className={s.blockImg} onMouseEnter={() => setActiveBlockImg(true)} onMouseLeave={() => setActiveBlockImg(false)}> */}
                                                            {sections[indexSection].elements[indexElement].img_elements.length != 0 && (
                                                                <div className={s.blockImg} onMouseEnter={() => setActiveBlockImg(true)} onMouseLeave={() => setActiveBlockImg(false)}>
                                                                    <div className={s.titleWrap}>
                                                                        <div className={s.blockImgTitle}>Изображения</div>
                                                                        {activeBlockImg &&
                                                                            <>
                                                                                {/* <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<AiOutlinePlus />} sizeIco={16} /> */}
                                                                                <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<RiEdit2Line />} sizeIco={16} />
                                                                                <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<MdDeleteOutline />} sizeIco={16} />
                                                                            </>
                                                                        }
                                                                    </div>
                                                                    <ul className={s.blockImgList}>
                                                                        {sections[indexSection].elements[indexElement].img_elements.map((img, _) => (
                                                                            <li className={s.blockImgItem}>
                                                                                <div className={s.blockImgPhoto}>{img.filename}</div>
                                                                                <div className={s.blockImgTitle}>{img.name}</div>
                                                                                <div className={s.blockImgSlug}>({img.slug})</div>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        {/* </div> */}
                                                    </li>
                                                )
                                                )}
                                            </>
                                        )}
                                    </ul>
                                    {/* <div className={s.operations}>
                                        <div className={s.operationsTitle}> Операции</div>
                                        <ul className={s.operationsSection}>
                                            <li className={s.operationsItem}>Добавить секцию</li>
                                            <li className={s.operationsItem}>Редактировать секцию</li>
                                            <li className={s.operationsItem}>Удалить секцию</li>
                                        </ul>
                                        <ul className={s.operationsSection}>
                                            <li className={s.operationsItem}>Добавить элемент</li>
                                        </ul>
                                    </div> */}
                                </div>
                            </li>
                        ))}
                    </>
                )}
            </ul>
            <div className={s.btnCreateSection}>
                <ButtonAdmin typeBtn={AdminButtonType.Text} functionalBtn={AdminButtonFunctional.Standard} border={true} clickBtn={() => setWindowCreateSectionVisible(true)}>Создать секцию</ButtonAdmin>
            </div>
        </div>
    );
};

export default ContentAdminSections;
