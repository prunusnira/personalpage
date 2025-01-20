import React from 'react'
import { TechStackWrap } from '../../data/TechStackWrap'
import { BodyContent, BodyHeader, ItemRow } from '../../styled/styledCommon'
import "./tech.css"

interface Props {
    data: TechStackWrap,
}

const TechStackCard: React.FC<Props> = ({data}) => {
    return (
        <ItemRow className="text techcard"
            style={{
                width: '100%',
                alignItems: 'stretch'
            }}>
            <BodyHeader className="lv4 cardheader">
                {data.title}
            </BodyHeader>
            <BodyContent className="cardbody">
                <ItemRow>
                    <b>About</b>
                </ItemRow>
                <ItemRow>
                    <ul>
                    {
                        data.text.map((x, i) => {
                            return <li>{x}</li>
                        })
                    }
                    </ul>
                    
                </ItemRow>
                {
                    (function() {
                        if(data.exp.length !== 0) {
                            return (
                                <>
                                    <ItemRow>
                                        <b>사용 경험</b>
                                    </ItemRow>
                                    <ItemRow>
                                        <ul>
                                        {
                                            data.exp.map(p => {
                                                return <li>{p}</li>
                                            })
                                        }
                                        </ul>
                                    </ItemRow>
                                </>
                            )
                        }
                    })()
                }
                {
                    (function() {
                        if(data.etc !== '') {
                            return (
                                <>
                                    <ItemRow>
                                        <b>기타</b>
                                    </ItemRow>
                                    <ItemRow>
                                        {data.etc}
                                    </ItemRow>
                                </>
                            )
                        }
                    })()
                }
            </BodyContent>
        </ItemRow>
    )
}

export default TechStackCard;