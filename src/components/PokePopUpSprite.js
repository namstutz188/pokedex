import { Box } from "@mui/material"

export default function PokePopUpSprite({frontSprite, backSprite, pokemon}) {
    return  <>
                {
                    frontSprite !== '' &&
                    <Box
                        component = 'img'
                        alt = {`${pokemon} front image`}
                        src = {frontSprite}
                    />
                }
                {
                    backSprite !== '' &&
                    <Box
                        component = 'img'
                        alt = {`${pokemon} back image`} 
                        src = {backSprite}
                    />
                }
                
            </>
}