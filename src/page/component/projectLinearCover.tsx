import React, { Component, useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators
} from 'reactstrap';
import ProjectItem from '../../data/projectItem';
import ProjectComponent from './projectComponent';
import { noAuto } from '@fortawesome/fontawesome-svg-core';

interface Props {
    catList: Array<ProjectItem>,
    catSize: number,
    catCurNum: number,
    moveProject: (idx: number) => void
}

interface State {
    projIdx: number,
    changing: boolean
}

class ProjectLinearCover extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    state = {
        projIdx: 0,
        changing: false
    };

    next() {
        let nextidx = this.props.catCurNum;
        if(this.state.changing) {
            return ;
        }
        else if(nextidx === this.props.catSize) {
            nextidx = 0;

            // 현재 state 변경
            this.setState({
                projIdx: nextidx
            });

            // carousel 상태를 상위에 적용
            this.props.moveProject(nextidx);
        }
        else {
            nextidx++;

            // 현재 state 변경
            this.setState({
                projIdx: nextidx
            });

            // carousel 상태를 상위에 적용
            this.props.moveProject(nextidx);
        }
    }

    prev() {
        let nextidx = this.props.catCurNum;
        if(this.state.changing) {
            return ;
        }
        else if(nextidx === 0) {
            nextidx = this.props.catSize - 1;

            // 현재 state 변경
            this.setState({
                projIdx: nextidx
            });

            // carousel 상태를 상위에 적용
            this.props.moveProject(nextidx);
        }
        else {
            nextidx--;

            // 현재 state 변경
            this.setState({
                projIdx: nextidx
            });

            // carousel 상태를 상위에 적용
            this.props.moveProject(nextidx);
        }
    }

    setChangingStatus(stat: boolean) {
        this.setState({
            changing: stat
        });
    }

    goToIndex(idx: number) {
        if(this.state.changing) return ;
        
        this.setState({
            projIdx: idx
        });

        // carousel 상태를 상위에 적용
        this.props.moveProject(idx);
    }

    render() {
        return (
            <Carousel
                activeIndex={this.props.catCurNum}
                next={this.next}
                previous={this.prev}
                interval={false}
            >
                <CarouselIndicators
                    items={this.props.catList}
                    activeIndex={this.props.catCurNum}
                    onClickHandler={() => this.goToIndex(this.props.catCurNum)}
                />

                {/* 이하 다수의 CarouselItem을 추가해야 함 */
                this.props.catList.map((item) => {
                    return (
                        <CarouselItem
                            onExiting={() => this.setChangingStatus(true)}
                            onExited={() => this.setChangingStatus(false)}
                            key={item.title}>
                            <ProjectComponent
                                title={item.title}
                                platform={item.platform}
                                tech={item.tech}
                                period={item.period}
                                link1={item.link1}
                                link2={item.link2}
                                link3={item.link3}
                                content={item.content}
                                dev={item.dev}
                                image={item.image}
                            />
                        </CarouselItem>
                    );
                })
                }
            </Carousel>
        );
    }
}

export default ProjectLinearCover;