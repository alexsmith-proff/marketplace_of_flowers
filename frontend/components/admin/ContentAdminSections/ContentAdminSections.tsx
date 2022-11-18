import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_ALL_SECTIONS } from "../../../graphql/section.graphql";
import { AiOutlinePlus } from 'react-icons/ai';
import { RiEdit2Line } from 'react-icons/ri';
import { MdDeleteOutline } from 'react-icons/md';
import { IElement, ISection } from "../../../interfaces/section.interface";

import s from "./ContentAdminSections.module.scss";
import ButtonAdmin from "../Buttons/ButtonAdmin/ButtonAdmin";
import { AdminButtonFunctional, AdminButtonType } from "../../../enums/AdminButtons.enum";

interface ContentAdminSectionsProps { }

const ContentAdminSections = ({ }: ContentAdminSectionsProps) => {
    const { loading, error, data } = useQuery(GET_ALL_SECTIONS);

    const [sections, setSections] = useState<ISection[]>(null);
    const [elements, setElements] = useState<IElement[]>(null);

    const [activeSection, setActiveSection] = useState<number>(null)
    const [activeElement, setActiveElement] = useState<number>(null)
    const [activeBlockText, setActiveBlockText] = useState<number>(null)
    const [activeBlockImg, setActiveBlockImg] = useState<boolean>(false)



    useEffect(() => {
        if (data) {
            setSections(data.getAllSections);
        }
    }, [data]);

    console.log("sdddddd", sections);

    return (
        <div className={s.section}>
            <ul className={s.sectionlist}>
                {sections && (
                    <>
                        {sections.map((section, indexSection) => (
                            <li className={s.sectionItem} key={section.id}>
                                <div className={s.titleWrap} onMouseEnter={() => setActiveSection(indexSection)} onMouseLeave={() => setActiveSection(null)}>
                                    <div className={s.sectionTitle}>{`Секция - ${section.name} (${section.slug})`}</div>
                                    {
                                        activeSection === indexSection &&
                                        <>
                                            {/* <ButtonAdmin typeBtn={AdminButtonType.Ico} functionalBtn={AdminButtonFunctional.Standard} border={false} ico={<AiOutlinePlus />} sizeIco={16} /> */}
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
                                                        <div className={s.titleWrap} onMouseEnter={() => setActiveElement(indexElement)} onMouseLeave={() => setActiveElement(null)}>
                                                            <div className={s.elemTitle}>{`Элемент - ${elem.name} (${elem.slug})`}</div>
                                                            {
                                                                activeElement === indexElement &&
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
        </div>
    );
};

export default ContentAdminSections;
