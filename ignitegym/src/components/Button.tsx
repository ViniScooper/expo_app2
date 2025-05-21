import {ComponentProps} from "react";

import { Button as GluestackButton ,Text} from "@gluestack-ui/themed";




type Props = {
    title: string
}






export function Button({title}: Props) {
    return (
        <GluestackButton>
            <Text>{title}</Text>
        </GluestackButton>
    )
}