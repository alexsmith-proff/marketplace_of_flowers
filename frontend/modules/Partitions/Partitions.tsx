import React, { FC } from 'react';
import PartitionList from './components/PartitionList/PartitionList';
import { ISection } from '../../interfaces/section.interface';

import s from './Partitions.module.scss'

interface PartitionsProps {
    partitionSection: ISection
}

const Partitions: FC<PartitionsProps> = ({ partitionSection }) => {

    return (
        <>
            <section className={s.partitions}>
                <div className="container">
                    <h2 className={s.title}>Разделы</h2>
                    <PartitionList partitions={partitionSection.elements} />
                </div>
            </section>
        </>
    );
};

export default Partitions;



