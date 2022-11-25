import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { CREATE_BLOCK_TEXT, CREATE_ELEMENT, CREATE_SECTION, DELETE_BLOCK_TEXT, DELETE_ELEMENT, DELETE_SECTION, GET_ALL_SECTIONS, UPDATE_ELEMENT, UPDATE_SECTION } from "../../../graphql/section.graphql";
import { AiOutlinePlus } from 'react-icons/ai';
import { RiEdit2Line } from 'react-icons/ri';
import { MdDeleteOutline } from 'react-icons/md';
import { ICreateBlockTextInput, IElement, INameSlugInput, ISection, ITextElement } from "../../../interfaces/section.interface";

import s from "./ContentAdminSections.module.scss";
import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";
import { AdminButtonFunctional, AdminButtonType } from "../../../enums/AdminButtons.enum";
import WindowCreateNameSlug from "../WindowCreateNameSlug/WindowCreateNameSlug";
import { AdminSectionType } from "../../../enums/AdminSections.enum";
import axios from "axios";
import { AdminWindowMode } from "../../../enums/Mode.enum";
import WindowCreateBlock from "../WindowCreateBlock/WindowCreateBlock";

interface ContentAdminSectionsProps { }

const ContentAdminSections = ({ }: ContentAdminSectionsProps) => {
    const { loading, error, data, refetch: RefeachAllSections } = useQuery(GET_ALL_SECTIONS);
    const [createSection, dataCreateSection] = useMutation(CREATE_SECTION)
    const [updateSection, dataUpdateSection] = useMutation(UPDATE_SECTION)
    const [deleteSection, dataDeleteSection] = useMutation(DELETE_SECTION)
    const [createElement, dataCreateElement] = useMutation(CREATE_ELEMENT)
    const [updateElement, dataUpdateElement] = useMutation(UPDATE_ELEMENT)
    const [deleteElement, dataDeleteElement] = useMutation(DELETE_ELEMENT)
    const [createBlockText, dataCreateBlockText] = useMutation(CREATE_BLOCK_TEXT)
    const [deleteBlockText, dataDeleteBlockText] = useMutation(DELETE_BLOCK_TEXT)

    const [windowCreateSectionVisible, setWindowCreateSectionVisible] = useState<boolean>(false)
    const [windowUpdateSectionVisible, setWindowUpdateSectionVisible] = useState<boolean>(false)
    const [windowCreateElementVisible, setWindowCreateElementVisible] = useState<boolean>(false)
    const [windowUpdateElementVisible, setWindowUpdateElementVisible] = useState<boolean>(false)
    const [windowCreateBlockVisible, setWindowCreateBlockVisible] = useState<boolean>(false)
    const [windowUpdateBlockVisible, setWindowUpdateBlockVisible] = useState<boolean>(false)

    const [sections, setSections] = useState<ISection[]>(null);

    const [activeSection, setActiveSection] = useState<number>(null)
    const [activeElement, setActiveElement] = useState<number>(null)
    const [activeBlockText, setActiveBlockText] = useState<number>(null)
    const [activeBlockImg, setActiveBlockImg] = useState<boolean>(false)

    const [currentIdSection, setCurrentIdSection] = useState<number>(null)
    const [currentIdElement, setCurrentIdElement] = useState<number>(null)

    const [currentName, setCurrentName] = useState<string>('a')
    const [currentSlug, setCurrentSlug] = useState<string>('q')



    useEffect(() => {
        if (data) {
            setSections(data.getAllSections);
        }
    }, [data]);
    


    const handleCreateSection = (createSectionInput: INameSlugInput) => {
        console.log('saveeee');
        
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

    const handleUpdateSection = (sectionInput: INameSlugInput) => {

        // Update DB
        updateSection({
          variables: {
            updateSectionInput: {...sectionInput, id: +currentIdSection}
          },
          refetchQueries: [
            {
              query: GET_ALL_SECTIONS
            }
          ]
        })
    }

    const handleCreateElement = (createElementInput: INameSlugInput, section_id: number) => {
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

    const handleUpdateElement = (elementInput: INameSlugInput) => {
        // Update DB
        updateElement({
          variables: {
            updateElementInput: {...elementInput, id: +currentIdElement}
          },
          refetchQueries: [
            {
              query: GET_ALL_SECTIONS
            }
          ]
        })
    }

    const handleCreateBlockText = (createBlockTextInput: ICreateBlockTextInput, element_id: number) => {
        // Save DB
        createBlockText({
          variables: {
            createTextElementInput: {...createBlockTextInput, element_id: +element_id}
          },
          refetchQueries: [
            {
              query: GET_ALL_SECTIONS
            }
          ]
        })
    }

    const handleCreateBlockImg = (formData: any, element_id: number) => {
        formData.append('element_id', element_id)
        axios.post(process.env.SERVER_URL + '/api/imgelement/create', formData, )
            .then((res) => {
                console.log('Success' + res.data);
                RefeachAllSections()
            })
            .catch((err) => {
                console.log(err);
            })
        
    }



    const closeWindow = () => {
        setWindowCreateSectionVisible(false)
        setWindowCreateElementVisible(false)
        setWindowCreateBlockVisible(false)

        setWindowUpdateSectionVisible(false)
        setWindowUpdateElementVisible(false)
        setWindowUpdateBlockVisible(false)
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




    const handleClickUpdateSection = (section: ISection) => {
        setCurrentName(section.name)
        setCurrentSlug(section.slug)
        setCurrentIdSection(section.id)
        setWindowUpdateSectionVisible(true)
    }

    const handleClickDeleteSection = (section: ISection) => {
        // Delete DB
        deleteSection({
            variables: {
              id: +section.id
            },
            refetchQueries: [
              {
                query: GET_ALL_SECTIONS
              }
            ]
          })
    }
    




    const handleClickCreateElement = (section: ISection) => {
        setCurrentIdSection(section.id)
        setWindowCreateElementVisible(true)
    }    

    const handleClickUpdateElement = (element: IElement) => {
        setCurrentName(element.name)
        setCurrentSlug(element.slug)
        setCurrentIdElement(element.id)
        setWindowUpdateElementVisible(true)
    }

    const handleClickDeleteElement = (element: IElement) => {
        // Delete DB
        deleteElement({
            variables: {
              id: +element.id
            },
            refetchQueries: [
              {
                query: GET_ALL_SECTIONS
              }
            ]
          })
    }



    

    const handleClickCreateBlock = (element: IElement) => {
        setCurrentIdElement(element.id)
        setWindowCreateBlockVisible(true)
    }

    const handleClickDeleteTextBlock = (textblock: ITextElement) => {
        // Delete DB
        deleteBlockText({
            variables: {
              id: +textblock.id
            },
            refetchQueries: [
              {
                query: GET_ALL_SECTIONS
              }
            ]
          })
    }


    // console.log('currentName', currentName);
    // console.log('currentSlug', currentSlug);


    return (
        <div className={s.section}>
            {/* Создать секцию */}
            <WindowCreateNameSlug visible={windowCreateSectionVisible} modeWindow={AdminWindowMode.Create} typeSection={AdminSectionType.Section} createNameSlug={handleCreateSection} closeWindow={closeWindow} />
            {/* Редактировать секцию */}
            <WindowCreateNameSlug visible={windowUpdateSectionVisible} modeWindow={AdminWindowMode.Update} typeSection={AdminSectionType.Section} name={currentName} slug={currentSlug} updateNameSlug={handleUpdateSection} closeWindow={closeWindow} />

            {/* Создать элемент */}
            <WindowCreateNameSlug visible={windowCreateElementVisible} modeWindow={AdminWindowMode.Create} typeSection={AdminSectionType.Element} createNameSlug={(data) => handleCreateElement(data, currentIdSection)} closeWindow={closeWindow} />
            {/* Редактировать элемент */}
            <WindowCreateNameSlug visible={windowUpdateElementVisible} modeWindow={AdminWindowMode.Update} typeSection={AdminSectionType.Element} name={currentName} slug={currentSlug} updateNameSlug={(data) => handleUpdateElement(data)} closeWindow={closeWindow} />
            {/* Создать текст/изображение блок */}
            <WindowCreateBlock visible={windowCreateBlockVisible} createBlockText={(data) => handleCreateBlockText(data, currentIdElement)} createBlockImg={(data) => handleCreateBlockImg(data, currentIdElement)} closeWindow={closeWindow} />
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
                                            <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<RiEdit2Line />} sizeIco={16} clickBtn={() => handleClickUpdateSection(section)} />
                                            <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<MdDeleteOutline />} sizeIco={16} clickBtn={() => handleClickDeleteSection(section)} />
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
                                                                    <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<AiOutlinePlus />} sizeIco={16} clickBtn={() => handleClickCreateBlock(elem)} />
                                                                    <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<RiEdit2Line />} sizeIco={16} clickBtn={() => handleClickUpdateElement(elem)} />
                                                                    <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<MdDeleteOutline />} sizeIco={16} clickBtn={() => handleClickDeleteElement(elem)} />
                                                                </>
                                                            }
                                                        </div>
                                                        <ul className={s.blockTextList}>
                                                            {sections[indexSection].elements[indexElement].text_elements && (
                                                                <>
                                                                    {sections[indexSection].elements[indexElement].text_elements.map((text, indexBlockText) => (
                                                                        <li className={s.blockTextItem} onMouseEnter={() => setActiveBlockText(indexBlockText)} onMouseLeave={() => setActiveBlockText(null)} key={indexBlockText}>
                                                                            <div className={s.titleWrap}>
                                                                                <div className={s.blockTextTitle}>{`${text.name} (${text.slug})`}</div>
                                                                                {
                                                                                    activeBlockText === indexBlockText &&
                                                                                    <>
                                                                                        {/* <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<AiOutlinePlus />} sizeIco={16} /> */}
                                                                                        <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<RiEdit2Line />} sizeIco={16} />
                                                                                        <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<MdDeleteOutline />} sizeIco={16} clickBtn={() => handleClickDeleteTextBlock(text)} />
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
                                                                                {/* <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<RiEdit2Line />} sizeIco={16} /> */}
                                                                                <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<MdDeleteOutline />} sizeIco={16} />
                                                                            </>
                                                                        }
                                                                    </div>
                                                                    <ul className={s.blockImgList}>
                                                                        {sections[indexSection].elements[indexElement].img_elements.map((img, _) => (
                                                                            <li className={s.blockImgItem} key={img.id}>
                                                                                <div className={s.blockImgPhoto}>
                                                                                    <img src={process.env.SERVER_URL + '/' + img.filename} alt={img.filename} />
                                                                                </div>
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
