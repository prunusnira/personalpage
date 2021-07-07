import React from "react"
import { ItemCol, ItemRow } from "../../styled/styledCommon"

interface Props {
    icon: string,
    name: string,
    desc: string
}

const TechStackItem = (props: Props) => {
    return (
        <ItemRow keepDirHor={true}>
            <ItemCol size={3}>
                {
                    (function() {
                        if(props.icon !== '#none') {
                            return (
                                <img
                                    alt="icon"
                                    height="48px"
                                    src={`${process.env.PUBLIC_URL}${props.icon}`} />
                            )
                        }
                    })()
                }
            </ItemCol>
            <ItemCol className='text' size={7}>
                <ItemRow>
                    {props.name}
                </ItemRow>
                <ItemRow className='lv5 text-left'>
                    {props.desc}
                </ItemRow>
            </ItemCol>
        </ItemRow>
    )
}

export default TechStackItem